"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, CalendarBlank,
  Clock, Target, UsersThree, Users, Gear, Wrench, ArrowsCounterClockwise,
  Handshake, ChartBar, Rocket, MagnifyingGlass, Compass, CheckCircle,
  Robot, ArrowsSplit, Brain, Lightning, Funnel, ChartLineUp, ShieldCheck,
  CurrencyDollar, ChartLineDown, Warning, LinkBreak, Database, Buildings,
  TreeStructure, ArrowsOut, Question, ArrowDown, Minus, Lightbulb, Briefcase,
  ListChecks, UserCircleCheck, TrendUp, type Icon,
} from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const iconMap: Record<string, Icon> = {
  Clock, Target, UsersThree, Users, Gear, Wrench, ArrowsCounterClockwise,
  Handshake, ChartBar, Rocket, MagnifyingGlass, Compass, CheckCircle,
  Robot, ArrowsSplit, Brain, Lightning, Funnel, ChartLineUp, ShieldCheck,
  CurrencyDollar, ChartLineDown, Warning, LinkBreak, Database, Buildings,
  TreeStructure, ArrowsOut, Question, ArrowDown, Minus, Lightbulb, Briefcase,
  ListChecks, UserCircleCheck, TrendUp,
};

export interface ServiceStat {
  value: string;
  label: string;
}

export interface PainPoint {
  iconName: string;
  title: string;
  description: string;
}

export interface Capability {
  iconName: string;
  title: string;
  description: string;
  borderColor: string;
  bgColor: string;
  iconBg: string;
  iconColor: string;
  textColor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
  color: string;
  borderColor: string;
  bgColor: string;
}

export interface OutcomeStat {
  value: string;
  label: string;
  color: string;
}

export interface ServicePageData {
  category: string;
  headline: string;
  subheadline: string;
  heroStats: ServiceStat[];
  problemHeading: string;
  problemBody: string;
  painPoints: PainPoint[];
  capabilitiesHeading: string;
  capabilitiesBody: string;
  capabilities: Capability[];
  processHeading: string;
  processBody: string;
  processSteps: ProcessStep[];
  outcomeHeading: string;
  outcomeBody: string;
  outcomeStats: OutcomeStat[];
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden mesh-bg grain pt-20">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple/10 blur-[120px]" />
            <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-teal/8 blur-[100px]" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="sgrid" width="64" height="64" patternUnits="userSpaceOnUse">
                  <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#sgrid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-6"
            >
              {data.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-display font-800 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white mb-6 max-w-4xl"
            >
              {data.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-slate-light text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
            >
              {data.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-display font-700 text-base rounded-xl hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
              >
                <CalendarBlank size={16} weight="bold" />
                Book a Discovery Call
                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 hover:border-white/40 transition-all"
              >
                See Client Outcomes
              </Link>
            </motion.div>

            {/* Hero stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-3 gap-6 border-t border-white/10 pt-10 max-w-2xl"
            >
              {data.heroStats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-display font-800 text-2xl md:text-3xl text-white">{s.value}</span>
                  <span className="text-slate text-xs leading-snug">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PROBLEM ──────────────────────────────────────────────────── */}
        <section className="section-light py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="max-w-3xl mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-navy/8 text-navy text-xs font-600 uppercase tracking-widest mb-4">
                The Reality
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-5">
                {data.problemHeading}
              </h2>
              <p className="text-navy/65 text-lg leading-relaxed">{data.problemBody}</p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {data.painPoints.map((point, i) => {
                const Icon = iconMap[point.iconName];
                return (
                  <FadeIn key={point.title} delay={i * 0.1}>
                    <div className="glass-light glass-light-hover flex flex-col p-6 rounded-2xl h-full">
                      <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center mb-5">
                        {Icon && <Icon size={22} weight="duotone" className="text-navy/50" />}
                      </div>
                      <h3 className="font-display font-700 text-base text-navy mb-2 leading-snug">{point.title}</h3>
                      <p className="text-navy/60 text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ─────────────────────────────────────────────── */}
        <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal/8 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="max-w-2xl mb-16">
              <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
                How We Do It
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
                {data.capabilitiesHeading}
              </h2>
              <p className="text-slate text-base leading-relaxed">{data.capabilitiesBody}</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.capabilities.map((cap, i) => {
                const Icon = iconMap[cap.iconName];
                return (
                  <FadeIn key={cap.title} delay={i * 0.09}>
                    <div className={`flex flex-col p-6 rounded-2xl border ${cap.borderColor} ${cap.bgColor} hover:border-opacity-60 transition-all h-full`}>
                      <div className={`w-12 h-12 rounded-xl ${cap.iconBg} flex items-center justify-center mb-5`}>
                        {Icon && <Icon size={22} weight="duotone" className={cap.iconColor} />}
                      </div>
                      <h3 className={`font-display font-700 text-base ${cap.textColor} mb-2 leading-snug`}>{cap.title}</h3>
                      <p className="text-slate text-sm leading-relaxed">{cap.description}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────── */}
        <section className="section-light py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-navy/8 text-navy text-xs font-600 uppercase tracking-widest mb-4">
                How We Engage
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-4">
                {data.processHeading}
              </h2>
              <p className="text-navy/60 text-base leading-relaxed">{data.processBody}</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.processSteps.map((step, i) => (
                <FadeIn key={step.title} delay={i * 0.1}>
                  <div className={`relative flex flex-col p-6 rounded-2xl border ${step.borderColor} ${step.bgColor} h-full`}>
                    <span className={`font-display font-800 text-5xl ${step.color} opacity-15 absolute top-4 right-5 leading-none select-none`}>
                      {step.number}
                    </span>
                    <h3 className={`font-display font-800 text-xl ${step.color} mb-1`}>{step.title}</h3>
                    <p className="text-navy font-600 text-sm mb-3 leading-snug">{step.subtitle}</p>
                    <p className="text-navy/60 text-sm leading-relaxed flex-1 mb-4">{step.description}</p>
                    <div className={`pt-4 border-t ${step.borderColor}`}>
                      <p className="text-xs text-navy/40 uppercase tracking-wider mb-1">Deliverable</p>
                      <p className={`text-xs font-600 ${step.color}`}>{step.deliverable}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUTCOMES ─────────────────────────────────────────────────── */}
        <section className="section-navy-mid py-20 border-y border-gold/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
                What You Can Expect
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight mb-3">
                {data.outcomeHeading}
              </h2>
              <p className="text-slate text-base max-w-xl mx-auto leading-relaxed">{data.outcomeBody}</p>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {data.outcomeStats.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 0.1} className="flex flex-col items-center text-center">
                  <span className={`font-display font-800 text-4xl md:text-5xl ${stat.color} leading-none mb-2`}>
                    {stat.value}
                  </span>
                  <span className="text-slate text-xs leading-snug max-w-[120px]">{stat.label}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="section-light py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden bg-navy p-10 md:p-16 text-center mesh-bg">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple/10 blur-3xl" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-6">
                    Ready to Move?
                  </span>
                  <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight mb-5 max-w-2xl mx-auto">
                    Let&apos;s Talk About What&apos;s Actually Possible.
                  </h2>
                  <p className="text-slate-light text-lg leading-relaxed max-w-xl mx-auto mb-10">
                    Thirty minutes with our team and you&apos;ll walk away with a clear picture
                    of what transformation looks like for your environment — no pitch, no pressure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="group flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-display font-700 text-base rounded-xl hover:bg-gold-light transition-all shadow-xl shadow-gold/20"
                    >
                      <CalendarBlank size={16} weight="bold" />
                      Book a Discovery Call
                      <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href="/services"
                      className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/8 hover:border-white/40 transition-all"
                    >
                      Explore All Services
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
