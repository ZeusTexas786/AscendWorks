"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight, CalendarBlank, TrendUp, ArrowFatLinesUp,
  Clock, Target, UsersThree, Users, Gear, Wrench, ArrowsCounterClockwise,
  Handshake, ChartBar, Rocket, MagnifyingGlass, Compass, CheckCircle,
  Robot, ArrowsSplit, Brain, Lightning, Funnel, ChartLineUp, ShieldCheck,
  CurrencyDollar, ChartLineDown, Warning, LinkBreak, Database, Buildings,
  TreeStructure, ArrowsOut, Question, ArrowDown, Minus, Lightbulb, Briefcase,
  ListChecks, UserCircleCheck, Factory, Heartbeat, Cpu, Bank, Globe, Leaf,
  Scales, Lock, Virus, FirstAidKit, CloudWarning, NetworkSlash,
  type Icon,
} from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const iconMap: Record<string, Icon> = {
  Clock, Target, UsersThree, Users, Gear, Wrench, ArrowsCounterClockwise,
  Handshake, ChartBar, Rocket, MagnifyingGlass, Compass, CheckCircle,
  Robot, ArrowsSplit, Brain, Lightning, Funnel, ChartLineUp, ShieldCheck,
  CurrencyDollar, ChartLineDown, Warning, LinkBreak, Database, Buildings,
  TreeStructure, ArrowsOut, Question, ArrowDown, Minus, Lightbulb, Briefcase,
  ListChecks, UserCircleCheck, TrendUp, Factory, Heartbeat, Cpu, Bank, Globe,
  Leaf, Scales, Lock, Virus, FirstAidKit, CloudWarning, NetworkSlash,
};

const colorTokens = {
  gold:   { text: "text-gold",   bg: "bg-gold/10",   border: "border-gold/25",   bar: "bg-gold",   badge: "bg-gold/10 border border-gold/25 text-gold" },
  teal:   { text: "text-teal",   bg: "bg-teal/10",   border: "border-teal/25",   bar: "bg-teal",   badge: "bg-teal/10 border border-teal/25 text-teal" },
  purple: { text: "text-purple", bg: "bg-purple/10", border: "border-purple/25", bar: "bg-purple", badge: "bg-purple/10 border border-purple/25 text-purple" },
  red:    { text: "text-red",    bg: "bg-red/10",    border: "border-red/25",    bar: "bg-red",    badge: "bg-red/10 border border-red/25 text-red" },
};

const severityTokens = {
  critical: { label: "Critical", dot: "bg-red",    text: "text-red",    ring: "bg-red/10 border-red/25 text-red" },
  high:     { label: "High",     dot: "bg-gold",   text: "text-gold",   ring: "bg-gold/10 border-gold/25 text-gold" },
  elevated: { label: "Elevated", dot: "bg-teal",   text: "text-teal",   ring: "bg-teal/10 border-teal/25 text-teal" },
};

export type AccentColor = "gold" | "teal" | "purple" | "red";
export type ModuleColor = "gold" | "teal" | "purple";
export type Severity = "critical" | "high" | "elevated";

export interface IndustryHeroStat   { value: string; label: string; }
export interface IndustryPulseStat  { value: string; label: string; context: string; severity: number; color: AccentColor; }
export interface TrendingChallenge  { iconName: string; trend: string; severity: Severity; title: string; body: string; pullStat: string; pullLabel: string; }
export interface ImpactRow          { challenge: string; module: string; moduleColor: ModuleColor; outcome: string; metric: string; }
export interface PlatformModule     { iconName: string; module: string; description: string; color: ModuleColor; }
export interface IndustryOutcome    { value: string; label: string; color: string; }

export interface IndustryPageData {
  industry: string;
  accentColor: AccentColor;
  headline: string;
  subheadline: string;
  heroStats: IndustryHeroStat[];
  pulseHeading: string;
  pulseBody: string;
  pulseStats: IndustryPulseStat[];
  challengeHeading: string;
  challengeBody: string;
  challenges: TrendingChallenge[];
  impactHeading: string;
  impactBody: string;
  impactRows: ImpactRow[];
  modulesHeading: string;
  modulesBody: string;
  modules: PlatformModule[];
  outcomeHeading: string;
  outcomeBody: string;
  outcomes: IndustryOutcome[];
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

function PulseBar({ severity, color }: { severity: number; color: AccentColor }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-1.5 rounded-full bg-white/10 overflow-hidden">
      <motion.div className={`h-full rounded-full ${colorTokens[color].bar}`}
        initial={{ width: 0 }} animate={inView ? { width: `${severity}%` } : {}}
        transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }} />
    </div>
  );
}

export default function IndustryPage({ data }: { data: IndustryPageData }) {
  const accent = colorTokens[data.accentColor];
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden mesh-bg grain pt-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full ${accent.bg} blur-[140px] opacity-60`} />
            <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-teal/8 blur-[100px]" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="igrid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern></defs>
              <rect width="100%" height="100%" fill="url(#igrid)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6">
              <span className={`inline-block px-3 py-1 rounded-full border ${accent.border} ${accent.text} text-xs font-600 uppercase tracking-widest`}>
                Industry
              </span>
              <span className="text-slate text-xs">ServiceNow for {data.industry}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-display font-800 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white mb-6 max-w-4xl whitespace-pre-line">
              {data.headline}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-slate-light text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              {data.subheadline}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/contact"
                className={`group flex items-center justify-center gap-2 px-8 py-4 ${data.accentColor === "gold" ? "bg-gold text-navy" : data.accentColor === "teal" ? "bg-teal text-white" : "bg-purple text-white"} font-display font-700 text-base rounded-xl hover:opacity-90 transition-all shadow-lg`}>
                <CalendarBlank size={16} weight="bold" />
                Book an Industry Briefing
                <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 hover:border-white/40 transition-all">
                See How We Deliver
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="grid grid-cols-3 gap-6 border-t border-white/10 pt-10 max-w-2xl">
              {data.heroStats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className={`font-display font-800 text-2xl md:text-3xl ${accent.text} leading-none`}>{s.value}</span>
                  <span className="text-slate text-xs leading-snug">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── INDUSTRY PULSE ────────────────────────────────────────────────── */}
        <section className="section-light py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="max-w-3xl mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-navy/8 text-navy text-xs font-600 uppercase tracking-widest mb-4">
                The Numbers Behind the Pressure
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-4">
                {data.pulseHeading}
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed">{data.pulseBody}</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.pulseStats.map((stat, i) => {
                const c = colorTokens[stat.color];
                return (
                  <FadeIn key={stat.label} delay={i * 0.1}>
                    <div className="glass-light glass-light-hover flex flex-col p-6 rounded-2xl h-full">
                      <div className={`font-display font-800 text-4xl md:text-5xl ${c.text} leading-none mb-2`}>
                        {stat.value}
                      </div>
                      <div className="font-display font-700 text-sm text-navy mb-2">{stat.label}</div>
                      <p className="text-navy/50 text-xs leading-relaxed flex-1 mb-4">{stat.context}</p>
                      <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="text-navy/40 text-[10px] uppercase tracking-wider">Industry exposure</span>
                          <span className={`text-[10px] font-700 ${c.text}`}>{stat.severity}%</span>
                        </div>
                        <PulseBar severity={stat.severity} color={stat.color} />
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TRENDING CHALLENGES ───────────────────────────────────────────── */}
        <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="max-w-2xl mb-16">
              <span className="inline-block px-3 py-1 rounded-full border border-red/30 text-red text-xs font-600 uppercase tracking-widest mb-4">
                Trending Now
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
                {data.challengeHeading}
              </h2>
              <p className="text-slate text-base leading-relaxed">{data.challengeBody}</p>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-6">
              {data.challenges.map((ch, i) => {
                const Icon = iconMap[ch.iconName];
                const sev = severityTokens[ch.severity];
                return (
                  <FadeIn key={ch.title} delay={i * 0.1}>
                    <div className="glass flex flex-col p-6 rounded-2xl h-full">
                      {/* Header row */}
                      <div className="flex items-start justify-between mb-5 gap-3">
                        <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                          {Icon && <Icon size={22} weight="duotone" className={sev.text} />}
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-700 uppercase tracking-wider ${sev.ring}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${sev.dot}`} />
                            {sev.label}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] text-red font-600">
                            <ArrowFatLinesUp size={10} weight="fill" className="text-red" />
                            {ch.trend}
                          </span>
                        </div>
                      </div>
                      {/* Pull stat */}
                      <div className={`font-display font-800 text-3xl ${sev.text} leading-none mb-1`}>{ch.pullStat}</div>
                      <div className="text-slate text-[11px] uppercase tracking-wider mb-4">{ch.pullLabel}</div>
                      {/* Content */}
                      <h3 className="font-display font-700 text-base text-white mb-2 leading-snug">{ch.title}</h3>
                      <p className="text-slate text-sm leading-relaxed flex-1">{ch.body}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── IMPACT MATRIX ────────────────────────────────────────────────── */}
        <section className="section-light py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="max-w-2xl mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-navy/8 text-navy text-xs font-600 uppercase tracking-widest mb-4">
                Platform in Practice
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-4">
                {data.impactHeading}
              </h2>
              <p className="text-navy/60 text-base leading-relaxed">{data.impactBody}</p>
            </FadeIn>
            {/* Column headers */}
            <div className="hidden md:grid grid-cols-3 gap-4 mb-3 px-2">
              {["The Challenge", "ServiceNow Module", "Measurable Outcome"].map((h) => (
                <span key={h} className="text-[10px] font-700 text-navy/40 uppercase tracking-widest">{h}</span>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {data.impactRows.map((row, i) => {
                const mc = colorTokens[row.moduleColor];
                return (
                  <FadeIn key={row.challenge} delay={i * 0.08}>
                    <div className="glass-light glass-light-hover grid md:grid-cols-3 gap-4 p-5 rounded-2xl items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-navy/25 shrink-0" />
                        <span className="text-navy font-600 text-sm">{row.challenge}</span>
                      </div>
                      <div className="flex items-center gap-2 md:justify-center">
                        <div className="hidden md:block w-5 border-t border-dashed border-navy/15" />
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-700 ${mc.badge}`}>
                          {row.module}
                        </span>
                        <div className="hidden md:block w-5 border-t border-dashed border-navy/15" />
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-display font-800 text-xl ${mc.text} leading-none mb-0.5`}>{row.metric}</span>
                        <span className="text-navy/60 text-xs">{row.outcome}</span>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PLATFORM MODULES ──────────────────────────────────────────────── */}
        <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-0 right-0 w-96 h-96 rounded-full ${accent.bg} blur-3xl opacity-30`} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="max-w-2xl mb-16">
              <span className={`inline-block px-3 py-1 rounded-full border ${accent.border} ${accent.text} text-xs font-600 uppercase tracking-widest mb-4`}>
                The Platform
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
                {data.modulesHeading}
              </h2>
              <p className="text-slate text-base leading-relaxed">{data.modulesBody}</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.modules.map((mod, i) => {
                const Icon = iconMap[mod.iconName];
                const mc = colorTokens[mod.color];
                return (
                  <FadeIn key={mod.module} delay={i * 0.08}>
                    <div className={`flex flex-col p-6 rounded-2xl border ${mc.border} ${mc.bg} h-full`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl ${mc.bg} flex items-center justify-center`}>
                          {Icon && <Icon size={20} weight="duotone" className={mc.text} />}
                        </div>
                        <span className={`text-[10px] font-700 uppercase tracking-wider px-2 py-1 rounded-md ${mc.badge}`}>
                          {mod.module}
                        </span>
                      </div>
                      <p className="text-slate text-sm leading-relaxed">{mod.description}</p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── OUTCOMES ──────────────────────────────────────────────────────── */}
        <section className="section-navy-mid py-20 border-y border-gold/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
                Proven Results
              </span>
              <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight mb-3">
                {data.outcomeHeading}
              </h2>
              <p className="text-slate text-base max-w-xl mx-auto leading-relaxed">{data.outcomeBody}</p>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {data.outcomes.map((o, i) => (
                <FadeIn key={o.label} delay={i * 0.1} className="flex flex-col items-center text-center">
                  <span className={`font-display font-800 text-4xl md:text-5xl ${o.color} leading-none mb-2`}>{o.value}</span>
                  <span className="text-slate text-xs leading-snug max-w-[120px]">{o.label}</span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="section-light py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden bg-navy p-10 md:p-16 text-center mesh-bg">
                <div className="absolute inset-0 pointer-events-none">
                  <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full ${accent.bg} blur-3xl opacity-40`} />
                  <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple/10 blur-3xl" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-6">
                    Built for {data.industry}
                  </span>
                  <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight mb-5 max-w-2xl mx-auto">
                    Your Industry Has Specific Problems.<br />We Have Specific Answers.
                  </h2>
                  <p className="text-slate-light text-lg leading-relaxed max-w-xl mx-auto mb-10">
                    Thirty minutes with our team and you&apos;ll walk away with a concrete view of what
                    ServiceNow can do for your specific environment — no generic pitch, no recycled slides.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact"
                      className="group flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy font-display font-700 text-base rounded-xl hover:bg-gold-light transition-all shadow-xl shadow-gold/20">
                      <CalendarBlank size={16} weight="bold" />
                      Book an Industry Briefing
                      <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/services"
                      className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/8 hover:border-white/40 transition-all">
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
