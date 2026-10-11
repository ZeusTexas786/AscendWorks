<?php
/**
 * Contact + job-application endpoint for ascendworksnow.com
 *
 * The site is a static export, so this is the only server-side file. It takes
 * a JSON POST from the site's forms and emails it to the address below.
 *
 * Deliberately dependency-free: PHP's built-in mail(), which works on
 * essentially every Apache shared host without Composer, an SMTP account, or a
 * third-party form service. No database; the only state is a rate-limit
 * counter in a private directory beside this file.
 *
 * Responses are always a JSON envelope: {"ok":true} or {"ok":false,"error":"…"}.
 * The client treats any non-envelope response (a 404, or raw PHP source on a
 * host without PHP) as a failure and falls back to a prefilled mailto: link.
 */

declare(strict_types=1);

// ── Configuration ────────────────────────────────────────────────────────────
const MAIL_TO        = 'aaron@ascendworksnow.com';
// From: must be on your own domain or SPF/DKIM will fail and the mail will be
// binned as spoofed. The visitor's address goes in Reply-To instead.
const MAIL_FROM      = 'noreply@ascendworksnow.com';
const MAIL_FROM_NAME = 'AscendWorksNow Website';

const RATE_LIMIT_MAX    = 5;      // submissions per IP…
const RATE_LIMIT_WINDOW = 3600;   // …per this many seconds
// A per-IP bucket alone is defeated by address rotation — a rented /64 gives an
// attacker ~1.8e19 source addresses, so every request would land in a fresh
// bucket. This ceiling bounds the worst case regardless of source.
const GLOBAL_LIMIT_MAX  = 200;
const GLOBAL_LIMIT_WIN  = 3600;

const MAX_FIELD_LEN = 5000;  // the free-text message only
const MAX_SHORT_LEN = 200;   // names, company, phone, page, every other field

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function fail(string $msg, int $code = 400): void {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg], JSON_UNESCAPED_SLASHES);
    exit;
}

function ok(): void {
    echo json_encode(['ok' => true], JSON_UNESCAPED_SLASHES);
    exit;
}

// ── Method ───────────────────────────────────────────────────────────────────
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    fail('Method not allowed.', 405);
}

// ── Input: JSON body, falling back to a normal form post ─────────────────────
$raw  = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}
if (!is_array($data) || $data === []) {
    fail('Empty submission.');
}

/**
 * Trim, cap length, and drop anything that is not a simple scalar.
 * mbstring is not enabled on every budget host, so fall back to substr()
 * rather than dying with an undefined-function fatal.
 */
function field(array $d, string $key, int $max = MAX_SHORT_LEN): string {
    $v = $d[$key] ?? '';
    if (!is_scalar($v)) {
        return '';
    }
    $v = trim((string) $v);
    return function_exists('mb_substr') ? mb_substr($v, 0, $max) : substr($v, 0, $max);
}

/**
 * Strip CR/LF before a value is placed in a mail header. Without this, a
 * newline in the visitor's name or email lets an attacker inject extra headers
 * (Bcc:, Content-Type:) and turn this endpoint into an open relay.
 */
function headerSafe(string $v): string {
    return trim(str_replace(["\r", "\n", "\0"], '', $v));
}

/**
 * Render a visitor-supplied name as an RFC 5322 display-name.
 *
 * Stripping CR/LF is not enough by itself: the display name is interpolated
 * before "<addr>", so a value like `Ops<real@corp.com>,` would close the phrase
 * and append a SECOND address to Reply-To — a reply would then also reach
 * whoever the attacker named. Drop the "specials" and quote what remains.
 */
function displayName(string $v): string {
    $v = headerSafe($v);
    $v = preg_replace('/[\x00-\x1F\x7F"\\\\<>@,;:\[\]()]/u', '', $v) ?? '';
    $v = trim(preg_replace('/\s+/u', ' ', $v) ?? '');
    $v = function_exists('mb_substr') ? mb_substr($v, 0, 64) : substr($v, 0, 64);
    return $v === '' ? '' : '"' . $v . '"';
}

/** RFC 2047-encode a header value if it is not plain ASCII, and bound it. */
function encodeHeaderText(string $v): string {
    $v = headerSafe($v);
    $v = function_exists('mb_substr') ? mb_substr($v, 0, 100) : substr($v, 0, 100);
    return preg_match('/[^\x20-\x7E]/', $v)
        ? '=?UTF-8?B?' . base64_encode($v) . '?='
        : $v;
}

/** Collapse CR/LF so a visitor cannot forge the labelled lines in the body. */
function bodyLine(string $v): string {
    return trim(preg_replace('/[\r\n]+/', ' ', $v) ?? '');
}

// ── Honeypot ─────────────────────────────────────────────────────────────────
// A hidden field no human ever sees. Bots fill every input they find, so a
// non-empty value means automation. Report success so the bot does not retry.
if (field($data, 'website') !== '') {
    ok();
}

// ── Validation ───────────────────────────────────────────────────────────────
$firstName = field($data, 'firstName');
$lastName  = field($data, 'lastName');
$fullName  = field($data, 'fullName');
$email     = field($data, 'email');
$company   = field($data, 'company');
$role      = field($data, 'role');
$message   = field($data, 'message', MAX_FIELD_LEN);

// A job application carries one name field and no company, so it cannot be
// held to the enquiry form's required set.
$isApplication = field($data, 'intent') === 'application';

$missing = [];
if ($isApplication) {
    if ($fullName === '') { $missing[] = 'your name'; }
    if ($role     === '') { $missing[] = 'the role'; }
} else {
    if ($firstName === '') { $missing[] = 'first name'; }
    if ($lastName  === '') { $missing[] = 'last name'; }
    if ($company   === '') { $missing[] = 'company'; }
    if ($message   === '') { $missing[] = 'message'; }
}

// FILTER_VALIDATE_EMAIL alone accepts RFC 5322 quoted local parts, which may
// contain < > , and @ — legal, but not something we want inside a header.
$EMAIL_RE = '/^[A-Za-z0-9!#$%&\'*+\/=?^_`{|}~.-]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,}$/';
if ($email === ''
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || !preg_match($EMAIL_RE, $email)) {
    $missing[] = 'a valid email address';
}
if ($missing !== []) {
    fail('Please provide ' . implode(', ', $missing) . '.', 422);
}

// ── Rate limit ───────────────────────────────────────────────────────────────
// State lives in a private directory beside this file, NOT in a system temp dir
// that may be shared with other tenants on this host — a co-tenant could plant
// a symlink at a predictable path and have us overwrite our own .htaccess.
$ip  = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$dir = __DIR__ . '/.state';
if (!is_dir($dir)) {
    @mkdir($dir, 0700, true);
    @file_put_contents(
        $dir . '/.htaccess',
        "<IfModule mod_authz_core.c>\n  Require all denied\n</IfModule>\n"
        . "<IfModule !mod_authz_core.c>\n  Order allow,deny\n  Deny from all\n</IfModule>\n"
    );
}

$now = time();

/** Read a bucket, refusing to follow a link someone else may have planted. */
function readBucket(string $path, int $now, int $window): array {
    if (is_link($path)) {
        @unlink($path);
        return [];
    }
    if (!is_file($path) || !is_readable($path)) {
        return [];
    }
    $prev = json_decode((string) @file_get_contents($path), true);
    if (!is_array($prev)) {
        return [];
    }
    return array_values(array_filter(
        $prev,
        static fn($t) => is_int($t) && ($now - $t) < $window
    ));
}

// Per-source-address bucket
$bucket = $dir . '/rl_' . hash('sha256', $ip . '|' . MAIL_FROM) . '.json';
$hits   = readBucket($bucket, $now, RATE_LIMIT_WINDOW);
if (count($hits) >= RATE_LIMIT_MAX) {
    fail('Too many submissions from this address. Please email ' . MAIL_TO . ' directly.', 429);
}

// Global ceiling, above the per-address bucket
$gfile = $dir . '/rl_global.json';
$ghits = readBucket($gfile, $now, GLOBAL_LIMIT_WIN);
if (count($ghits) >= GLOBAL_LIMIT_MAX) {
    fail('The contact form is temporarily unavailable. Please email ' . MAIL_TO . ' directly.', 429);
}

$hits[]  = $now;
$ghits[] = $now;
@file_put_contents($bucket, json_encode($hits), LOCK_EX);
@file_put_contents($gfile, json_encode($ghits), LOCK_EX);

// Opportunistic GC — each distinct address would otherwise leave a file behind
// permanently, eventually exhausting inodes.
if (random_int(1, 50) === 1) {
    foreach (glob($dir . '/rl_*.json') ?: [] as $f) {
        if ($f !== $gfile && @filemtime($f) < $now - RATE_LIMIT_WINDOW) {
            @unlink($f);
        }
    }
}

// ── Compose ──────────────────────────────────────────────────────────────────
$labels = [
    'intent'   => 'Enquiry type',
    'title'    => 'Job title',
    'phone'    => 'Phone',
    'industry' => 'Industry',
    'service'  => 'Primary service',
    'scope'    => 'Project scope',
    'timeline' => 'Timeline',
    'role'     => 'Role applied for',
    'linkedin' => 'LinkedIn',
    'certs'    => 'Certifications',
    'resume'   => 'Resume / portfolio',
];

$displayName = $isApplication ? $fullName : trim($firstName . ' ' . $lastName);

$lines = [
    $isApplication
        ? 'New job application from ascendworksnow.com'
        : 'New enquiry from ascendworksnow.com',
    str_repeat('=', 46),
    '',
    'Name:     ' . bodyLine($displayName),
    'Email:    ' . bodyLine($email),
];
if ($company !== '') {
    $lines[] = 'Company:  ' . bodyLine($company);
}
foreach ($labels as $key => $label) {
    $v = bodyLine(field($data, $key));
    if ($v !== '') {
        $lines[] = str_pad($label . ':', 10) . $v;
    }
}

// Trusted metadata goes ABOVE the free-text message, so nothing an attacker
// controls is followed by lines that look like ours.
$lines[] = '';
$lines[] = 'Submitted: ' . gmdate('Y-m-d H:i:s') . ' UTC';
$lines[] = 'Source IP: ' . $ip;
$page = bodyLine(field($data, 'page'));
if ($page !== '') {
    $lines[] = 'Page:      ' . $page;
}
$lines[] = '';
$lines[] = 'Message';
$lines[] = str_repeat('-', 46);
$lines[] = $message;   // multi-line is legitimate here, and nothing follows it

$body = implode("\n", $lines);

$subject = $isApplication
    ? 'Job application - ' . encodeHeaderText($displayName) . ' (' . encodeHeaderText($role) . ')'
    : 'Website enquiry - ' . encodeHeaderText($displayName) . ' (' . encodeHeaderText($company) . ')';

$headers = implode("\r\n", [
    'From: ' . MAIL_FROM_NAME . ' <' . MAIL_FROM . '>',
    'Reply-To: ' . trim(displayName($displayName) . ' <' . $email . '>'),
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'MIME-Version: 1.0',
    'X-Mailer: ascendworksnow-contact',
]);

// -f sets the envelope sender so bounces return to a real mailbox and the
// message is less likely to be treated as forged.
$sent = @mail(MAIL_TO, $subject, $body, $headers, '-f' . MAIL_FROM);

if (!$sent) {
    fail('The message could not be sent. Please email ' . MAIL_TO . ' directly.', 502);
}

ok();
