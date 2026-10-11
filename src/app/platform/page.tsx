import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import PlatformHero from "@/components/sections/platform/PlatformHero";
import DeliveryLifecycle from "@/components/sections/platform/DeliveryLifecycle";
import ModuleCoverageGrid from "@/components/sections/platform/ModuleCoverageGrid";
import DeliveryModel from "@/components/visuals/DeliveryModel";

export const metadata: Metadata = {
  title: "AscendOS — Our AI Delivery Engine | AscendWorksNow",
  description:
    "AscendOS is the AI delivery engine behind AscendWorksNow: specialized agents that plan, build, test, document, and operate ServiceNow, governed by senior architects at every gate.",
  alternates: { canonical: "https://www.ascendworksnow.com/platform" },
};

const agents = [
  {
    name: "Discovery agents",
    body: "Interview stakeholders asynchronously, mine instance data, and draft a requirements baseline your architect refines instead of writes from scratch.",
  },
  {
    name: "Build agents",
    body: "Generate configuration and code against approved patterns, open change records, and flag anything that deviates from platform best practice.",
  },
  {
    name: "Test agents",
    body: "Write and run ATF suites per story, keep regression packs current, and triage failures before an engineer sees them.",
  },
  {
    name: "Docs agents",
    body: "Produce runbooks and admin guides from the actual build history — versioned alongside the work itself.",
  },
  {
    name: "Ops agents",
    body: "Watch jobs, integrations, and upgrade readiness in production, proposing tuned fixes with the supporting evidence attached.",
  },
  {
    name: "Content agents",
    body: "The same architecture powers our Insights feed: ingestion, relevance scoring, and drafting, always behind a human review gate.",
  },
];

const principles = [
  {
    title: "Human approval gates",
    body: "Agents propose; named people approve. Nothing reaches your production instance — or this website — without a human sign-off.",
  },
  {
    title: "Evidence attached",
    body: "Every agent action links back to its inputs: the story, the test run, the telemetry. Auditable by construction, not by reconstruction.",
  },
  {
    title: "Your context, not generic AI",
    body: "Agents operate on your instance data, your patterns, and your industry constraints — not boilerplate prompts pointed at a public model.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PlatformHero />

        {/* The fleet — light */}
        <section className="section-light py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-navy/20 text-navy/70 text-xs font-600 uppercase tracking-widest mb-4">
                The Fleet
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl text-navy leading-tight mb-4">
                Specialized agents, one operating system
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Each agent is narrow on purpose. Narrow agents are testable, auditable, and easy
                to correct — which is what makes them safe to point at an enterprise platform.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent) => (
                <div
                  key={agent.name}
                  className="glass-light rounded-2xl p-6"
                >
                  <h3 className="font-display font-700 text-lg text-navy mb-2">{agent.name}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{agent.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lifecycle — dark */}
        <section className="section-dark py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
                The Lifecycle
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight mb-4">
                Five stages. Agents accelerate, people decide.
              </h2>
              <p className="text-slate text-base leading-relaxed">
                This is the delivery mechanic underneath our four-phase engagement model — what
                actually happens between kickoff and go-live.
              </p>
            </div>
            <DeliveryLifecycle />
          </div>
        </section>

        {/* Delivery model — navy mid */}
        <section className="section-navy-mid py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <span className="inline-block px-3 py-1 rounded-full border border-teal/30 text-teal text-xs font-600 uppercase tracking-widest mb-4">
                Delivery model
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight mb-4">
                Automation with clear accountability
              </h2>
              <p className="text-slate text-base leading-relaxed">
                AI can help prepare and organize repeatable work. People remain responsible for scope, design, risk decisions, acceptance, and production changes.
              </p>
            </div>
            <DeliveryModel />
          </div>
        </section>

        {/* Module coverage — dark */}
        <section className="section-dark py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
                Coverage
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight mb-4">
                Every module that matters
              </h2>
              <p className="text-slate text-base leading-relaxed">
                Deep experience across the Now Platform — and the AI layer sitting on top of it.
              </p>
            </div>
            <ModuleCoverageGrid />
          </div>
        </section>

        {/* Governance — light */}
        <section className="section-light py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-navy/20 text-navy/70 text-xs font-600 uppercase tracking-widest mb-4">
                Governance
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl text-navy leading-tight mb-4">
                Built to be trusted with production
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {principles.map((p, i) => (
                <div key={p.title}>
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light font-display font-800 text-navy">
                    {i + 1}
                  </span>
                  <h3 className="font-display font-700 text-lg text-navy mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
