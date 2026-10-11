import type { Metadata } from "next";
import Link from "next/link";
import { Warning, ShieldCheck, Prohibit } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | AscendWorksNow",
  description:
    "How AscendWorksNow collects, uses, and protects personal information submitted through ascendworksnow.com. This site sets no cookies and runs no analytics or advertising trackers.",
};

/*
  ── Accuracy note for future editors ─────────────────────────────────────────
  Every factual claim below was verified against the code on the date this file
  was written. If you change any of the following, this page becomes wrong and
  must be updated in the same commit:

    • public/contact.php            — the only server-side code; field list,
                                      rate-limit bucket, "Source IP" line
    • src/lib/contact.ts            — what the browser posts, mailto fallback
    • src/components/layout/Navbar.tsx — links to the product guide; no visitor
                      profile or persistent personalization
    • public/.htaccess              — Content-Security-Policy
    • src/app/layout.tsx            — next/font/google self-hosts the webfonts
                                      at build time; no request reaches Google

  Do not add a claim here that you cannot point at a line of code for.
*/

const CONTACT_EMAIL = "aaron@ascendworksnow.com";

/** Fields the contact forms post to /contact.php. Mirrors public/contact.php. */
const COLLECTED = [
  { field: "First and last name", note: "Required. Used to address the reply." },
  { field: "Work email address", note: "Required. Used to reply to your enquiry." },
  { field: "Company name", note: "Required. Used to route and qualify the enquiry." },
  { field: "Your message", note: "Required. Free text you choose to write." },
  { field: "Job title", note: "Optional." },
  { field: "Phone number", note: "Optional." },
  { field: "Industry", note: "Optional. Chosen from a fixed list." },
  { field: "Primary service, project scope, timeline", note: "Optional. Chosen from fixed lists." },
  { field: "Enquiry type", note: "Set automatically by the form you used." },
  {
    field: "The page you submitted from",
    note: "The path only (for example /services/servicenow), so we know what you were reading.",
  },
  {
    field: "Your IP address",
    note: "Recorded by the server that receives the form and included in the enquiry email.",
  },
  { field: "Submission timestamp", note: "UTC date and time of the submission." },
];

/** What the site verifiably does not do. */
const NOT_COLLECTED = [
  "We set no cookies of any kind — first-party or third-party.",
  "We run no analytics: no Google Analytics, no Google Tag Manager, no Meta Pixel, no LinkedIn Insight Tag, no Hotjar, no session recording, no heatmaps.",
  "We run no advertising or retargeting pixels and build no advertising profiles.",
  "We do not sell or share personal information, and we do not receive money or other value for it.",
  "We operate no user accounts, no logins, and no database — there is nothing to create an account in.",
  "We do not use automated decision-making or profiling on your information.",
];

function DraftBanner() {
  return (
    <div className="glass mt-10 flex items-start gap-4 rounded-2xl p-5 [--glass-edge:rgba(245,158,11,0.45)]">
      <Warning size={22} weight="fill" className="mt-0.5 shrink-0 text-amber" />
      <p className="text-sm leading-relaxed text-slate-light">
        <span className="font-display font-700 text-amber">
          Draft — pending legal review.
        </span>{" "}
        This document has not been reviewed or approved by an attorney. It
        describes the site&rsquo;s actual data handling as verified in the
        codebase, but it contains unresolved placeholders and must not be
        published, linked from marketing material, or relied on as a legal
        notice until counsel has signed it off.
      </p>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="section-dark relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Legal
              </span>
              <h1 className="mt-6 font-display text-4xl font-800 leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Privacy <span className="text-gold-gradient">Policy</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-light">
                This policy explains what ascendworksnow.com does with personal
                information. It is deliberately specific: everything below
                describes behaviour that exists in this website&rsquo;s code,
                not a generic template.
              </p>
              <p className="mt-4 text-sm text-slate">
                Effective date: [EFFECTIVE DATE — set on publication] &middot;
                Last updated: [LAST UPDATED — set on publication]
              </p>

              <DraftBanner />
            </div>
          </div>
        </section>

        {/* ── Open items ────────────────────────────────────────────── */}
        <section className="section-navy-mid">
          <div className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
            <div className="glass rounded-2xl p-6 [--glass-edge:rgba(245,158,11,0.35)]">
              <h2 className="font-display text-lg font-700 text-amber">
                Open items for counsel
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-light">
                Delete this box before publication. Each item is something the
                drafter could not verify from the codebase and did not invent.
              </p>
              <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-slate-light">
                <li>
                  <span className="font-600 text-white">Legal entity.</span> The
                  site footer reads &ldquo;AscendWorksNow Inc.&rdquo; but the
                  registered name, entity type, and business address were not
                  confirmed. Every occurrence of{" "}
                  <span className="text-amber">[LEGAL ENTITY]</span> and{" "}
                  <span className="text-amber">[REGISTERED ADDRESS]</span> needs
                  filling.
                </li>
                <li>
                  <span className="font-600 text-white">
                    Careers application form.
                  </span>{" "}
                  The apply form at <Link href="/careers" className="text-gold hover:text-gold-light">/careers</Link>{" "}
                  displays &ldquo;Application Received&rdquo; but transmits
                  nothing — its inputs have no <code>name</code> attributes and
                  its submit handler only runs a timer
                  (<code>src/components/sections/CareersClient.tsx</code>). This
                  policy therefore says nothing about processing applications.
                  Either wire the form up and extend this policy, or change the
                  form so it does not tell applicants their data was received.
                </li>
                <li>
                  <span className="font-600 text-white">Host access logs.</span>{" "}
                  The site is served by a third-party Apache host. Hosts
                  normally keep request logs containing IP addresses, but the
                  provider&rsquo;s retention period was not verified. Confirm it
                  and complete the retention section.
                </li>
                <li>
                  <span className="font-600 text-white">Mailbox retention.</span>{" "}
                  Enquiry emails sit in a mailbox indefinitely unless someone
                  deletes them. A real retention period needs to be chosen and
                  actually applied.
                </li>
                <li>
                  <span className="font-600 text-white">EU/UK exposure.</span>{" "}
                  Whether the GDPR section applies, and whether an Article 27
                  representative is required, is a legal judgement — not made
                  here.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────────────────────── */}
        <section className="section-dark">
          <div className="mx-auto max-w-3xl px-6 pb-24 lg:px-8 lg:pb-28">
            <div className="flex flex-col gap-12">
              {/* 1 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  1. Who this policy covers
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  This policy applies to the public website at
                  ascendworksnow.com, operated by [LEGAL ENTITY]
                  (&ldquo;AscendWorksNow&rdquo;, &ldquo;we&rdquo;,
                  &ldquo;us&rdquo;), of [REGISTERED ADDRESS].
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  It does not cover information we handle inside a client
                  engagement. Data we process on behalf of a client, or inside a
                  client&rsquo;s ServiceNow instance, is governed by the
                  contract and data processing terms for that engagement, not by
                  this page.
                </p>
              </div>

              {/* 2 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  2. Information we collect
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  There is exactly one way this website collects personal
                  information: the contact and enquiry forms. If you never
                  submit a form, we never learn who you are.
                </p>
                <h3 className="mt-8 font-display text-lg font-700 text-white">
                  Information you give us through a form
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {COLLECTED.map(({ field, note }) => (
                    <div key={field} className="glass-inset rounded-xl p-4">
                      <p className="font-display text-sm font-700 text-white">
                        {field}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-light">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-base leading-relaxed text-slate-light">
                  The forms also contain a hidden field that is invisible to
                  people and only ever filled in by automated bots. If it is
                  filled in, the submission is silently discarded. It collects
                  nothing about you.
                </p>
                <h3 className="mt-8 font-display text-lg font-700 text-white">
                  Information collected automatically
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  The website itself performs no automatic collection — it is a
                  set of pre-rendered static pages with no tracking code. As
                  with any website, the server that delivers those pages
                  receives your IP address and browser user-agent in order to
                  respond at all, and our hosting provider may retain standard
                  access logs containing that information under its own policies
                  and for its own security purposes.
                  [HOST LOG RETENTION — confirm with the hosting provider.]
                </p>
              </div>

              {/* 3 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  3. What we do not do
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  This list is not aspirational. Each statement is a description
                  of how the site is currently built.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  {NOT_COLLECTED.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Prohibit
                        size={18}
                        weight="bold"
                        className="mt-0.5 shrink-0 text-teal"
                      />
                      <p className="text-base leading-relaxed text-slate-light">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  4. Why we use it
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  We use what you submit for one purpose: to read your enquiry
                  and respond to it, and to carry on the business conversation
                  that follows if you want one. We also use the IP address
                  attached to a submission to limit how many times the form can
                  be submitted from one address in an hour, which is what stops
                  the form being abused to send spam.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  We do not add you to a marketing list on the basis of a
                  contact-form submission, because no such list is connected to
                  this website.
                </p>
                <h3 className="mt-8 font-display text-lg font-700 text-white">
                  Lawful bases (for visitors in the EU/UK)
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  Where the UK GDPR or EU GDPR applies, we rely on: your
                  request, as steps taken at your request before entering into a
                  contract (Article 6(1)(b)), for responding to your enquiry;
                  and our legitimate interests (Article 6(1)(f)) in operating a
                  business website securely and preventing abuse of the contact
                  form. [GDPR APPLICABILITY — confirm with counsel.]
                </p>
              </div>

              {/* 5 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  5. Where your information goes
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  When you submit a form, the contents are formatted into a
                  plain-text email and sent to {CONTACT_EMAIL}. Nothing is
                  written to a database, because the site does not have one. The
                  enquiry email includes the fields you filled in, the page you
                  submitted from, the submission time in UTC, and the IP address
                  the submission came from.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  The only other thing stored on the server is the rate-limit
                  counter. It lives in the server&rsquo;s temporary directory,
                  is named after a one-way hash of your IP address rather than
                  the address itself, and contains nothing but a short list of
                  submission timestamps. Entries older than one hour are ignored
                  and the file is subject to normal temporary-file cleanup.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  If the form cannot reach the server — for example if you are
                  offline — the site offers you a pre-filled email link instead.
                  In that case nothing is transmitted to us at all: the details
                  you typed are handed to your own email program, and you decide
                  whether to send them.
                </p>
              </div>

              {/* 6 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  6. Third parties
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  We do not sell, rent, or trade personal information. The
                  following third parties are nevertheless involved in running
                  the site, and you should know about them.
                </p>
                <div className="mt-5 flex flex-col gap-4">
                  <div className="glass rounded-2xl p-5">
                    <h3 className="font-display text-base font-700 text-white">
                      Our web host and email provider
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-light">
                      The site is served from third-party hosting, and enquiry
                      emails are delivered and stored by a third-party mail
                      provider. Both can technically access the content passing
                      through them.
                      [NAME THE HOSTING AND MAIL PROVIDERS — and confirm whether
                      a data processing agreement is in place.]
                    </p>
                  </div>
                  <div className="glass rounded-2xl p-5">
                    <h3 className="font-display text-base font-700 text-white">
                      Unsplash (images.unsplash.com)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-light">
                      Some article and insight images are loaded directly from
                      Unsplash rather than from our own servers. Your browser
                      requests those files from Unsplash, which means Unsplash
                      receives your IP address, your user-agent, and the address
                      of the page you were viewing. This is the only third-party
                      host your browser contacts while using this site. We
                      receive nothing back from Unsplash about you.
                    </p>
                  </div>
                  <div className="glass rounded-2xl p-5">
                    <h3 className="font-display text-base font-700 text-white">
                      Fonts are served by us, not by Google
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-light">
                      The site uses two Google-licensed typefaces, but the font
                      files are downloaded at build time and served from
                      ascendworksnow.com. Your browser does not contact Google
                      to render this site, and Google does not receive your IP
                      address from it.
                    </p>
                  </div>
                  <div className="glass rounded-2xl p-5">
                    <h3 className="font-display text-base font-700 text-white">
                      Links out to other sites
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-light">
                      Some pages link to third-party sites such as ServiceNow
                      newsrooms and partner sites. Following a link takes you
                      out of our control and into theirs; their privacy
                      practices are their own.
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-slate-light">
                  We may also disclose information where the law requires it —
                  for example in response to a lawful request from a public
                  authority — or where it is necessary to establish, exercise,
                  or defend legal claims.
                </p>
              </div>

              {/* 7 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  7. How long we keep it
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  Rate-limit records expire within one hour of the submission
                  they record and hold no readable identifier. Enquiry emails
                  remain in the recipient mailbox until they are deleted;
                  we retain them for [RETENTION PERIOD — choose and enforce a
                  period] and delete them afterwards unless a business
                  relationship, a contract, or a legal obligation requires us to
                  keep them longer. Server access logs are retained by our
                  hosting provider under its own schedule.
                  [HOST LOG RETENTION — confirm.]
                </p>
              </div>

              {/* 8 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  8. Security
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  Measures actually in place on this website include: HTTPS for
                  all traffic with HTTP requests redirected and HSTS enforced; a
                  strict Content-Security-Policy that prevents the site from
                  sending your data to any other host; framing and MIME-sniffing
                  protections; a restrictive permissions policy that blocks
                  camera, microphone, geolocation, and payment APIs; rate
                  limiting and bot filtering on the contact form; and
                  sanitisation of submitted values before they are placed in an
                  email so the form cannot be turned into a relay for spam.
                  There is no database and no user account system, so there is
                  no store of credentials to compromise.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  AscendWorksNow states elsewhere on this site that it holds SOC
                  2 Type II certification. That certification concerns the
                  firm&rsquo;s delivery operations.
                  [SOC 2 SCOPE — confirm with counsel whether the report covers
                  this public website before relying on it here.] No security
                  measure is perfect, and we cannot guarantee the security of
                  information transmitted over the internet.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  Please do not send confidential, regulated, or sensitive
                  information — protected health information, financial account
                  numbers, government identifiers, or client data — through this
                  website&rsquo;s forms. They are not built for it.
                </p>
              </div>

              {/* 9 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  9. Your rights
                </h2>
                <h3 className="mt-6 font-display text-lg font-700 text-white">
                  California residents (CCPA/CPRA)
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  If you are a California resident you have the right to know
                  what personal information we have collected about you and how
                  we used it; to request deletion of it; to request correction
                  of inaccurate information; and not to be discriminated against
                  for exercising these rights.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  In the twelve months before this policy&rsquo;s effective
                  date, the categories of personal information this website
                  collected were identifiers (name, email address, phone number,
                  IP address), professional or employment-related information
                  (company, job title), and the contents of your message. All of
                  it came directly from you, except your IP address, which comes
                  from your connection. We have not sold or shared personal
                  information, and we do not collect sensitive personal
                  information as that term is defined by the CPRA. Because we
                  neither sell nor share personal information, there is no
                  &ldquo;Do Not Sell or Share My Personal Information&rdquo; link
                  on this site.
                </p>
                <h3 className="mt-8 font-display text-lg font-700 text-white">
                  EU and UK visitors (GDPR)
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  Where the GDPR applies, you have the right to access your
                  personal data, to have it rectified or erased, to restrict or
                  object to its processing, and to receive it in a portable
                  form. Where we rely on legitimate interests, you may object at
                  any time. You may also lodge a complaint with your local
                  supervisory authority.
                </p>
                <h3 className="mt-8 font-display text-lg font-700 text-white">
                  How to exercise a right
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  Email {CONTACT_EMAIL}. Because we hold nothing but emails you
                  sent us, the usual answer to an access request is a copy of
                  those emails, and the usual answer to a deletion request is
                  that we delete them. We will need enough information to find
                  your submission — typically the email address you used. You
                  may use an authorised agent; we may ask for proof of their
                  authority. We aim to respond within 45 days (CCPA/CPRA) or one
                  month (GDPR).
                </p>
              </div>

              {/* 10 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  10. International transfers
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  We are a United States business and the information you send
                  us is received and stored in the United States. If you are
                  writing to us from outside the United States, you are sending
                  your information there.
                  [TRANSFER MECHANISM — if EU/UK personal data is in scope,
                  confirm with counsel whether standard contractual clauses or
                  another mechanism is required.]
                </p>
              </div>

              {/* 11 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  11. Children
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  This is a business-to-business website. It is not directed at
                  children, we do not knowingly collect personal information
                  from anyone under [MINIMUM AGE — 13 under COPPA, 16 if EU
                  visitors are in scope; confirm with counsel], and no part of
                  the site is designed to appeal to children. If you believe a
                  child has sent us personal information, email {CONTACT_EMAIL}{" "}
                  and we will delete it.
                </p>
              </div>

              {/* 12 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  12. Changes to this policy
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  If we change how this website handles personal information, we
                  will update this page and change the &ldquo;last
                  updated&rdquo; date above. Material changes will be summarised
                  at the top of the page. Because the site keeps no contact
                  list, we cannot notify you individually.
                </p>
              </div>

              {/* 13 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  13. Contact us
                </h2>
                <div className="glass mt-4 flex items-start gap-4 rounded-2xl p-6">
                  <ShieldCheck
                    size={22}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-gold"
                  />
                  <div>
                    <p className="text-base leading-relaxed text-slate-light">
                      For any privacy question, request, or complaint, write to{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-gold transition-colors hover:text-gold-light"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate">
                      [LEGAL ENTITY] &middot; [REGISTERED ADDRESS]
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-slate">
                  See also our{" "}
                  <Link
                    href="/cookies"
                    className="text-gold transition-colors hover:text-gold-light"
                  >
                    Cookie Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms"
                    className="text-gold transition-colors hover:text-gold-light"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
