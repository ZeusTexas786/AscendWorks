/**
 * Contact form submission.
 *
 * Posts to /contact.php (see public/contact.php). The site is a static export,
 * so that PHP file is the only server-side component — if the host has PHP
 * disabled it will 404 or return raw source rather than our JSON envelope. We
 * treat anything that is not `{ok:true}` as a failure and hand the caller a
 * prefilled mailto: so the enquiry still reaches Aaron instead of vanishing.
 */

export const CONTACT_EMAIL = "aaron@ascendworksnow.com";
const ENDPOINT = "/contact.php";

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; mailto: string };

/** Human-readable labels for the optional fields, used in the mailto body. */
const FIELD_LABELS: Record<string, string> = {
  intent: "Enquiry type",
  title: "Job title",
  phone: "Phone",
  industry: "Industry",
  service: "Primary service",
  scope: "Project scope",
  timeline: "Timeline",
};

function buildMailto(data: Record<string, string>): string {
  const name = [data.firstName, data.lastName].filter(Boolean).join(" ");
  const subject = `Website enquiry${data.company ? ` — ${data.company}` : ""}`;

  const lines: string[] = [];
  if (name) lines.push(`Name: ${name}`);
  if (data.email) lines.push(`Email: ${data.email}`);
  if (data.company) lines.push(`Company: ${data.company}`);
  for (const [key, label] of Object.entries(FIELD_LABELS)) {
    if (data[key]) lines.push(`${label}: ${data[key]}`);
  }
  if (data.message) lines.push("", data.message);

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

/** Collect a form's named fields into a plain object. */
export function formToObject(form: HTMLFormElement): Record<string, string> {
  const out: Record<string, string> = {};
  new FormData(form).forEach((value, key) => {
    if (typeof value === "string") out[key] = value;
  });
  if (typeof window !== "undefined") out.page = window.location.pathname;
  return out;
}

export async function submitContactForm(form: HTMLFormElement): Promise<ContactResult> {
  const data = formToObject(form);
  const mailto = buildMailto(data);

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // A host without PHP serves the file as text, so .json() throws — that is a
    // failure, not a crash. Never assume a 200 means the mail actually sent.
    const payload = (await res.json().catch(() => null)) as
      | { ok?: boolean; error?: string }
      | null;

    if (res.ok && payload?.ok === true) return { ok: true };

    return {
      ok: false,
      error:
        payload?.error ??
        "We couldn't submit the form from here. You can email us directly instead.",
      mailto,
    };
  } catch {
    return {
      ok: false,
      error: "Network error — the message wasn't sent. You can email us directly instead.",
      mailto,
    };
  }
}
