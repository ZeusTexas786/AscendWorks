"use client";

import { useSearchParams } from "next/navigation";
import { submitContactForm, CONTACT_EMAIL } from "@/lib/contact";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowsClockwise,
  CheckCircle,
  SealCheck,
  ShieldCheck,
  Phone,
  Envelope,
  MapPin,
  CalendarCheck,
  ChatText,
  Clock,
  Users,
  Briefcase,
} from "@phosphor-icons/react";

// ─── static data ───────────────────────────────────────────────────────────

const trustSignals = [
  "ServiceNow-focused advisory and delivery",
  "SOC 2 Type II Certified",
  "Scope and success criteria agreed up front",
  "Response within 1 business day",
];

const discoverySteps = [
  {
    Icon: Clock,
    title: "Review within 24 hours",
    desc: "An AscendWorks enterprise specialist reviews your submission and prepares relevant context before reaching out.",
  },
  {
    Icon: CalendarCheck,
    title: "30-minute scoping call",
    desc: "We schedule a focused session to map your challenge to proven ServiceNow outcomes — on your timeline.",
  },
  {
    Icon: Briefcase,
    title: "Clear path forward",
    desc: "You leave with a concrete point of view: scope, approach, and realistic timelines. No generic decks.",
  },
];

const expertSteps = [
  {
    Icon: Users,
    title: "Matched to the right expert",
    desc: "Your inquiry is reviewed by our practice leads and routed to the specialist best suited to your challenge.",
  },
  {
    Icon: ChatText,
    title: "Direct Q&A session",
    desc: "A focused conversation with a senior ServiceNow practitioner — ask anything, get honest answers.",
  },
  {
    Icon: Briefcase,
    title: "Actionable recommendations",
    desc: "Walk away with specific recommendations you can act on, whether or not you engage AscendWorks.",
  },
];

const offices = [
  { city: "Dallas, TX", label: "Headquarters" },
  { city: "Chicago, IL", label: "Midwest Hub" },
  { city: "New York, NY", label: "Northeast Hub" },
];

// ─── field helpers ──────────────────────────────────────────────────────────

const inputCls =
  "glass-inset w-full rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate/50 focus:outline-none focus:border-gold/50 transition-colors";

const labelCls = "text-slate-light text-xs font-semibold uppercase tracking-wider";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  );
}

// ─── main component ─────────────────────────────────────────────────────────

export default function ContactClient() {
  const params = useSearchParams();
  const initial = params.get("intent") === "expert" ? "expert" : "discovery";

  const [intent, setIntent] = useState<"discovery" | "expert">(initial);
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

  const steps = intent === "discovery" ? discoverySteps : expertSteps;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-1/4 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gold/8 blur-[160px]" />
          <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-teal/8 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple/8 blur-[100px]" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cg" width="64" height="64" patternUnits="userSpaceOnUse">
                <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cg)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Let&apos;s Build What&apos;s Next
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Start the Conversation.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-light">
              Tell us about your challenge. An AscendWorks enterprise specialist
              responds within one business day — with a direct point of view, not a sales deck.
            </p>

            {/* Intent toggle */}
            <div className="glass-inset mt-8 inline-flex items-center gap-1 rounded-2xl p-1">
              {(["discovery", "expert"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setIntent(v)}
                  className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    intent === v
                      ? "bg-gold text-navy shadow-lg shadow-gold/20"
                      : "text-slate-light hover:text-white"
                  }`}
                >
                  {v === "discovery" ? (
                    <><CalendarCheck size={15} weight={intent === v ? "fill" : "regular"} />Book a Discovery Call</>
                  ) : (
                    <><ChatText size={15} weight={intent === v ? "fill" : "regular"} />Talk to an Expert</>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FORM SECTION ─────────────────────────────────────────── */}
      <section className="section-light py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl bg-navy mesh-bg relative"
          >
            {/* Glows */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gold/8 blur-[120px]" />
              <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-purple/8 blur-[100px]" />
              <svg className="absolute inset-0 h-full w-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="fg" width="48" height="48" patternUnits="userSpaceOnUse">
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#fg)" />
              </svg>
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/8">

              {/* ── LEFT: context ─────────────────────────────────── */}
              <div className="flex flex-col justify-between p-10 md:p-12 lg:p-14">
                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={intent}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold mb-5">
                        {intent === "discovery" ? (
                          <><CalendarCheck size={12} weight="fill" />Discovery Call</>
                        ) : (
                          <><ChatText size={12} weight="fill" />Expert Session</>
                        )}
                      </span>
                      <h2 className="font-display text-3xl font-extrabold leading-tight text-white md:text-4xl mb-4">
                        {intent === "discovery"
                          ? <>Ready to See What Your IT Investment <span className="text-gold">Is Worth?</span></>
                          : <>Get a Direct Answer From Someone <span className="text-gold">Who Has Done It.</span></>
                        }
                      </h2>
                      <p className="text-slate-light text-base leading-relaxed mb-8 max-w-sm">
                        {intent === "discovery"
                          ? "A 30-minute scoping session with an AscendWorks enterprise specialist. We map your challenge to proven ServiceNow outcomes — before you commit to anything."
                          : "Skip the pitch cycle. Talk directly with a senior ServiceNow practitioner about your specific challenge and get an honest, informed point of view."
                        }
                      </p>

                      {/* What happens next */}
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate mb-4">What happens next</p>
                      <div className="space-y-5 mb-8">
                        {steps.map((step, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="shrink-0 mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-gold/20 bg-gold/8">
                              <step.Icon size={16} className="text-gold" weight="duotone" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white mb-0.5">{step.title}</p>
                              <p className="text-xs leading-relaxed text-slate">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Trust signals */}
                  <div className="space-y-2.5 mb-8">
                    {trustSignals.map((t) => (
                      <div key={t} className="flex items-center gap-3">
                        <SealCheck size={14} weight="fill" className="shrink-0 text-teal" />
                        <span className="text-sm text-slate-light">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div className="space-y-3 pt-8 border-t border-white/8">
                  <a href="mailto:hello@ascendworksnow.com"
                    className="flex items-center gap-3 text-sm text-slate-light hover:text-white transition-colors">
                    <Envelope size={14} className="text-gold shrink-0" weight="fill" />
                    hello@ascendworksnow.com
                  </a>
                  <a href="tel:+12242290699"
                    className="flex items-center gap-3 text-sm text-slate-light hover:text-white transition-colors">
                    <Phone size={14} className="text-gold shrink-0" weight="fill" />
                    +1 (224) 229-0699
                  </a>
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={14} className="shrink-0 text-slate/50" weight="fill" />
                    <p className="text-xs leading-snug text-slate">
                      Enterprise-grade confidentiality. We never share your data.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: form ───────────────────────────────────── */}
              <div className="p-8 md:p-10 lg:p-12">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex min-h-[580px] flex-col items-center justify-center gap-5 text-center"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-teal/15">
                        <CheckCircle size={40} weight="fill" className="text-teal" />
                      </div>
                      <h3 className="font-display text-2xl font-extrabold text-white">
                        Thank You for Reaching Out.
                      </h3>
                      <p className="max-w-sm text-base leading-relaxed text-slate-light">
                        {intent === "discovery"
                          ? "Your discovery call request has been received. An AscendWorks specialist will reach out within one business day to schedule your session."
                          : "Your inquiry has been received. You'll be matched with the right expert and hear back within one business day."
                        }
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="text-sm font-semibold text-gold hover:text-white transition-colors"
                        >
                          Submit another inquiry
                        </button>
                        <span className="hidden sm:block text-slate/30">|</span>
                        <Link href="/insights" className="text-sm font-semibold text-slate-light hover:text-white transition-colors">
                          Read our Insights →
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col gap-4"
                    >
                      {/* Hidden intent field */}
                      <input type="hidden" name="intent" value={intent} />
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
                        <Field label="First Name *">
                          <input required type="text" name="firstName" placeholder="Jane" className={inputCls} />
                        </Field>
                        <Field label="Last Name *">
                          <input required type="text" name="lastName" placeholder="Smith" className={inputCls} />
                        </Field>
                      </div>

                      <Field label="Work Email *">
                        <input required type="email" name="email" placeholder="jane@enterprise.com" className={inputCls} />
                      </Field>

                      <div className="grid grid-cols-2 gap-4">
                        <Field label="Company *">
                          <input required type="text" name="company" placeholder="Acme Corp" className={inputCls} />
                        </Field>
                        <Field label="Job Title">
                          <input type="text" name="title" placeholder="CIO" className={inputCls} />
                        </Field>
                      </div>

                      <Field label="Phone">
                        <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className={inputCls} />
                      </Field>

                      <div className="grid grid-cols-2 gap-4">
                        <Field label="Industry *">
                          <select required name="industry" aria-label="Industry" className={inputCls + " appearance-none"}>
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
                        </Field>
                        <Field label="Primary Service *">
                          <select required name="service" aria-label="Primary Service" className={inputCls + " appearance-none"}>
                            <option value="" className="bg-navy text-slate">Area of interest</option>
                            <option value="implementation" className="bg-navy">ServiceNow Implementation</option>
                            <option value="agentic-ai" className="bg-navy">Agentic AI &amp; Automation</option>
                            <option value="itsm" className="bg-navy">ITSM &amp; Platform Optimization</option>
                            <option value="architecture" className="bg-navy">Platform Architecture</option>
                            <option value="advisory" className="bg-navy">Strategic IT Advisory</option>
                            <option value="staffing" className="bg-navy">Talent &amp; Staffing</option>
                            <option value="other" className="bg-navy">Not Sure Yet</option>
                          </select>
                        </Field>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Field label="Project Scope *">
                          <select required name="scope" aria-label="Project Scope" className={inputCls + " appearance-none"}>
                            <option value="" className="bg-navy text-slate">Select scope</option>
                            <option value="pilot" className="bg-navy">Pilot / Proof of Concept</option>
                            <option value="department" className="bg-navy">Department-Level</option>
                            <option value="enterprise" className="bg-navy">Enterprise-Wide</option>
                            <option value="global" className="bg-navy">Global / Multi-Region</option>
                          </select>
                        </Field>
                        <Field label="Timeline">
                          <select name="timeline" aria-label="Timeline" className={inputCls + " appearance-none"}>
                            <option value="" className="bg-navy text-slate">When to start</option>
                            <option value="asap" className="bg-navy">As soon as possible</option>
                            <option value="1-3mo" className="bg-navy">1–3 months</option>
                            <option value="3-6mo" className="bg-navy">3–6 months</option>
                            <option value="6mo+" className="bg-navy">6+ months</option>
                          </select>
                        </Field>
                      </div>

                      <Field label="Tell Us About Your Challenge *">
                        <textarea
                          required
                          name="message"
                          rows={4}
                          placeholder="What's the problem you're trying to solve? The more specific you are, the better we can prepare."
                          className={inputCls + " resize-none"}
                        />
                      </Field>

                      {error && (
                        <div role="alert" className="glass-inset rounded-xl px-4 py-3 text-sm text-slate-light">
                          <p>{error.message}</p>
                          <a
                            href={error.mailto}
                            className="mt-1 inline-block font-semibold text-gold hover:text-gold-light"
                          >
                            Email {CONTACT_EMAIL} instead &rarr;
                          </a>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={sending}
                        className="group mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-4 font-display text-base font-bold text-navy shadow-xl shadow-gold/20 transition-all hover:bg-gold-light disabled:opacity-60"
                      >
                        {sending ? (
                          <><ArrowsClockwise size={16} className="animate-spin" />Submitting…</>
                        ) : intent === "discovery" ? (
                          <>Book My Discovery Call <ArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform" /></>
                        ) : (
                          <>Talk to an Expert <ArrowRight size={15} weight="bold" className="group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </button>

                      <p className="text-center text-xs text-slate/60">
                        No commitment required. We respond within one business day.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OFFICES ──────────────────────────────────────────────── */}
      <section className="section-dark py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">Our Offices</p>
              <h3 className="font-display text-xl font-bold text-white">Enterprise coverage across North America.</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {offices.map((o) => (
                <div key={o.city} className="glass flex items-center gap-3 rounded-2xl px-5 py-3">
                  <MapPin size={15} className="shrink-0 text-gold" weight="fill" />
                  <div>
                    <p className="text-sm font-semibold text-white">{o.city}</p>
                    <p className="text-[11px] text-slate">{o.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
