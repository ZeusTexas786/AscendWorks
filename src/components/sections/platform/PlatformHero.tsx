"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import AgentPipelineDiagram from "@/components/visuals/AgentPipelineDiagram";

export default function PlatformHero() {
  return (
    <section className="mesh-bg relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest mb-5">
            Our Delivery Platform
          </span>
          <h1 className="font-display font-800 text-4xl md:text-6xl text-white leading-[1.06] tracking-tight mb-6">
            <span className="text-gold-gradient">AscendOS</span> — the AI delivery engine
            behind AscendWorksNow
          </h1>
          <p className="text-slate-light text-lg leading-relaxed">
            Most consultancies sell you hours. We built a platform that removes the hours worth
            removing. AscendOS is our orchestration layer: a fleet of specialized AI agents that
            plan, build, test, document, and operate ServiceNow — coordinated by the platform,
            governed by our architects.
          </p>
          <p className="mt-4 text-slate text-base leading-relaxed">
            Delivery timelines depend on scope, integrations, and readiness. The goal is a maintainable platform with documentation tied to the work delivered.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel mt-14 rounded-3xl p-6 lg:p-10"
        >
          <AgentPipelineDiagram />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-6 py-3 bg-gold text-navy font-display font-700 text-sm rounded-xl hover:bg-gold-light transition-all duration-200"
          >
            See AscendOS live
            <ArrowRight size={15} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/solutions/ai-control-tower"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/25 text-white font-600 text-sm hover:bg-white/5 transition-colors"
          >
            What we build with it
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
