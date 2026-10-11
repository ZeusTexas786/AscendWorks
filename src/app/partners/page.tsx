import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PartnersSection from "@/components/sections/PartnersSection";

export const metadata: Metadata = {
  title: "Platform Ecosystem | AscendWorksNow",
  description:
    "Explore how AscendWorks approaches ServiceNow architecture, enterprise integrations, identity, data, and operational ownership.",
};

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">Platform ecosystem</p>
              <h1 className="font-display text-4xl font-800 leading-tight tracking-tight text-white md:text-6xl">
                Connect the platform to the way your enterprise works.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-light md:text-lg">
                ServiceNow does not operate alone. Architecture decisions need to account for identity, data, integrations, security review, and the teams responsible for ongoing service.
              </p>
              <Link href="/contact" className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold">
                Discuss your environment <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
