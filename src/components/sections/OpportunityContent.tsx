"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, ArrowLeft, CheckCircle, Lock, ShieldCheck,
  TrendUp, Users, Buildings, UserCircle, Star,
  CurrencyDollar, Handshake, Envelope,
} from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OpportunityCalculator from "@/components/sections/OpportunityCalculator";

const ease = [0.22, 1, 0.36, 1] as const;

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = Date.now();
    const tick = () => {
      const t = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, trigger]);
  return n;
}

function fmt(n: number) { return "$" + n.toLocaleString("en-US"); }

// ── Career ascent tiers ───────────────────────────────────────────────────────
const tiers = [
  {
    tier: "Tier 1", title: "Practitioner", income: "$326K", badge: "The Entry Point",
    color: "#C9A84C", border: "border-gold/30", bg: "bg-gold/8", Icon: UserCircle,
    body: "Join the AWN delivery network and bill Fortune 500 clients directly at 85% of project profit. Stop funding an agency's margin.",
    reqs: ["Active ServiceNow certification (CSA+)", "2+ years implementation experience", "US work authorization"],
  },
  {
    tier: "Tier 2", title: "Senior Practitioner", income: "$390K", badge: "Accelerated Track",
    color: "#0D9B8A", border: "border-teal/30", bg: "bg-teal/8", Icon: Star,
    body: "Lead workstreams. Mentor incoming practitioners. Earn referral income on every qualified professional you bring into the network.",
    reqs: ["2+ AWN engagement cycles", "Refer 1 qualified practitioner", "CIS certification preferred"],
  },
  {
    tier: "Tier 3", title: "Practice Lead", income: "$490K", badge: "Ownership Track",
    color: "#6B4FBB", border: "border-purple/30", bg: "bg-purple/8", Icon: Users,
    body: "Manage a team of 3–5 practitioners. Earn active delivery income plus passive income from every member of your growing practice.",
    reqs: ["3+ referred practitioners active", "Consistent delivery record", "Leadership endorsement"],
  },
  {
    tier: "Tier 4", title: "Practice Owner", income: "$650K+", badge: "Equity Path",
    color: "#C9A84C", border: "border-gold/30", bg: "bg-gold/8", Icon: Buildings,
    body: "Own your practice. Build equity. With 5+ practitioners in your network, passive income compounds while you focus on growth.",
    reqs: ["5+ active practitioners", "Sustained client excellence", "Invitation only"],
  },
];

// ── AWN provides / you bring ──────────────────────────────────────────────────
const partnership = [
  { awn: "Fortune 500 client pipeline — $12M+ annual project flow", you: "ServiceNow expertise and active certifications" },
  { awn: "Legal, MSAs, SOWs, and contract compliance", you: "Consistent, measurable delivery outcomes" },
  { awn: "Insurance, liability, and ServiceNow portal requirements", you: "A network of talented practitioners" },
  { awn: "Brand equity, marketing, and business development", you: "Commitment to delivery and client satisfaction" },
  { awn: "Payroll, invoicing, and financial infrastructure", you: "Ambition to own your career trajectory" },
  { awn: "Certification support, platform access, and enablement", you: "Leadership within your practice area" },
];

// ── Section: Income Gap ───────────────────────────────────────────────────────
function MathSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const agencyNum = useCountUp(115_200, 1600, inView);
  const awnNum = useCountUp(326_400, 1600, inView);
  const gapNum = useCountUp(211_200, 1800, inView);

  return (
    <section ref={ref} className="section-light py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }} className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full border border-navy/15 text-navy text-xs font-700 uppercase tracking-widest mb-4">The Math</span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-navy leading-tight">The Income Gap They Don't Advertise</h2>
          <p className="mt-4 text-slate-600 text-base max-w-xl mx-auto leading-7">At a $200/hr bill rate and 1,920 billable hours — this is what you're actually leaving on the table every single year.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-center">
          {/* Agency card */}
          <motion.div initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.1, ease }} className="rounded-3xl border-2 border-red/20 bg-red/3 p-8">
            <div className="text-xs font-700 uppercase tracking-widest text-red/60 mb-4">Agency Subcontract Model</div>
            <div className="space-y-4 mb-6">
              {[["Your bill rate", "$200/hr"], ["Agency keeps", "70%  →  $140/hr"], ["You receive", "30%  →  $60/hr"]].map(([l, v]) => (
                <div key={l} className="flex justify-between items-center text-sm border-b border-red/10 pb-3 last:border-0 last:pb-0">
                  <span className="text-slate-600">{l}</span>
                  <span className="font-600 text-navy">{v}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-red/8 border border-red/15 p-4 text-center">
              <div className="text-slate-500 text-xs mb-1">Annual Take-Home</div>
              <div className="font-display font-800 text-3xl text-red/80">{fmt(agencyNum)}</div>
            </div>
            {/* Bar */}
            <div className="mt-4 h-3 rounded-full bg-red/10 overflow-hidden">
              <motion.div animate={inView ? { width: "30%" } : { width: 0 }} transition={{ duration: 1, delay: 0.4, ease }} className="h-full bg-red/50 rounded-full" />
            </div>
            <p className="text-center text-xs text-slate-400 mt-1">30% of value created</p>
          </motion.div>

          {/* Gap callout */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.65, delay: 0.25, ease }} className="text-center">
            <div className="inline-flex flex-col items-center gap-3 rounded-3xl border border-gold/25 bg-gold/8 px-8 py-10">
              <TrendUp size={36} className="text-gold" weight="duotone" />
              <div className="font-display font-800 text-5xl text-gold">{fmt(gapNum)}</div>
              <div className="text-sm text-slate-600 font-600">left on the table<br />every single year</div>
              <div className="text-xs text-slate-400 text-center max-w-[160px]">The gap between what agencies collect and what you could keep</div>
            </div>
          </motion.div>

          {/* AWN card */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.1, ease }} className="rounded-3xl border-2 border-teal/30 bg-teal/4 p-8">
            <div className="text-xs font-700 uppercase tracking-widest text-teal mb-4">AscendWorks Practice Model</div>
            <div className="space-y-4 mb-6">
              {[["Your bill rate", "$200/hr"], ["AWN fee", "15%  →  $30/hr"], ["You receive", "85%  →  $170/hr"]].map(([l, v]) => (
                <div key={l} className="flex justify-between items-center text-sm border-b border-teal/10 pb-3 last:border-0 last:pb-0">
                  <span className="text-slate-600">{l}</span>
                  <span className="font-600 text-navy">{v}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-teal/10 border border-teal/20 p-4 text-center">
              <div className="text-slate-500 text-xs mb-1">Annual Take-Home</div>
              <div className="font-display font-800 text-3xl text-teal">{fmt(awnNum)}</div>
            </div>
            {/* Bar */}
            <div className="mt-4 h-3 rounded-full bg-teal/10 overflow-hidden">
              <motion.div animate={inView ? { width: "85%" } : { width: 0 }} transition={{ duration: 1, delay: 0.4, ease }} className="h-full bg-teal rounded-full" />
            </div>
            <p className="text-center text-xs text-slate-400 mt-1">85% of value created</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Section: Ascent Path ──────────────────────────────────────────────────────
function AscentSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="section-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }} className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full border border-gold/25 text-gold text-xs font-700 uppercase tracking-widest mb-4">Career Ascent</span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight">Four Tiers. One Trajectory. No Ceiling.</h2>
          <p className="mt-4 text-slate-light text-base max-w-xl mx-auto">Every Founding Practitioner enters at Tier 1. Advancement is earned through delivery, referrals, and leadership. There is no arbitrary promotion cycle.</p>
        </motion.div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-px bg-gradient-to-r from-gold/20 via-teal/40 via-purple/30 to-gold/20" />

          {tiers.map((t, i) => (
            <motion.div key={t.tier} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.12, ease }} className="flex flex-col">
              {/* Node */}
              <div className="flex justify-center mb-5">
                <div style={{ borderColor: t.color }} className={`w-14 h-14 rounded-full border-2 ${t.bg} flex items-center justify-center shadow-[0_0_24px_rgba(0,0,0,0.4)] relative z-10`}>
                  <t.Icon size={22} style={{ color: t.color }} weight="duotone" />
                </div>
              </div>
              <div style={{ color: t.color }} className="text-[10px] font-700 uppercase tracking-widest text-center mb-1">{t.tier} · {t.badge}</div>
              <h3 className="font-display font-700 text-white text-lg text-center mb-1">{t.title}</h3>
              <div className="font-display font-800 text-3xl text-center mb-3" style={{ color: t.color }}>{t.income}</div>
              <div className={`rounded-2xl border ${t.border} ${t.bg} p-5 flex-1`}>
                <p className="text-slate-light text-sm leading-relaxed mb-4">{t.body}</p>
                <div className="space-y-2">
                  {t.reqs.map((r) => (
                    <div key={r} className="flex items-start gap-2 text-xs text-slate">
                      <CheckCircle size={12} style={{ color: t.color }} weight="fill" className="mt-0.5 shrink-0" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section: Partnership ──────────────────────────────────────────────────────
function PartnershipSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="section-light py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }} className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full border border-navy/15 text-navy text-xs font-700 uppercase tracking-widest mb-4">The Partnership</span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-navy leading-tight">What You Bring. What We Cover.</h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">No startup fees. No hidden costs. You focus entirely on delivery and growth — we eliminate every other burden.</p>
        </motion.div>

        <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-[0_8px_40px_rgba(9,15,82,0.08)]">
          <div className="grid grid-cols-2 bg-navy text-white text-xs font-700 uppercase tracking-widest">
            <div className="px-6 py-4 flex items-center gap-2 border-r border-white/10"><Handshake size={14} className="text-gold" weight="duotone" /> AscendWorks Provides</div>
            <div className="px-6 py-4 flex items-center gap-2"><UserCircle size={14} className="text-teal" weight="duotone" /> You Bring</div>
          </div>
          {partnership.map((row, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.45, delay: i * 0.07, ease }} className={`grid grid-cols-2 divide-x divide-slate-100 border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
              <div className="px-6 py-4 flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle size={14} className="text-teal mt-0.5 shrink-0" weight="fill" />
                {row.awn}
              </div>
              <div className="px-6 py-4 flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle size={14} className="text-gold mt-0.5 shrink-0" weight="fill" />
                {row.you}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section: Confidentiality ──────────────────────────────────────────────────
function ConfidentialSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="section-navy-mid py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }}>
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 mb-6 mx-auto">
            <ShieldCheck size={32} className="text-gold" weight="duotone" />
          </div>
          <span className="inline-block px-3 py-1 rounded-full border border-gold/25 text-gold text-xs font-700 uppercase tracking-widest mb-5">Complete Confidentiality</span>
          <h2 className="font-display font-800 text-3xl md:text-4xl text-white leading-tight mb-5">Everything You Share Stays Between Us.</h2>
          <p className="text-slate-light text-base leading-7 mb-10 max-w-2xl mx-auto">Your inquiry, application, current employer, compensation, and contact information are treated with complete discretion. We do not share, sell, or disclose applicant information to any third party — including clients.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { Icon: Lock, title: "Your Employer Never Knows", body: "We will never contact your current employer, reference check without consent, or disclose that you inquired." },
              { Icon: ShieldCheck, title: "Zero Third-Party Sharing", body: "Your information is never shared with clients, partners, or any external party at any stage of the process." },
              { Icon: Envelope, title: "Encrypted, Private Communication", body: "All application data is handled through secure channels. You control how and when we communicate." },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="glass rounded-2xl p-6 text-left">
                <Icon size={22} className="text-gold mb-3" weight="duotone" />
                <h4 className="font-display font-700 text-white text-sm mb-2">{title}</h4>
                <p className="text-slate text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function OpportunityContent() {
  const heroRef = useRef(null);
  const heroIn = useInView(heroRef, { once: true });
  const calcRef = useRef(null);
  const calcIn = useInView(calcRef, { once: true, margin: "-60px" });

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section ref={heroRef} className="relative overflow-hidden bg-navy py-24 lg:py-32">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold/8 blur-[160px]" />
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-purple/10 blur-[140px]" />
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-teal/8 blur-[120px]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <Link href="/careers" className="inline-flex items-center gap-2 text-slate text-sm hover:text-gold transition-colors mb-8">
              <ArrowLeft size={13} weight="bold" /> Back to Careers
            </Link>
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <motion.div initial={{ opacity: 0, y: 32 }} animate={heroIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease }}>
                <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-700 uppercase tracking-widest mb-6">The Opportunity</span>
                <h1 className="font-display font-800 text-5xl lg:text-6xl text-white leading-[1.04] mb-6">
                  Your Expertise Belongs<br />
                  <span className="text-gold-gradient">at the Top of the Chain.</span>
                </h1>
                <p className="text-xl text-slate-light leading-8 mb-8">
                  AscendWorks is opening <strong className="text-white">25 Charter Practice seats</strong> for ServiceNow professionals who are done funding agency margins with their expertise. This is not a job posting. It is an invitation to own your career.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate mb-8">
                  <Lock size={12} className="text-gold" weight="fill" />
                  All applications treated with complete confidentiality. Your current employer will not be contacted.
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-700 text-navy hover:bg-gold-light transition-colors">
                    Apply Confidentially <ArrowRight size={15} weight="bold" />
                  </Link>
                  <a href="#ascent" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-600 text-white hover:border-gold/30 hover:bg-white/5 transition-all">
                    See the Ascent Path
                  </a>
                </div>
              </motion.div>

              {/* Hero stats */}
              <motion.div initial={{ opacity: 0, x: 32 }} animate={heroIn ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15, ease }} className="grid grid-cols-2 gap-4">
                {[
                  { label: "Profit Retention", value: "85%", sub: "vs 30% agency standard", color: "text-gold", border: "border-gold/20", bg: "bg-gold/8" },
                  { label: "Charter Seats", value: "25", sub: "Founding practitioners only", color: "text-teal", border: "border-teal/20", bg: "bg-teal/8" },
                  { label: "Solo Practitioner OTE", value: "$326K", sub: "Annual · 1,920 hrs · $200/hr rate", color: "text-white", border: "border-white/10", bg: "bg-white/5" },
                  { label: "Annual Project Pipeline", value: "$12M+", sub: "Direct Fortune 500 flow", color: "text-purple", border: "border-purple/20", bg: "bg-purple/8" },
                  { label: "Startup / Hidden Fees", value: "$0", sub: "No cost to join, ever", color: "text-teal", border: "border-teal/20", bg: "bg-teal/8" },
                  { label: "Practice Owner OTE", value: "$650K+", sub: "Active + passive income", color: "text-gold", border: "border-gold/20", bg: "bg-gold/8" },
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} animate={heroIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease }} className={`rounded-2xl border ${stat.border} ${stat.bg} p-5`}>
                    <div className={`font-display font-800 text-2xl mb-1 ${stat.color}`}>{stat.value}</div>
                    <div className="text-white text-xs font-600 mb-0.5">{stat.label}</div>
                    <div className="text-slate text-[11px] leading-tight">{stat.sub}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Income Math ── */}
        <MathSection />

        {/* ── Career Ascent Path ── */}
        <div id="ascent">
          <AscentSection />
        </div>

        {/* ── Income Calculator ── */}
        <section ref={calcRef} className="section-light py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={calcIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease }} className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full border border-navy/15 text-navy text-xs font-700 uppercase tracking-widest mb-4">Build Your Number</span>
              <h2 className="font-display font-800 text-4xl md:text-5xl text-navy leading-tight">Your Income Architecture</h2>
              <p className="mt-4 text-slate-600 max-w-xl mx-auto">Select your scenario. Watch active income + passive income compound as you build your practice network.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={calcIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15, ease }}>
              <OpportunityCalculator />
            </motion.div>
          </div>
        </section>

        {/* ── Partnership ── */}
        <PartnershipSection />

        {/* ── Why Now ── */}
        <section className="section-dark py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full border border-gold/25 text-gold text-xs font-700 uppercase tracking-widest mb-5">Why This Moment</span>
                <h2 className="font-display font-800 text-4xl text-white leading-tight mb-6">The ServiceNow Talent Gap Is at Peak. The Window Won't Stay Open.</h2>
                <p className="text-slate-light leading-7 mb-6">ServiceNow-certified professional demand grew 34% in Q1 2026, outpacing supply by a 3:1 ratio. That talent gap is exactly why this opportunity exists — and why it won't last. We are building a network of 25 elite practitioners now, before the market corrects.</p>
                <div className="space-y-4">
                  {[
                    { label: "CSA/CIS demand growth YoY", value: "+34%", color: "text-gold" },
                    { label: "Supply-to-demand ratio", value: "1:3", color: "text-teal" },
                    { label: "Avg. CSA holder salary", value: "$125K+", color: "text-white" },
                    { label: "Charter seats remaining", value: "25", color: "text-gold" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="glass-inset flex items-center justify-between rounded-xl px-5 py-3">
                      <span className="text-slate text-sm">{label}</span>
                      <span className={`font-display font-800 text-xl ${color}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-[420px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85&auto=format&fit=crop" alt="ServiceNow professionals in a modern enterprise environment" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-gold/25 bg-navy/80 backdrop-blur-sm p-4">
                    <div className="font-display font-800 text-xl text-gold mb-1">Founding Practitioner Program</div>
                    <div className="text-slate-light text-sm">25 seats · No startup fees · Full confidentiality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Confidentiality ── */}
        <ConfidentialSection />

        {/* ── Apply CTA ── */}
        <section className="section-dark py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-block px-3 py-1 rounded-full border border-gold/25 text-gold text-xs font-700 uppercase tracking-widest mb-6">Ready to Ascend</span>
            <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight mb-4">Apply for One of the 25 Founding Practice Seats.</h2>
            <p className="text-slate-light text-base leading-7 mb-4 max-w-xl mx-auto">One conversation. No commitment. Complete confidentiality. If this is the right fit, you will know within 48 hours.</p>
            <p className="flex items-center justify-center gap-2 text-xs text-slate mb-10">
              <Lock size={12} className="text-gold" weight="fill" />
              Your current employer and colleagues will never be contacted or informed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-700 text-navy hover:bg-gold-light transition-colors shadow-lg shadow-gold/25">
                Apply Confidentially <ArrowRight size={15} weight="bold" />
              </Link>
              <Link href="/careers" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-600 text-white hover:border-gold/30 hover:bg-white/5 transition-all">
                View Open Roles
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
