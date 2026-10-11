import Link from "next/link";
import { LinkedinLogo, TwitterLogo, YoutubeLogo, Envelope, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";

const services = [
  { label: "AI Control Tower", href: "/solutions/ai-control-tower" },
  { label: "AscendOS Platform", href: "/platform" },
  { label: "ServiceNow Implementation", href: "/services/servicenow" },
  { label: "Agentic AI & Automation", href: "/services/agentic-ai" },
  { label: "ITSM Optimization", href: "/services/itsm" },
  { label: "Platform Architecture", href: "/services/architecture" },
  { label: "Strategic Advisory", href: "/services/advisory" },
  { label: "Talent & Staffing", href: "/services/staffing" },
];

const industries = [
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Financial Services", href: "/industries/financial" },
  { label: "Energy & Utilities", href: "/industries/energy" },
  { label: "Technology & Media", href: "/industries/technology" },
];

// Social profiles. An entry renders ONLY once it has a real URL — an icon
// pointing at "#" is a dead end for the visitor and a dead link for crawlers,
// which is worse than not showing the icon at all. Paste the URL in and the
// icon reappears automatically; no other change needed.
const socials = [
  // Public company-page URL. NOT the /admin/dashboard/ link — that one only
  // resolves for page administrators and errors out for ordinary visitors.
  { Icon: LinkedinLogo, label: "LinkedIn",  href: "https://www.linkedin.com/company/112722365/" },
  { Icon: TwitterLogo,  label: "Twitter/X", href: "https://x.com/TechPeople786" },
  { Icon: YoutubeLogo,  label: "YouTube",   href: "" },
];

const company = [
  { label: "About AscendWorksNow", href: "/about" },
  { label: "Leadership Team", href: "/about#team" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights & Blog", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-12 h-9 rounded-lg bg-gold flex items-center justify-center px-2">
                <span className="text-navy font-display font-800 text-sm tracking-wide">AWN</span>
              </div>
              <span className="font-display font-700 text-white text-lg tracking-tight">
                Ascend<span className="text-gold">Works</span>Now
              </span>
            </Link>

            <p className="text-slate text-sm leading-relaxed max-w-xs mb-8">
              AscendWorksNow is the enterprise IT transformation firm for organizations
              that are serious about what ServiceNow can become — not just what it is.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <a
                href="mailto:hello@ascendworksnow.com"
                className="flex items-center gap-2 text-slate hover:text-white text-sm transition-colors"
              >
                <Envelope size={14} weight="fill" className="text-gold shrink-0" />
                hello@ascendworksnow.com
              </a>
              <a
                href="tel:+12242290699"
                className="flex items-center gap-2 text-slate hover:text-white text-sm transition-colors"
              >
                <Phone size={14} weight="fill" className="text-gold shrink-0" />
                +1 (224) 229-0699
              </a>
              <span className="flex items-center gap-2 text-slate text-sm">
                <MapPin size={14} weight="fill" className="text-gold shrink-0" />
                Dallas, TX · New York · Chicago
              </span>
            </div>

            <div className="flex gap-3">
              {socials.filter((s) => s.href).map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate hover:text-white hover:border-gold/40 hover:bg-gold/5 transition-all"
                >
                  <Icon size={15} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <p className="text-white font-600 text-sm mb-5 uppercase tracking-wider">Services</p>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-slate hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-600 text-sm mb-5 uppercase tracking-wider">Industries</p>
            <ul className="flex flex-col gap-2.5">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-slate hover:text-white text-sm transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-600 text-sm mb-5 uppercase tracking-wider">Company</p>
            <ul className="flex flex-col gap-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-slate hover:text-white text-sm transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-2">
              {/* Only credentials AWN actually holds. "ISO 27001", "HIPAA Compliant"
                  and "FedRAMP Ready" were removed 2026-08-10: the rest of the site
                  says "experienced" with those frameworks, and "compliant"/"ready"
                  is a materially stronger claim than experience. */}
              {["SOC 2 Type II"].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 text-slate text-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate/60 text-xs">© 2026 AscendWorksNow Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="text-slate/60 hover:text-slate text-xs transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
