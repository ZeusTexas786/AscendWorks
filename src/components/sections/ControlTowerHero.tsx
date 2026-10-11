"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function ControlTowerHero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">ServiceNow AI Control Tower</p>
          <h1 className="mb-6 font-display text-4xl font-800 leading-[1.06] tracking-tight text-white md:text-6xl">
            Govern the AI you use—and the AI you don&apos;t yet see.
          </h1>
          <p className="text-lg leading-8 text-slate-light">
            ServiceNow AI Control Tower helps enterprises discover AI assets, secure activity, govern risk, observe performance, and measure value. AscendWorks helps you assess fit, prepare your platform, and plan a controlled rollout.
          </p>
          <p className="mt-4 text-sm leading-6 text-slate">
            Scope and availability depend on ServiceNow products, licensing, release, and your current configuration.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-xl border border-white/15 sm:grid-cols-5">
          {[
            ["01", "Discover"],
            ["02", "Secure"],
            ["03", "Govern"],
            ["04", "Observe"],
            ["05", "Measure"],
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-3 border-b border-white/10 px-4 py-4 last:border-0 sm:flex-col sm:items-start sm:border-b-0 sm:border-r sm:py-5 sm:last:border-0">
              <span className="font-mono text-[10px] text-gold">{number}</span>
              <span className="text-sm font-semibold text-white">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="group inline-flex min-h-11 items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold"
          >
            Discuss your AI governance roadmap
            <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/platform"
            className="inline-flex min-h-11 items-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
          >
            How we deliver
          </Link>
        </div>
      </div>
    </section>
  );
}
