import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Client Outcomes | AscendWorksNow",
  description:
    "See how AscendWorks approaches ServiceNow delivery, and contact our team to discuss the platform outcomes your organization needs.",
};

const evidence = [
  { title: "The work", description: "The business and platform context, scope, modules, and integrations involved." },
  { title: "The measure", description: "A stated baseline, measurement period, and method—not an unattributed percentage." },
  { title: "The permission", description: "Customer approval for the story, its details, and any identifying information." },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Client outcomes</p>
              <h1 className="font-display text-4xl font-800 leading-tight tracking-tight text-white md:text-6xl">
                Evidence matters more than a headline metric.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-light md:text-lg">
                We are preparing client stories that can be discussed with the right context: the work delivered, how outcomes were measured, and what the customer has approved us to share.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="group inline-flex min-h-11 items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold">
                  Discuss your ServiceNow goals <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <Link href="/services" className="inline-flex min-h-11 items-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white">
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-light py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy/60">How we report results</p>
              <h2 className="font-display text-3xl font-800 leading-tight text-navy md:text-4xl">A useful case study shows its working.</h2>
              <p className="mt-4 text-base leading-7 text-navy/65">When we publish customer outcomes, they should give a platform owner enough information to judge whether the work is relevant to their own estate.</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {evidence.map((item, index) => (
                <article key={item.title} className="border-t border-navy/15 bg-white p-6 sm:p-7">
                  <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy/70">
                    <Check size={18} weight="regular" aria-hidden="true" />
                  </div>
                  <p className="mb-2 font-mono text-xs tabular-nums text-gold">0{index + 1}</p>
                  <h3 className="font-display text-lg font-700 text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy/65">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
