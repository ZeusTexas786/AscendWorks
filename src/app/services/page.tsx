import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services | ServiceNow Implementation, Agentic AI & Advisory | AscendWorksNow",
  description:
    "Six integrated capabilities covering every phase of enterprise IT transformation — ServiceNow implementation, agentic AI and automation, ITSM optimization, platform architecture, strategic advisory, and talent.",
};

// Five places across the site linked to /services, but only the six individual
// service pages existed. This index is the missing destination; the card grid
// and delivery phases are the same components the homepage uses, so there is
// one source of truth for the copy.
export default function ServicesIndexPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="section-dark relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Services
              </span>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-800 leading-[1.06] tracking-tight text-white">
                Every Phase of the{" "}
                <span className="text-gold-gradient">Transformation</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-light">
                From the first assessment through sustained performance after
                go-live. Each capability stands on its own — together they cover
                the full arc of an enterprise platform programme.
              </p>
            </div>
          </div>
        </section>

        <ServicesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
