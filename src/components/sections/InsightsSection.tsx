import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const topics = [
  {
    number: "01",
    category: "AI governance",
    title: "AI Control Tower",
    description: "A practical conversation about AI inventory, ownership, risk controls, observability, and value measurement on ServiceNow.",
    href: "/solutions/ai-control-tower",
    source: "ServiceNow product overview",
    sourceUrl: "https://www.servicenow.com/products/ai-control-tower.html",
  },
  {
    number: "02",
    category: "Employee experience",
    title: "ServiceNow Otto (Moveworks)",
    description: "Think through search, employee requests, knowledge, identity, integrations, and how assistants fit into existing service workflows.",
    href: "/services/agentic-ai",
    source: "Moveworks platform overview",
    sourceUrl: "https://www.moveworks.com/us/en/platform",
  },
  {
    number: "03",
    category: "Workflow design",
    title: "Flow Designer & automation",
    description: "Design maintainable flows with clear ownership, exception handling, human approvals, and connections to enterprise systems.",
    href: "/services/servicenow",
    source: "Explore ServiceNow implementation",
    sourceUrl: "",
  },
];

export default function InsightsSection() {
  return (
    <section className="section-navy-mid py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Platform perspective</p>
            <h2 className="max-w-3xl font-display text-3xl font-800 leading-tight text-white md:text-4xl lg:text-5xl">
              Product news is only useful when you know what to do with it.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-slate-light md:text-base">
              Our focus: the implementation choices, operating questions, and dependencies behind the ServiceNow capabilities enterprise teams are evaluating.
            </p>
            <Link href="/insights" className="group mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
              Browse all insights <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {topics.map((topic) => (
            <article key={topic.number} className="flex min-h-64 flex-col border-t border-white/20 bg-transparent px-1 py-5 sm:px-4">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate">{topic.category}</span>
                <span className="font-mono text-xs tabular-nums text-gold">{topic.number}</span>
              </div>
              <h3 className="font-display text-xl font-700 text-white">{topic.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-light">{topic.description}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <Link href={topic.href} className="group inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold">
                  Explore with AscendWorks <ArrowRight size={13} weight="bold" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                {topic.sourceUrl && (
                  <a href={topic.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1 text-[10px] text-slate transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white">
                    {topic.source} <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
