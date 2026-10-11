import Link from "next/link";
import { ArrowRight, ChartLineUp, Eye, Fingerprint, Gauge, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const pillars = [
  { Icon: Fingerprint, number: "01", title: "Discover AI assets", description: "Build visibility into AI agents, models, and related assets across the enterprise." },
  { Icon: ShieldCheck, number: "02", title: "Secure AI activity", description: "Connect identities, access, and security controls to AI activity and its business context." },
  { Icon: Gauge, number: "03", title: "Govern AI use", description: "Put ownership, lifecycle practices, and risk controls around AI initiatives." },
  { Icon: Eye, number: "04", title: "Observe performance", description: "Monitor performance and activity so teams can identify issues and act with context." },
  { Icon: ChartLineUp, number: "05", title: "Measure value", description: "Track adoption and business outcomes to inform investment and prioritization." },
];

export default function AIControlTowerSection({
  eyebrow = "ServiceNow AI Control Tower",
  eyebrowNote = "Enterprise AI governance",
}: {
  eyebrow?: string;
  eyebrowNote?: string;
} = {}) {
  return (
    <section id="ai-control-tower" className="section-light scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">{eyebrow}</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold" />
              <span className="text-xs text-navy/55">{eyebrowNote}</span>
            </div>
            <h2 className="font-display text-3xl font-800 leading-tight tracking-tight text-navy md:text-4xl lg:text-5xl">
              A control plane for enterprise AI—with ServiceNow at its center.
            </h2>
            <p className="mt-5 text-base leading-7 text-navy/70">
              ServiceNow AI Control Tower is designed to help organizations discover, secure, govern, observe, and measure AI across the enterprise. AscendWorks helps teams assess readiness, connect the product to their platform architecture, and establish the operating practices needed to use it responsibly.
            </p>
            <p className="mt-4 text-sm leading-6 text-navy/60">
              Product availability and capabilities depend on your ServiceNow agreements, configuration, and release. We can help you map the opportunity before committing to a rollout.
            </p>
            <Link href="/contact" className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-navy">
              Discuss AI governance on ServiceNow
              <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="divide-y divide-navy/10 border-y border-navy/10">
            {pillars.map(({ Icon, number, title, description }) => (
              <article key={number} className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-5 sm:grid-cols-[3rem_1fr] sm:gap-x-5">
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy/70">
                  <Icon size={19} weight="regular" />
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-base font-700 text-navy">{title}</h3>
                    <span className="font-mono text-[10px] tabular-nums text-navy/40">{number}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-navy/65">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
