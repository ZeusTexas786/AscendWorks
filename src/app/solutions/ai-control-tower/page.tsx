import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ControlTowerHero from "@/components/sections/ControlTowerHero";
import AIControlTowerSection from "@/components/sections/AIControlTowerSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Control Tower | AscendWorksNow",
  description:
    "The AscendWorksNow AI Control Tower turns ServiceNow into a predictive intelligence layer — detecting incident risk before it fires, coordinating compliance automatically, and unifying IT, risk, and business operations in one control room.",
  alternates: { canonical: "https://www.ascendworksnow.com/solutions/ai-control-tower" },
};

const industries = [
  {
    name: "Financial Services",
    href: "/industries/financial",
    body: "Connect AI asset visibility and governance to existing risk, audit, and technology controls—subject to your regulatory and platform requirements.",
  },
  {
    name: "Healthcare & Life Sciences",
    href: "/industries/healthcare",
    body: "Assess AI ownership, data handling, and policy alignment across clinical and corporate use cases before scaling adoption.",
  },
  {
    name: "Energy & Utilities",
    href: "/industries/energy",
    body: "Understand which AI assets interact with operational services and establish governance that reflects the organization’s risk profile.",
  },
  {
    name: "Technology & Media",
    href: "/industries/technology",
    body: "Inventory AI across products and teams, define ownership, and monitor adoption and value as capabilities evolve.",
  },
];

export default function AIControlTowerPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ControlTowerHero />

        <AIControlTowerSection
          eyebrow="ServiceNow AI Control Tower"
          eyebrowNote="Capability deep dive"
        />

        {/* Industry breadth — navy mid */}
        <section className="section-navy-mid py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-teal/30 text-teal text-xs font-600 uppercase tracking-widest mb-4">
                Where It Lands
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight mb-4">
                AI governance shaped around your industry
              </h2>
              <p className="text-slate text-base leading-relaxed">
                Every organization has different AI systems, obligations, and control requirements. We work with platform, security, and business leaders to frame the rollout around those realities.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {industries.map((industry) => (
                <Link
                  key={industry.name}
                  href={industry.href}
                  className="glass glass-hover group rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h3 className="font-display font-700 text-lg text-white group-hover:text-gold transition-colors">
                      {industry.name}
                    </h3>
                    <ArrowRight
                      size={16}
                      weight="bold"
                      className="text-slate shrink-0 group-hover:text-gold group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-slate">{industry.body}</p>
                </Link>
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
