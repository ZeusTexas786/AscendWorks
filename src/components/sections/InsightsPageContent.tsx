import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const resources = [
  {
    category: "AI governance",
    title: "ServiceNow AI Control Tower",
    description: "Understand ServiceNow’s approach to discovering, securing, governing, observing, and measuring enterprise AI.",
    href: "/solutions/ai-control-tower",
    source: "Official product overview",
    sourceUrl: "https://www.servicenow.com/products/ai-control-tower.html",
  },
  {
    category: "Employee experience",
    title: "ServiceNow Otto and Moveworks",
    description: "Explore employee search and task completion, and consider how assistants fit with identity, knowledge, and service operations.",
    href: "/services/agentic-ai",
    source: "Official Moveworks platform overview",
    sourceUrl: "https://www.moveworks.com/us/en/platform",
  },
  {
    category: "Workflow automation",
    title: "Flow Designer and integrations",
    description: "Plan workflow automation with clear data dependencies, ownership, error handling, and operating support.",
    href: "/services/servicenow",
    source: "AscendWorks implementation perspective",
    sourceUrl: "",
  },
  {
    category: "Generative AI",
    title: "Now Assist and AI agents",
    description: "Assess use cases, access, data readiness, human review, and adoption before enabling AI-supported work.",
    href: "/services/agentic-ai",
    source: "AscendWorks implementation perspective",
    sourceUrl: "",
  },
];

export default function InsightsPageContent() {
  return (
    <>
      <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">ServiceNow field notes</p>
            <h1 className="font-display text-4xl font-800 leading-tight tracking-tight text-white md:text-6xl">
              Product updates matter when they change the work.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-light md:text-lg">
              A practical guide to the ServiceNow capabilities enterprise teams are evaluating—and the architecture, governance, and operating questions that come with them.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate">
              Release timing, packaging, prerequisites, and licensing can change. Confirm current details with official ServiceNow documentation and your account team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-light py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-navy/60">Product guide</p>
              <h2 className="font-display text-3xl font-800 text-navy md:text-4xl">Capabilities and implementation context.</h2>
            </div>
            <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy">
              Discuss your roadmap <ArrowRight size={15} weight="bold" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {resources.map((resource, index) => (
              <article key={resource.title} className="flex flex-col border-t border-navy/15 bg-white p-6 sm:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-navy/55">{resource.category}</span>
                  <span className="font-mono text-xs tabular-nums text-gold">0{index + 1}</span>
                </div>
                <h3 className="font-display text-xl font-700 text-navy">{resource.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-navy/65">{resource.description}</p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 pt-4">
                  <Link href={resource.href} className="group inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-navy transition-colors hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-navy">
                    Explore our approach <ArrowRight size={13} weight="bold" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                  {resource.sourceUrl && (
                    <a href={resource.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1 text-[10px] text-navy/55 transition-colors hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-navy">
                      {resource.source} <ArrowUpRight size={12} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
