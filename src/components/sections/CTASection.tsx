"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { submitContactForm, CONTACT_EMAIL } from "@/lib/contact";
import { ArrowRight, CheckCircle, SealCheck, ArrowsClockwise, ShieldCheck } from "@phosphor-icons/react";

const trustSignals = [
  "ServiceNow-focused advisory and delivery",
  "SOC 2 Type II Certified",
  "Scope and success criteria agreed up front",
  "Response within 1 business day",
];

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<{ message: string; mailto: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setError(null);
    const result = await submitContactForm(form);
    setSending(false);
    if (result.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      setError({ message: result.error, mailto: result.mailto });
    }
  }

  return (
    <section ref={ref} className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="relative rounded-3xl overflow-hidden bg-navy mesh-bg border border-white/15 shadow-[0_24px_70px_rgba(10,22,40,0.28),inset_0_1px_0_rgba(255,255,255,0.16)]"
        >
          {/* Background glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gold/8 blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-purple/8 blur-[100px]" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-teal/5 blur-[80px]" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="ctogrid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern></defs>
              <rect width="100%" height="100%" fill="url(#ctogrid)" />
            </svg>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-0">
            {/* ── LEFT: Headline + trust ─────────────────────────────── */}
            <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16 lg:border-r lg:border-white/8">
              <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-6 w-fit">
                Let&apos;s Build What&apos;s Next
              </span>
              <h2 className="font-display font-800 text-4xl md:text-5xl lg:text-[52px] text-white leading-[1.07] tracking-tight mb-6">
                Ready to See What<br />
                Your IT Investment<br />
                <span className="text-gold">Is Worth?</span>
              </h2>
              <p className="text-slate-light text-base leading-relaxed mb-10 max-w-sm">
                Tell us about your challenge. An AscendWorks enterprise specialist
                will respond within one business day — with a direct point of view,
                not a sales deck.
              </p>

              {/* Trust signals */}
              <div className="space-y-3">
                {trustSignals.map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <SealCheck size={15} weight="fill" className="text-teal shrink-0" />
                    <span className="text-slate-light text-sm">{t}</span>
                  </div>
                ))}
              </div>

              {/* Privacy note */}
              <div className="flex items-center gap-2 mt-8 pt-8 border-t border-white/8">
                <ShieldCheck size={14} weight="fill" className="text-slate/50 shrink-0" />
                <p className="text-slate text-xs leading-snug">
                  Your information is handled with enterprise-grade confidentiality.
                  We never share your data.
                </p>
              </div>
            </div>

            {/* ── RIGHT: Form ────────────────────────────────────────── */}
            <div className="p-8 md:p-10 lg:p-12">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full min-h-[480px] gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-teal/15 flex items-center justify-center">
                    <CheckCircle size={40} weight="fill" className="text-teal" />
                  </div>
                  <h3 className="font-display font-800 text-white text-2xl">Thank You for Reaching Out.</h3>
                  <p className="text-slate-light text-base leading-relaxed max-w-sm">
                    Your inquiry has been received. An AscendWorks enterprise specialist
                    will contact you within one business day.
                  </p>
                  <button type="button" onClick={() => setSubmitted(false)}
                    className="mt-2 text-gold text-sm font-600 hover:text-white transition-colors">
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
                  {/* Honeypot: hidden from people, irresistible to bots. */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-light text-xs font-600 uppercase tracking-wider">First Name *</label>
                      <input required type="text" name="firstName" autoComplete="given-name" placeholder="Jane"
                        className="glass-inset w-full rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate/50 focus:outline-none focus:border-gold/50 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Last Name *</label>
                      <input required type="text" name="lastName" autoComplete="family-name" placeholder="Smith"
                        className="glass-inset w-full rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate/50 focus:outline-none focus:border-gold/50 transition-colors" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Work Email *</label>
                    <input required type="email" name="email" autoComplete="email" placeholder="jane@enterprise.com"
                      className="glass-inset w-full rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate/50 focus:outline-none focus:border-gold/50 transition-colors" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Company *</label>
                      <input required type="text" name="company" autoComplete="organization" placeholder="Acme Corp"
                        className="glass-inset w-full rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate/50 focus:outline-none focus:border-gold/50 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Job Title</label>
                      <input type="text" name="title" autoComplete="organization-title" placeholder="CIO"
                        className="glass-inset w-full rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate/50 focus:outline-none focus:border-gold/50 transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Industry *</label>
                      <select required name="industry" title="Industry" aria-label="Industry"
                        className="glass-inset w-full rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                        <option value="" className="bg-navy text-slate">Select industry</option>
                        <option value="energy" className="bg-navy">Oil &amp; Gas / Energy</option>
                        <option value="banking" className="bg-navy">Banking &amp; Financial Services</option>
                        <option value="healthcare" className="bg-navy">Healthcare &amp; Life Sciences</option>
                        <option value="manufacturing" className="bg-navy">Manufacturing</option>
                        <option value="technology" className="bg-navy">Technology &amp; Media</option>
                        <option value="retail" className="bg-navy">Retail &amp; Commerce</option>
                        <option value="government" className="bg-navy">Government &amp; Public Sector</option>
                        <option value="other" className="bg-navy">Other</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Project Scope *</label>
                      <select required name="scope" title="Project Scope" aria-label="Project Scope"
                        className="glass-inset w-full rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                        <option value="" className="bg-navy text-slate">Select scope</option>
                        <option value="pilot" className="bg-navy">Pilot / Proof of Concept</option>
                        <option value="department" className="bg-navy">Department-Level</option>
                        <option value="enterprise" className="bg-navy">Enterprise-Wide</option>
                        <option value="global" className="bg-navy">Global / Multi-Region</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Phone</label>
                    <input type="tel" name="phone" autoComplete="tel" placeholder="+1 (555) 000-0000"
                      className="glass-inset w-full rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate/50 focus:outline-none focus:border-gold/50 transition-colors" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Tell Us About Your Challenge *</label>
                    <textarea required name="message" rows={3} placeholder="What's the problem you're trying to solve? Be as specific as you'd like."
                      className="glass-inset w-full rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate/50 focus:outline-none focus:border-gold/50 transition-colors resize-none" />
                  </div>

                  {error && (
                    <div role="alert" className="glass-inset rounded-xl px-4 py-3 text-sm text-slate-light">
                      <p>{error.message}</p>
                      <a href={error.mailto} className="mt-1 inline-block font-600 text-gold hover:text-gold-light">
                        Email {CONTACT_EMAIL} instead &rarr;
                      </a>
                    </div>
                  )}

                  <button type="submit" disabled={sending}
                    className="group flex items-center justify-center gap-2 w-full py-4 bg-gold text-navy font-display font-700 text-base rounded-xl hover:bg-amber-400 transition-all shadow-xl shadow-gold/20 disabled:opacity-60 mt-1">
                    {sending ? (
                      <><ArrowsClockwise size={16} className="animate-spin" />Submitting…</>
                    ) : (
                      <>Submit Inquiry <ArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
