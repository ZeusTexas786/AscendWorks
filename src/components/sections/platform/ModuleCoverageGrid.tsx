"use client";

import { motion } from "framer-motion";
import {
  Lifebuoy,
  UsersThree,
  Headset,
  ShieldCheck,
  Scales,
  Package,
  Wrench,
  TreeStructure,
  Sparkle,
  Layout,
} from "@phosphor-icons/react";

const modules = [
  { name: "ITSM", Icon: Lifebuoy, blurb: "Incident, problem, and change that resolve themselves more often than not." },
  { name: "HRSD", Icon: UsersThree, blurb: "Employee journeys with AI triage from day-one onboarding onward." },
  { name: "CSM", Icon: Headset, blurb: "Customer workflows with deflection tuned to protect CSAT." },
  { name: "SecOps", Icon: ShieldCheck, blurb: "Security response wired directly to your detection stack." },
  { name: "GRC / IRM", Icon: Scales, blurb: "Risk and compliance evidence collected continuously, not quarterly." },
  { name: "ITAM", Icon: Package, blurb: "Hardware and software assets reconciled against reality." },
  { name: "FSM", Icon: Wrench, blurb: "Field dispatch optimized by workload, skills, and territory." },
  { name: "CMDB", Icon: TreeStructure, blurb: "A configuration graph you can trust for impact analysis." },
  { name: "AI & Now Assist", Icon: Sparkle, blurb: "Copilot and agentic AI enabled with governance from day one." },
  { name: "Service Portal", Icon: Layout, blurb: "Portals employees choose to use — measured, not assumed." },
];

export default function ModuleCoverageGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {modules.map((mod, i) => (
        <motion.div
          key={mod.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: (i % 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="glass glass-hover rounded-2xl p-5"
        >
          <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
            <mod.Icon size={22} weight="duotone" className="text-gold" />
          </span>
          <h3 className="font-display font-700 text-white">{mod.name}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-slate">{mod.blurb}</p>
        </motion.div>
      ))}
    </div>
  );
}
