"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Lightning,
  Brain,
  Gear,
  Buildings,
  Users,
  ChartBar,
} from "@phosphor-icons/react";

const services = [
  {
    icon: Gear,
    title: "ServiceNow Implementation",
    tag: "Core Platform",
    description:
      "Plan and deliver ServiceNow capabilities around your operating model—from process design and configuration through testing, launch, and adoption.",
    focus: "ITSM · ITOM · HRSD · CSM · SecOps",
    color: "from-gold/20 to-transparent",
    fringe: "[--lg-fringe-a:rgba(201,168,76,0.70)] [--lg-fringe-b:rgba(226,192,108,0.45)]",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    href: "/services/servicenow",
  },
  {
    icon: Brain,
    title: "Agentic AI & Automation",
    tag: "AI-First",
    description:
      "Apply Now Assist and agentic workflows to service operations with clear permissions, human review, and escalation paths.",
    focus: "Now Assist · AI agents · governed automation",
    color: "from-purple/20 to-transparent",
    fringe: "[--lg-fringe-a:rgba(107,79,187,0.65)] [--lg-fringe-b:rgba(13,155,138,0.42)]",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
    href: "/services/agentic-ai",
  },
  {
    icon: Lightning,
    title: "ITSM & Platform Optimization",
    tag: "Optimization",
    description:
      "Find friction in your existing instance, prioritize platform health, and improve the workflows and capabilities teams rely on.",
    focus: "Platform health · CMDB · workflow adoption",
    color: "from-teal/20 to-transparent",
    fringe: "[--lg-fringe-a:rgba(13,155,138,0.65)] [--lg-fringe-b:rgba(107,79,187,0.42)]",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    href: "/services/itsm",
  },
  {
    icon: Buildings,
    title: "Platform Architecture",
    tag: "Enterprise Scale",
    description:
      "Set platform direction with an architecture that accounts for integrations, governance, security, upgrades, and long-term ownership.",
    focus: "Governance · integrations · upgrade strategy",
    color: "from-gold/20 to-transparent",
    fringe: "[--lg-fringe-a:rgba(201,168,76,0.70)] [--lg-fringe-b:rgba(226,192,108,0.45)]",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
    href: "/services/architecture",
  },
  {
    icon: ChartBar,
    title: "Strategic IT Advisory",
    tag: "C-Suite",
    description:
      "Translate executive priorities into a practical platform roadmap, operating model, and investment sequence.",
    focus: "Roadmaps · operating models · investment cases",
    color: "from-purple/20 to-transparent",
    fringe: "[--lg-fringe-a:rgba(107,79,187,0.65)] [--lg-fringe-b:rgba(13,155,138,0.42)]",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
    href: "/services/advisory",
  },
  {
    icon: Users,
    title: "Talent & Staffing",
    tag: "On-Demand",
    description:
      "Add experienced ServiceNow practitioners to your delivery team, with roles and engagement shaped around the work ahead.",
    focus: "Architects · developers · platform teams",
    color: "from-teal/20 to-transparent",
    fringe: "[--lg-fringe-a:rgba(13,155,138,0.65)] [--lg-fringe-b:rgba(107,79,187,0.42)]",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    href: "/services/staffing",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-navy/60">
            ServiceNow expertise
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-800 text-4xl md:text-5xl text-navy leading-tight max-w-xl">
              The platform work behind lasting change.
            </h2>
            <p className="text-navy/60 text-base max-w-md leading-relaxed">
              One accountable partner across strategy, delivery, integrations, and the operating model that keeps ServiceNow useful after go-live.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09, ease: "easeOut" }}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-xl border border-navy/10 bg-white p-6 shadow-[0_1px_2px_rgba(10,22,40,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_12px_32px_rgba(10,22,40,0.09)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center`}>
                      <Icon size={22} weight="duotone" className={service.iconColor} />
                    </div>
                    <span className="text-xs font-600 text-navy/60 uppercase tracking-wider pt-1">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-700 text-lg text-navy mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed flex-1 mb-5">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-navy/8">
                    <p className="mb-3 text-xs font-medium text-navy/55">{service.focus}</p>
                    <span className="flex items-center gap-1 text-sm font-600 text-navy group-hover:gap-2 transition-all">
                      Explore Service{" "}
                      <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
