import Link from "next/link";
import { ArrowUpRight, ArrowsLeftRight, Brain, ChatCircleDots, FlowArrow } from "@phosphor-icons/react/dist/ssr";

const capabilities = [
  {
    Icon: ChatCircleDots,
    label: "Employee experience",
    title: "ServiceNow Otto (Moveworks)",
    description: "Plan employee-facing search and task completion across the ServiceNow environment, with attention to identity, knowledge, integrations, and the service experience.",
    accent: "text-teal",
  },
  {
    Icon: FlowArrow,
    label: "Workflow orchestration",
    title: "Flow Designer",
    description: "Connect approvals, integrations, and repeatable work in maintainable flows—with clear ownership, error handling, and operational visibility.",
    accent: "text-gold",
  },
  {
    Icon: Brain,
    label: "AI governance",
    title: "AI Control Tower",
    description: "Establish a ServiceNow foundation for discovering AI assets, managing risk and governance, observing performance, and measuring value.",
    accent: "text-purple",
  },
  {
    Icon: ArrowsLeftRight,
    label: "Generative AI",
    title: "Now Assist and AI agents",
    description: "Identify the workflow opportunities, data readiness, permissions, and human oversight needed to put ServiceNow AI capabilities into practice.",
    accent: "text-teal",
  },
];

export default function PlatformCapabilities() {
  return (
    <section className="section-navy-mid py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold">The platform, put to work</p>
            <h2 className="max-w-3xl font-display text-3xl font-800 leading-tight text-white md:text-4xl lg:text-5xl">
              The right ServiceNow capabilities. Connected to real work.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-light md:text-base">
            Product names are only the start. We help platform owners decide where each capability fits, what it depends on, and how to govern it over time.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 sm:grid-cols-2">
          {capabilities.map(({ Icon, label, title, description, accent }, index) => (
            <article key={title} className="bg-navy-mid p-6 sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <span className={`flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/[0.035] ${accent}`}>
                  <Icon size={21} weight="regular" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs tabular-nums text-slate/70">0{index + 1}</span>
              </div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate">{label}</p>
              <h3 className="font-display text-xl font-700 leading-snug text-white">{title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-light">{description}</p>
            </article>
          ))}
        </div>

        <Link href="/contact" className="group mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
          Talk through your platform roadmap
          <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
