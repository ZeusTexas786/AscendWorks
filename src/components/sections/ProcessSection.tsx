"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MagnifyingGlass, Compass, Rocket, TrendUp } from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    icon: MagnifyingGlass,
    title: "Assess",
    subtitle: "Discover What's Holding IT Back",
    description:
      "Review the current platform, workflows, stakeholders, dependencies, and capability gaps with your team.",
    deliverable: "Current-state findings + priorities",
    color: "text-gold",
    borderColor: "border-gold/30",
    edge: "[--glass-edge:rgba(201,168,76,0.30)] [--glass-edge-hover:rgba(201,168,76,0.62)]",
  },
  {
    number: "02",
    icon: Compass,
    title: "Architect",
    subtitle: "Design for Transformation, Not Just Today",
    description:
      "Define platform patterns, integrations, governance, data responsibilities, and sequencing around your constraints.",
    deliverable: "Architecture decisions + delivery plan",
    color: "text-purple",
    borderColor: "border-purple/30",
    edge: "[--glass-edge:rgba(107,79,187,0.30)] [--glass-edge-hover:rgba(107,79,187,0.62)]",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Activate",
    subtitle: "Configure, validate, and prepare",
    description:
      "Deliver in reviewable increments, validate agreed requirements, and involve service owners in acceptance and handover.",
    deliverable: "Validated configuration + team enablement",
    color: "text-teal",
    borderColor: "border-teal/30",
    edge: "[--glass-edge:rgba(13,155,138,0.30)] [--glass-edge-hover:rgba(13,155,138,0.62)]",
  },
  {
    number: "04",
    icon: TrendUp,
    title: "Accelerate",
    subtitle: "Sustain the Gains",
    description:
      "Agree operational ownership, review adoption against your baseline, and prioritize the next round of platform improvement.",
    deliverable: "Ownership model + improvement backlog",
    color: "text-gold",
    borderColor: "border-gold/30",
    edge: "[--glass-edge:rgba(201,168,76,0.30)] [--glass-edge-hover:rgba(201,168,76,0.62)]",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-4">
            How We Work
          </span>
          <h2 className="font-display font-800 text-4xl md:text-5xl text-white leading-tight mb-4">
            Four Phases. One{" "}
            <span className="text-gold-gradient">Continuous Arc</span>
          </h2>
          <p className="text-slate text-base leading-relaxed">
            Each phase ends with a decision and an artifact your team can review. Scope, timing, and success measures are agreed for your environment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                className={`glass glass-hover relative flex flex-col p-6 rounded-2xl group ${step.edge}`}
              >
                <span className={`font-display font-800 text-6xl ${step.color} opacity-20 absolute top-4 right-5 leading-none select-none`}>
                  {step.number}
                </span>
                <div className={`w-12 h-12 rounded-xl border ${step.borderColor} flex items-center justify-center mb-5`}>
                  <Icon size={22} weight="duotone" className={step.color} />
                </div>
                <h3 className={`font-display font-800 text-2xl ${step.color} mb-1`}>{step.title}</h3>
                <p className="text-white font-600 text-sm mb-3 leading-snug">{step.subtitle}</p>
                <p className="text-slate text-sm leading-relaxed flex-1 mb-5">{step.description}</p>
                <div className={`pt-4 border-t ${step.borderColor}`}>
                  <p className="text-xs text-slate uppercase tracking-wider mb-1">Deliverable</p>
                  <p className={`text-sm font-600 ${step.color}`}>{step.deliverable}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-navy-mid/90 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <span className="text-slate text-xs">→</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
