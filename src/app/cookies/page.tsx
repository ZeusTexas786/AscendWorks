import type { Metadata } from "next";
import Link from "next/link";
import { Warning, Cookie, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | AscendWorksNow",
  description:
    "ascendworksnow.com does not use cookies or browser storage for analytics or personalization. This draft policy is pending legal review.",
};

/*
  ── Accuracy note ────────────────────────────────────────────────────────────
  Verified after retiring the Knowledge26 widget: the codebase contains no
  `document.cookie`, localStorage writes, `setcookie()`, `session_start()`, or
  `Set-Cookie` header in src/ or public/. Re-check before adding analytics or
  persistent visitor preferences.

  If a cookie, an analytics script, or a chat widget is ever added, this page
  is immediately false and must be rewritten in the same commit.
*/

const CONTACT_EMAIL = "aaron@ascendworksnow.com";

const FACTS = [
  "No cookie is set by this website — not for analytics, not for advertising, not for sessions, not for consent.",
  "No analytics or advertising script runs on this site. There is no Google Analytics, Google Tag Manager, Meta Pixel, LinkedIn Insight Tag, or session-recording tool.",
  "The current site does not write persistent browser preferences for analytics or personalization.",
  "The site's Content-Security-Policy blocks the page from sending data to any host other than ascendworksnow.com, so a tracker could not phone home even if one were added by mistake.",
];

function DraftBanner() {
  return (
    <div className="glass mt-10 flex items-start gap-4 rounded-2xl p-5 [--glass-edge:rgba(245,158,11,0.45)]">
      <Warning size={22} weight="fill" className="mt-0.5 shrink-0 text-amber" />
      <p className="text-sm leading-relaxed text-slate-light">
        <span className="font-display font-700 text-amber">
          Draft — pending legal review.
        </span>{" "}
        This page has not been reviewed or approved by an attorney. The factual
        description of the site&rsquo;s storage is verified against the code,
        but the conclusion about whether a consent banner is required is a legal
        judgement that has not been made. Do not publish until counsel has
        signed it off.
      </p>
    </div>
  );
}

export default function CookiesPage() {
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
                Cookie <span className="text-gold-gradient">Policy</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-light">
                The short version: this website does not set cookies or write
                persistent browser preferences for analytics or personalization.
              </p>
              <p className="mt-4 text-sm text-slate">
                Effective date: [EFFECTIVE DATE — set on publication] &middot;
                Last updated: [LAST UPDATED — set on publication]
              </p>

              <DraftBanner />
            </div>
          </div>
        </section>

        {/* ── Body ──────────────────────────────────────────────────── */}
        <section className="section-navy-mid">
          <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="flex flex-col gap-12">
              {/* 1 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  1. This site sets no cookies
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  A cookie is a small file a website asks your browser to store
                  and then sends back to that website — or to an advertising
                  network — with every subsequent request. That is what makes
                  cookies useful for tracking, and it is why they are regulated.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  ascendworksnow.com is a set of pre-rendered static pages. It
                  has no logins, no sessions, no shopping basket, no ad network,
                  and no analytics. There is nothing for a cookie to do, so the
                  site does not set one.
                </p>
                <div className="glass mt-6 flex flex-col gap-3 rounded-2xl p-6">
                  {FACTS.map((fact) => (
                    <div key={fact} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        weight="fill"
                        className="mt-0.5 shrink-0 text-teal"
                      />
                      <p className="text-sm leading-relaxed text-slate-light">
                        {fact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  2. Browser storage
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  The current site code does not write cookies or persistent
                  browser storage for visitor analytics or personalization. This
                  should be reviewed again if the site adds a preference center,
                  analytics, or another interactive feature.
                </p>
              </div>

              {/* 3 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  3. Why there is no cookie banner
                </h2>
                <div className="glass mt-4 rounded-2xl p-6 [--glass-edge:rgba(245,158,11,0.45)]">
                  <p className="text-base leading-relaxed text-slate-light">
                    Consent banners exist because most sites place tracking
                    technology on your device before you have agreed to it. This
                    draft describes the current implementation; legal counsel
                    should confirm any notice or consent obligations before
                    publication.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-slate-light">
                    <span className="font-600 text-amber">
                      [CONSENT REQUIREMENT — confirm with counsel.]
                    </span>{" "}
                    Rules on storing information in a visitor&rsquo;s device
                    (including the EU ePrivacy Directive, which covers local
                    storage as well as cookies) may still require notice or
                    consent even where nothing is transmitted. Whether the
                    strictly-necessary or functionality position applies here is
                    a legal judgement, and it has not been made in this draft.
                  </p>
                </div>
              </div>

              {/* 4 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  4. Third-party requests your browser makes
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  No third party sets anything on your device through this site,
                  but one third party does see that you visited.
                </p>
                <div className="mt-5 flex flex-col gap-4">
                  <div className="glass rounded-2xl p-5">
                    <h3 className="font-display text-base font-700 text-white">
                      Unsplash (images.unsplash.com)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-light">
                      Several article images are loaded from Unsplash rather
                      than from our own servers. Your browser fetches those
                      files directly, so Unsplash receives your IP address, your
                      browser user-agent, and the page you were on. Unsplash
                      sets no cookie through this site, and we receive nothing
                      back from it about you.
                    </p>
                  </div>
                  <div className="glass rounded-2xl p-5">
                    <h3 className="font-display text-base font-700 text-white">
                      Fonts: no request leaves our domain
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-light">
                      The typefaces on this site are Google-licensed, but the
                      font files are downloaded at build time and served from
                      ascendworksnow.com. Unlike most sites using these fonts,
                      your browser never contacts Google, and Google never
                      receives your IP address from this site.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  5. Clearing what is stored
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  There are no persistent browser preferences to clear in the
                  current implementation. Clearing ordinary browser cache or
                  site data remains available through your browser settings.
                </p>
                <p className="mt-5 text-base leading-relaxed text-slate-light">
                  Browser settings provide controls for clearing site data and
                  cached files. The current site does not use persistent
                  browser preferences that require a separate deletion request.
                </p>
              </div>

              {/* 6 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  6. Changes to this policy
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-light">
                  If we ever add a cookie, an analytics tool, or a third-party
                  script to this site, we will update this page before doing so
                  and change the &ldquo;last updated&rdquo; date above — and we
                  will add a consent mechanism if one is required.
                </p>
              </div>

              {/* 7 */}
              <div>
                <h2 className="font-display text-2xl font-700 tracking-tight text-white">
                  7. Contact
                </h2>
                <div className="glass mt-4 flex items-start gap-4 rounded-2xl p-6">
                  <Cookie
                    size={22}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-gold"
                  />
                  <div>
                    <p className="text-base leading-relaxed text-slate-light">
                      Questions about cookies or browser storage on this site:{" "}
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
                    href="/privacy"
                    className="text-gold transition-colors hover:text-gold-light"
                  >
                    Privacy Policy
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
