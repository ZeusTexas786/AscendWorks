"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const industries = [
  {
    title: "Healthcare & Life Sciences",
    description:
      "HIPAA-compliant ServiceNow deployments that streamline care operations, reduce IT downtime, and accelerate EHR integration.",
    stat: "30% reduction in clinical IT tickets",
    href: "/industries/healthcare",
    gradient: "from-teal/15 to-transparent",
    border: "border-teal/20 hover:border-teal/50",
    tag: "Healthcare",
  },
  {
    title: "Financial Services & Banking",
    description:
      "SOX and PCI-DSS aligned platforms that automate compliance workflows, reduce audit prep time, and manage vendor risk at scale.",
    stat: "50% faster audit cycle",
    href: "/industries/financial",
    gradient: "from-gold/15 to-transparent",
    border: "border-gold/20 hover:border-gold/50",
    tag: "FinServ",
  },
  {
    title: "Energy & Utilities",
    description:
      "Asset management, work order automation, and emergency response workflows for regulated energy providers.",
    stat: "25% OpEx reduction reported",
    href: "/industries/energy",
    gradient: "from-gold/15 to-transparent",
    border: "border-gold/20 hover:border-gold/50",
    tag: "Energy",
  },
  {
    title: "Technology & Media",
    description:
      "DevOps integration, change management automation, and platform scaling for high-velocity tech organizations.",
    stat: "3× faster change approval",
    href: "/industries/technology",
    gradient: "from-purple/15 to-transparent",
    border: "border-purple/20 hover:border-purple/50",
    tag: "Technology",
  },
];

export default function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-navy/8 text-navy text-xs font-600 uppercase tracking-widest mb-4">
            Industries
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-800 text-4xl md:text-5xl text-navy leading-tight max-w-xl">
              Industries. Wired for{" "}
              <span className="text-navy relative">
                What Comes Next
                <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-gold" />
              </span>
            </h2>
            <p className="text-navy/60 text-base max-w-md leading-relaxed">
              Deep domain expertise means we understand your regulatory landscape,
              operational constraints, and competitive pressures before writing a
              single line of configuration.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <Link
                href={industry.href}
                className={`group flex flex-col h-full p-6 rounded-2xl border bg-gradient-to-br ${industry.gradient} bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${industry.border}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-navy/8 text-navy/60 text-xs font-600 uppercase tracking-wider">
                    {industry.tag}
                  </span>
                </div>
                <h3 className="font-display font-700 text-lg text-navy leading-snug mb-3">
                  {industry.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed flex-1 mb-5">
                  {industry.description}
                </p>
                <div className="pt-4 border-t border-navy/8 flex items-center justify-between">
                  <span className="text-xs font-600 text-navy/50">{industry.stat}</span>
                  <span className="flex items-center gap-1 text-sm font-600 text-navy group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={13} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
