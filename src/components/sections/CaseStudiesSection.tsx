import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";

const practices = [
  { number: "01", title: "Agree on the baseline", description: "Define the current state, intended outcome, scope, and acceptance criteria before configuration begins." },
  { number: "02", title: "Validate in the platform", description: "Review configuration, integrations, and test evidence against the requirements and operating constraints." },
  { number: "03", title: "Hand over with context", description: "Document decisions, known dependencies, platform ownership, and the next steps for your team." },
];

export default function CaseStudiesSection() {
  return (
    <section className="section-light py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy/60">Delivery discipline</p>
          <h2 className="font-display text-3xl font-800 leading-tight text-navy md:text-4xl lg:text-5xl">
            Good platform work is inspectable.
          </h2>
          <p className="mt-5 text-base leading-7 text-navy/65">
            Agree how success will be measured before the work begins. Then make the decisions, tests, and handover visible to the people who will run the platform.
          </p>
          <Link href="/services" className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-navy">
            Explore our services <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <ol className="divide-y divide-navy/10 border-y border-navy/10">
          {practices.map((practice) => (
            <li key={practice.number} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy/70">
                <Check size={18} weight="regular" aria-hidden="true" />
              </span>
              <div>
                <p className="mb-1 font-mono text-[10px] tabular-nums text-gold">{practice.number}</p>
                <h3 className="font-display text-lg font-700 text-navy">{practice.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-navy/65">{practice.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
