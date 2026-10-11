"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Discover",
    description:
      "Agents interview stakeholders asynchronously, mine your existing instance, and assemble a requirements baseline in days rather than weeks of workshops.",
    agents: "Instance analysis, requirement drafting, gap detection",
    humans: "Stakeholder alignment, scope decisions",
  },
  {
    step: 2,
    title: "Design & Build",
    description:
      "Architecture is decided by people. Configuration and code are generated against approved patterns, then reviewed and versioned like any other change.",
    agents: "Config generation, code drafts, pattern enforcement",
    humans: "Architecture, integration design, code review",
  },
  {
    step: 3,
    title: "Test",
    description:
      "Every story ships with generated ATF coverage. Regression suites run on each change instead of once before go-live.",
    agents: "Test generation, regression execution, defect triage",
    humans: "UAT facilitation, acceptance sign-off",
  },
  {
    step: 4,
    title: "Document",
    description:
      "Runbooks and admin guides are produced from the actual build history — current on day one, not reconstructed months later.",
    agents: "Docs drafted from real configuration and history",
    humans: "Editorial review, knowledge transfer",
  },
  {
    step: 5,
    title: "Deploy",
    description:
      "Staged deployment with automated readiness checks, followed by 90 days of post-go-live optimization.",
    agents: "Readiness checks, monitoring, tuning suggestions",
    humans: "Go/no-go call, hypercare leadership",
  },
];

export default function DeliveryLifecycle() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl">
      {/* progress rail */}
      <div aria-hidden="true" className="absolute left-[19px] top-2 bottom-2 w-px bg-white/15">
        <motion.div
          className="h-full w-[3px] -ml-px rounded bg-gradient-to-b from-gold via-gold-light to-teal origin-top"
          style={reduced ? { scaleY: 1 } : { scaleY: railScale }}
        />
      </div>

      <ol className="space-y-8">
        {steps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex gap-6"
          >
            <div
              aria-hidden="true"
              className="z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 bg-navy font-display text-sm font-700 text-white"
            >
              {step.step}
            </div>

            <div className="glass flex-1 rounded-2xl p-6">
              <h3 className="font-display font-700 text-xl text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.description}</p>

              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-[11px] font-600 uppercase tracking-widest text-gold">
                    Agents handle
                  </dt>
                  <dd className="mt-1.5 text-sm text-slate-light">{step.agents}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-600 uppercase tracking-widest text-teal">
                    Humans own
                  </dt>
                  <dd className="mt-1.5 text-sm text-slate-light">{step.humans}</dd>
                </div>
              </dl>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
