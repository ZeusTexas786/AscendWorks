import Link from "next/link";
import { ArrowRight, ChartLineUp, Eye, Fingerprint, Gauge, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const capabilities = [
  { Icon: Fingerprint, title: "Discover", detail: "Create visibility into AI agents, models, and assets." },
  { Icon: ShieldCheck, title: "Secure", detail: "Connect identity and security controls to AI activity." },
  { Icon: Gauge, title: "Govern", detail: "Set ownership, lifecycle practices, and risk controls." },
  { Icon: Eye, title: "Observe", detail: "Monitor performance and activity across AI initiatives." },
  { Icon: ChartLineUp, title: "Measure", detail: "Understand adoption and business value over time." },
];

export default function AIControlTowerFeature() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-full w-[38%] border-l border-white/[0.045]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">ServiceNow AI Control Tower</p>
          <h2 className="font-display text-3xl font-800 leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            Know what AI is doing. Govern what happens next.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-light">
            AI is already moving through your business—in products, workflows, and third-party tools. ServiceNow AI Control Tower brings discovery, governance, security, observability, and value measurement into the ServiceNow platform.
          </p>
          <p className="mt-4 text-sm leading-6 text-slate">
            We help platform and risk leaders evaluate readiness, shape an implementation path, and connect AI oversight to the operating model.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/solutions/ai-control-tower" className="group inline-flex min-h-11 items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold">
              Explore our approach
              <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white">
              Discuss your use case
            </Link>
          </div>
        </div>

        <ol className="divide-y divide-white/10 border-y border-white/10">
          {capabilities.map(({ Icon, title, detail }, index) => (
            <li key={title} className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-4 sm:grid-cols-[3rem_1fr_auto] sm:gap-5 sm:py-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-gold">
                <Icon size={19} weight="regular" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-sm font-700 text-white sm:text-base">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate sm:text-sm">{detail}</p>
              </div>
              <span className="font-mono text-xs tabular-nums text-slate/50">0{index + 1}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
