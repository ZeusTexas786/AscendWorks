"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, CaretRight } from "@phosphor-icons/react";

const badges = [
  "Platform strategy",
  "Implementation",
  "Modernization",
];

const metrics = [
  { label: "Enterprise AI", value: "Governed" },
  { label: "Operations", value: "Connected" },
  { label: "Delivery", value: "Measured" },
];

export default function HeroSection() {
  return (
    <section className="hero-shell relative overflow-hidden bg-navy">
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="hero-bloom hero-bloom-one" aria-hidden="true" />
      <div className="hero-bloom hero-bloom-two" aria-hidden="true" />
      <div className="hero-bloom hero-bloom-three" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-32 lg:pt-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-7 flex flex-wrap gap-x-5 gap-y-2"
          >
            {badges.map((b) => (
              <span key={b} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-light">
                <Check size={12} weight="bold" className="text-gold" />
                {b}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.13 }}
            className="mb-6 font-display text-[3rem] font-800 leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.1rem]"
          >
            Turn enterprise
            <span className="block text-gold-gradient">complexity</span>
            into operational advantage.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.22 }}
            className="mb-8 max-w-xl text-base leading-8 text-slate-light md:text-lg"
          >
            AscendWorks builds the ServiceNow operating model that keeps enterprise work connected, governed, and measurable — from Flow Designer and employee experience to AI oversight and platform modernization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.32 }}
            className="mb-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-display text-sm font-700 text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Discuss your ServiceNow roadmap
              <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore our services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.4 }}
            className="grid max-w-lg gap-3 sm:grid-cols-3"
          >
            {metrics.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate">{item.label}</p>
                <p className="mt-2 font-display text-xl font-700 text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          aria-label="Illustration of connected ServiceNow capabilities"
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="hero-panel relative overflow-hidden rounded-[2rem] border border-white/15 bg-navy-light/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-6">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent" aria-hidden="true" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-teal/15 blur-3xl" aria-hidden="true" />

            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">Platform architecture</p>
                <p className="mt-1 text-base font-semibold text-white">One model. Connected work.</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                designed for pace
              </span>
            </div>

            <div className="relative z-10 mt-6 space-y-4">
              {[
                { number: "01", title: "Employee experience", detail: "ServiceNow Otto · Moveworks", tag: "Assist" },
                { number: "02", title: "Workflow orchestration", detail: "Flow Designer · integrations", tag: "Connect" },
                { number: "03", title: "AI governance", detail: "AI Control Tower · operating controls", tag: "Govern" },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-4 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {index < 2 && <div className="absolute left-7 top-full h-4 w-px bg-gradient-to-b from-gold/60 to-transparent" aria-hidden="true" />}
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-sm font-semibold tabular-nums text-gold">{item.number}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-lg font-700 text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-light">{item.detail}</p>
                    </div>
                    <span className="mt-0.5 hidden rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-light sm:inline-block">{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 sm:px-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate">Operating model</p>
                <p className="mt-1 font-display text-lg font-700 text-white">Architecture, implementation &amp; adoption</p>
              </div>
              <CaretRight size={16} weight="bold" className="text-gold" aria-hidden="true" />
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
