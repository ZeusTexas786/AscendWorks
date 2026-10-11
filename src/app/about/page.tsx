import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About AscendWorksNow | Enterprise IT Transformation",
  description:
    "AscendWorksNow helps enterprise IT leaders turn ServiceNow and platform investments into measurable business outcomes through disciplined delivery, modern automation, and trusted partnership.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="section-dark overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-gold/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Company
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white">
                About AscendWorksNow
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-light">
                We help enterprise IT leaders make ServiceNow more than a program. We turn platform investments into faster service delivery, better customer experiences, and higher ROI through people-first execution and modern automation.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:bg-gold-light"
                >
                  Talk to an Expert
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <span className="text-sm text-slate">Dallas · Chicago · New York</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-gold">Company overview</p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-navy tracking-tight">
                Enterprise platform services designed to deliver measurable outcomes.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-700">
                Since 2010, we have combined ServiceNow delivery experience with enterprise operations discipline to help IT organizations move faster while reducing risk. Our teams specialize in strategic assessments, release and test management, functional consulting, technical delivery, and adoption support.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  title: "Business outcome focus",
                  description:
                    "We design work to improve efficiency, customer experience, and the returns you expect from your platform investment.",
                },
                {
                  title: "Deep implementation expertise",
                  description:
                    "Our consultants bring proven ServiceNow, SAP, and enterprise delivery experience to every project so transformation lands predictably.",
                },
                {
                  title: "Client-first partnership",
                  description:
                    "We keep decisions transparent, communicate clearly, and ensure your permanent team gains capability along the way.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[32px] border border-navy-light bg-white p-7 shadow-[0_20px_60px_rgba(13,27,56,0.12)]">
                  <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-slate-700 leading-7">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-navy-mid">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-gold">Our history</p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                Built from enterprise delivery, focused on what matters now.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-light">
                Our history is a sequence of purposeful expansions: from government and systems-integration work to enterprise ServiceNow and AI-enabled platform transformation. We grow with the needs of CIOs who expect dependable execution and measurable business value.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {[
                {
                  year: "2007",
                  headline: "First contracts, government delivery",
                  detail:
                    "We began with state and federal contracts, winning DIR, SBA 8(a), and GSA work while setting a foundation for disciplined, compliant delivery.",
                },
                {
                  year: "2010",
                  headline: "Enterprise consulting expands",
                  detail:
                    "Our experience scaled through partnerships with major systems integrators, bringing enterprise customers in retail, banking, and technology onto modern platform programs.",
                },
                {
                  year: "2015",
                  headline: "Houston office opens",
                  detail:
                    "We established a Texas delivery center to serve energy, industrial, and manufacturing clients with deep operational and digital-transformation expertise.",
                },
                {
                  year: "2020",
                  headline: "Chicago growth and analytics",
                  detail:
                    "We expanded to the Midwest, connecting ServiceNow, analytics, and automation to help companies scale and modernize how they operate.",
                },
              ].map((item) => (
                <div key={item.year} className="rounded-[28px] border border-white/10 bg-navy-light p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-gold">{item.year}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{item.headline}</h3>
                  <p className="mt-4 text-slate-light leading-7">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-light">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-gold">Our culture</p>
                <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-navy tracking-tight">
                  Values that shape every engagement.
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-700">
                  We believe great outcomes come from clear priorities, honest communication, and teams that do the right thing for the client first. That means practical guidance, measurable progress, and capability built into every delivery.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    label: "Client Success First",
                    text: "We always act in the client’s best interest and focus on outcomes that make the business stronger.",
                  },
                  {
                    label: "Transparent Communication",
                    text: "We keep stakeholders aligned with clear tradeoffs, status, and next steps.",
                  },
                  {
                    label: "Knowledge Transfer",
                    text: "We leave your team better prepared to operate and evolve the platform after we hand it over.",
                  },
                  {
                    label: "Service Beyond Reproach",
                    text: "We commit to reliable delivery, respectful collaboration, and measurable improvement.",
                  },
                ].map((item) => (
                  <div key={item.label} className="glass-light rounded-3xl p-6">
                    <h3 className="text-xl font-semibold text-navy">{item.label}</h3>
                    <p className="mt-3 text-slate-700 leading-7">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-dark" id="team">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-gold">Leadership team</p>
              <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                Experts who have delivered enterprise programs at scale.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-light">
                Our leadership combines deep ServiceNow experience, enterprise program delivery, and modern automation strategy. We help CIOs turn technical platforms into operating advantage with pragmatic plans and disciplined execution.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Enterprise Delivery",
                  detail: "Senior advisors with a track record of delivering complex IT and platform programs across government, energy, retail, and financial services.",
                },
                {
                  title: "Platform Strategy",
                  detail: "Architects who design ServiceNow and automation solutions that support scale, governance, and business outcomes.",
                },
                {
                  title: "Client Partnership",
                  detail: "Delivery leaders who keep your operations, IT, and business stakeholders aligned from kickoff through adoption.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-[28px] border border-white/10 bg-navy-light p-7">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-slate-light leading-7">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
