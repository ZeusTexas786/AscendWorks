"use client";

import { submitContactForm, CONTACT_EMAIL } from "@/lib/contact";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MapPin, Clock, Briefcase, Users, Star, ArrowRight, CheckCircle,
  X, CaretRight, MagnifyingGlass, Funnel, ChartBar, Certificate,
  CalendarBlank, SealCheck, Lightning, ArrowUpRight, EnvelopeSimple,
  UserCircle, Phone, FileText, PaperPlaneTilt, Buildings, Laptop,
  Timer, CurrencyDollar, Handshake, ArrowsClockwise,
} from "@phosphor-icons/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ─── JOB DATA ───────────────────────────────────────────────────────────────

interface Job {
  id: string;
  title: string;
  area: string;
  location: string;
  type: string;
  duration: string;
  experience: string;
  positions: number;
  eligibility: string;
  skills: string[];
  clientType: string;
  urgency: "Urgent" | "Active" | "Open";
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  certifications: string[];
  accentColor: string;
  bgGlow: string;
}

const jobs: Job[] = [
  {
    id: "s2p-architect",
    title: "ServiceNow S2P Technical Consultant / Solution Architect",
    area: "Source-to-Pay",
    location: "Remote",
    type: "Contract / Corp-to-Corp",
    duration: "6+ months",
    experience: "12+ years",
    positions: 1,
    eligibility: "Open",
    skills: ["S2P", "PSM", "Flow Designer", "Agentic AI", "Now Assist", "SPO", "SLO", "APO", "Integration Hub"],
    clientType: "BFSI",
    urgency: "Active",
    posted: "Just posted",
    summary:
      "Our BFSI client is looking for a ServiceNow S2P Technical Consultant / Lead / Solution Architect to lead the design and implementation of ServiceNow's Source-to-Pay suite. You will be responsible for transforming complex procurement landscapes into streamlined, AI-driven workflows. This is not just a technical role — you are a strategic partner who bridges the gap between Finance and Procurement stakeholders and technical delivery teams to eliminate shadow spend and maximize ROI.",
    responsibilities: [
      "Lead end-to-end architectural design for Sourcing & Procurement Operations (SPO), Supplier Lifecycle Operations (SLO), and Accounts Payable Operations (APO)",
      "Design seamless integrations between ServiceNow and Tier-1 ERPs (SAP S/4HANA, Oracle, or Workday) using Integration Hub and customized APIs",
      "Incorporate Agentic AI and Now Assist capabilities to automate spot-buying, invoice exception handling, and supplier risk assessments",
      "Facilitate workshops with C-suite and Procurement leaders to translate business KPIs into technical requirements",
      "Establish best practices for the Common Service Data Model (CSDM) to ensure procurement data supports enterprise-wide visibility",
      "Configure Flow Designer, Business Rules, Client Scripts, and the ServiceNow Portal (Employee Center) for procurement workflows",
      "Design governance frameworks for the full procurement lifecycle: PR to PO, Goods Receipt, Invoicing, and Supplier Risk",
    ],
    requirements: [
      "7+ years of experience in the ServiceNow ecosystem, with at least 3 years focused specifically on Procurement Service Management (PSM) or S2P",
      "Deep understanding of Flow Designer, Business Rules, Client Scripts, and the ServiceNow Portal (Employee Center)",
      "Strong knowledge of the procurement lifecycle: PR to PO, Goods Receipt, Invoicing, and Supplier Risk",
      "Experience implementing AI-driven automation or generative AI features within the ServiceNow platform",
      "Ability to articulate technical complexity through a business-value lens — cycle time, compliance, and cost savings",
      "Prior experience in a high-growth technology staffing or consulting environment",
      "Corp-to-Corp engagement only",
    ],
    certifications: [
      "ServiceNow Certified System Administrator (CSA)",
      "Certified Implementation Specialist (CIS) – Procurement or Supplier Lifecycle Management",
      "Now Assist or Agentic AI specialization preferred",
    ],
    accentColor: "text-orange",
    bgGlow: "from-orange/15 to-transparent",
  },
  {
    id: "ai-control-tower",
    title: "ServiceNow AI Control Tower Architect",
    area: "AI & Automation",
    location: "Remote",
    type: "Contract / Corp-to-Corp",
    duration: "Long-term",
    experience: "15+ years",
    positions: 1,
    eligibility: "Open",
    skills: ["AI/ML", "Predictive Intelligence", "ITOM", "CMDB", "Process Automation", "NLU"],
    clientType: "Fortune 1000",
    urgency: "Urgent",
    posted: "2 days ago",
    summary:
      "Our Fortune 1000 client is looking for a seasoned ServiceNow AI Control Tower Architect to own the full AI/ML lifecycle on their ServiceNow platform. You'll be the internal expert responsible for managing all AI models, datasets, and algorithms integrated into the platform — from Predictive Intelligence to NLU to process automation. This is not a generalist role. The client needs someone who has done this before at enterprise scale.",
    responsibilities: [
      "Configure and manage ServiceNow Predictive Intelligence models for incident routing, problem detection, and auto-resolution",
      "Integrate external ML models and AI datasets into ServiceNow via integration hub and REST APIs",
      "Implement AI-driven recommendations across ITSM, ITOM, and HRSD workflows",
      "Build and maintain the AI Control Tower dashboard — monitoring model health, drift, accuracy, and retraining schedules",
      "Define governance frameworks for AI model versioning, rollback, and compliance documentation",
      "Collaborate with data engineering and platform architecture teams on data pipeline design",
      "Conduct performance reviews of deployed models and lead retraining cycles",
      "Train and mentor platform teams on AI capabilities and responsible AI practices",
    ],
    requirements: [
      "15+ years of ServiceNow platform experience, with 5+ years focused on AI/ML features",
      "Deep hands-on expertise in ServiceNow Predictive Intelligence and NLU",
      "Experience deploying AI models in ITOM, ITSM, and HRSD contexts",
      "Strong understanding of ML model lifecycle: training, validation, deployment, monitoring",
      "Proficiency with ServiceNow IntegrationHub, Flow Designer, and REST API integrations",
      "Prior enterprise-scale AI/automation delivery with measurable outcomes",
      "Experience in Fortune 1000 or large enterprise environments",
    ],
    certifications: [
      "ServiceNow Certified Implementation Specialist (CIS)",
      "ServiceNow Certified Application Developer (CAD)",
      "Predictive Intelligence or AI specialization preferred",
      "ITIL v4 Foundation",
    ],
    accentColor: "text-purple",
    bgGlow: "from-purple/15 to-transparent",
  },
  {
    id: "fsm-architect",
    title: "ServiceNow FSM Architect",
    area: "Field Service",
    location: "Remote",
    type: "Contract / Corp-to-Corp",
    duration: "12+ months",
    experience: "15+ years",
    positions: 1,
    eligibility: "Open",
    skills: ["FSM", "CSM", "CDM", "SPM", "ITSM", "EAM"],
    clientType: "Fortune 1000",
    urgency: "Active",
    posted: "1 week ago",
    summary:
      "A Fortune 1000 client in the BFSI, Manufacturing, and Healthcare sector is seeking a ServiceNow FSM Architect with deep multi-domain experience. The role requires hands-on expertise across Field Service Management, Customer Service Management, Clinical Device Management, Strategic Portfolio Management, and Enterprise Asset Management. If you've designed and delivered FSM solutions that operate at scale across regulated industries, we want to talk.",
    responsibilities: [
      "Lead end-to-end FSM architecture design, configuration, and deployment for enterprise client",
      "Integrate FSM with CSM for unified customer-facing service operations",
      "Design Clinical Device Management workflows within ServiceNow's healthcare framework",
      "Implement Strategic Portfolio Management for capital project and asset lifecycle visibility",
      "Configure Enterprise Asset Management for physical asset tracking and maintenance scheduling",
      "Build custom integrations between ServiceNow FSM and client ERP/CRM systems",
      "Develop mobile field technician workflows using ServiceNow Mobile Studio",
      "Own technical documentation, solution design, and client stakeholder presentations",
    ],
    requirements: [
      "15+ years of ServiceNow experience across ITSM, FSM, and CSM",
      "Proven FSM implementations in manufacturing, healthcare, or financial services environments",
      "Strong CSM and CDM configuration experience at enterprise scale",
      "Knowledge of BFSI, Manufacturing, and Healthcare industry compliance requirements",
      "Experience with EAM for physical asset lifecycle management",
      "Ability to lead technical workshops and translate business requirements to platform design",
      "Corp-to-Corp engagement only — W2 not available for this position",
    ],
    certifications: [
      "CIS – Field Service Management",
      "CIS – Customer Service Management",
      "CIS – IT Service Management",
      "ITIL v4 Foundation or Practitioner",
    ],
    accentColor: "text-teal",
    bgGlow: "from-teal/15 to-transparent",
  },
  {
    id: "itam-architect",
    title: "ServiceNow ITAM Architect / Technical Consultant",
    area: "Asset Management",
    location: "Remote",
    type: "Contract / Corp-to-Corp",
    duration: "Long-term",
    experience: "15+ years",
    positions: 1,
    eligibility: "Open",
    skills: ["ITAM", "HAM", "SAM", "CMDB", "Discovery", "Software Asset"],
    clientType: "Fortune 1000",
    urgency: "Active",
    posted: "3 days ago",
    summary:
      "This engagement requires a ServiceNow IT Asset Management Architect or Senior Technical Consultant who can own the full asset lifecycle from discovery through retirement. The client's environment includes a complex CMDB, multi-vendor software estate, and physical hardware spanning multiple data centers. You'll be responsible for both strategic architecture decisions and hands-on configuration. ITAM/HAM specialization is required — this is not a generalist platform role.",
    responsibilities: [
      "Design and implement the end-to-end IT Asset Management lifecycle in ServiceNow",
      "Configure Hardware Asset Management (HAM) for full asset tracking, lifecycle stages, and procurement integration",
      "Implement Software Asset Management (SAM) including license position calculations and true-up automation",
      "Build and maintain CMDB health — including Discovery configuration, CI class management, and reconciliation rules",
      "Integrate ITAM with procurement, finance, and ITSM processes for unified asset visibility",
      "Design asset normalization and deduplication processes for a complex multi-source environment",
      "Build executive dashboards for asset spend, compliance posture, and lifecycle status",
      "Lead data migration from legacy asset management systems into ServiceNow",
    ],
    requirements: [
      "15+ years of IT experience with 8+ years on ServiceNow ITAM/HAM/SAM",
      "Expert-level CMDB design and governance experience",
      "Deep knowledge of ServiceNow Discovery and Service Mapping",
      "Experience managing large software estates with complex licensing (Microsoft, Oracle, SAP)",
      "Strong integration experience with procurement and financial systems",
      "Track record of measurable outcomes: license compliance improvements, cost savings identified",
      "Enterprise environment experience required",
    ],
    certifications: [
      "CIS – IT Asset Management",
      "CIS – Hardware Asset Management",
      "ServiceNow Certified System Administrator (CSA)",
      "IAITAM CAMP or CSAM preferred",
    ],
    accentColor: "text-gold",
    bgGlow: "from-gold/15 to-transparent",
  },
  {
    id: "itsm-architect",
    title: "ServiceNow ITSM Solution Architect",
    area: "ITSM",
    location: "Remote",
    type: "Contract / Corp-to-Corp",
    duration: "12+ months",
    experience: "15+ years",
    positions: 2,
    eligibility: "Open",
    skills: ["ITSM", "CSM", "SPM", "PPM", "CMDB", "ITIL v4"],
    clientType: "Fortune 1000",
    urgency: "Urgent",
    posted: "5 days ago",
    summary:
      "We have two open positions for ServiceNow ITSM Solution Architects for Fortune 1000 client engagements across sectors. These are hands-on solution architecture roles — not advisory. You'll own the design, configuration, and delivery of ITSM implementations that span Incident, Problem, Change, Service Catalog, Knowledge, and CMDB. Multi-module experience across CSM, SPM, and PPM is required for both positions.",
    responsibilities: [
      "Lead solution architecture for complex ITSM transformations across Incident, Problem, Change, and Service Request modules",
      "Design and configure Customer Service Management workflows for integrated service operations",
      "Implement Strategic Portfolio Management aligned to business demand and resource capacity",
      "Build Project Portfolio Management structures for IT initiative governance",
      "Configure and govern CMDB as the authoritative source of truth for service relationships",
      "Design Service Catalog architecture with approval workflows, fulfillment routing, and SLA management",
      "Develop integration architecture connecting ServiceNow ITSM with monitoring, SIEM, and ITSM tools",
      "Produce solution design documentation, data flow diagrams, and go-live readiness assessments",
    ],
    requirements: [
      "15+ years in IT service management with 8+ years on ServiceNow platform",
      "Expert-level ITSM configuration across all core modules",
      "Demonstrated CSM, SPM, and PPM implementation experience at enterprise scale",
      "CMDB governance experience in complex multi-source environments",
      "Strong ITIL v4 knowledge applied to real-world implementation — not theoretical",
      "Experience in regulated industries (financial services, healthcare, or government) a plus",
      "Ability to run client workshops, manage stakeholders, and present to IT leadership",
    ],
    certifications: [
      "CIS – IT Service Management",
      "ServiceNow Certified System Administrator (CSA)",
      "ITIL v4 Foundation, Managing Professional, or Strategic Leader",
      "CMDB/Discovery certification preferred",
    ],
    accentColor: "text-teal",
    bgGlow: "from-teal/10 to-transparent",
  },
  {
    id: "spm-architect",
    title: "ServiceNow SPM Architect",
    area: "Portfolio Management",
    location: "Remote",
    type: "Contract / Corp-to-Corp",
    duration: "12+ months",
    experience: "15+ years",
    positions: 1,
    eligibility: "Open",
    skills: ["SPM", "PPM", "SAFe", "Agile", "CMDB", "Demand Mgmt"],
    clientType: "ServiceNow Partner",
    urgency: "Open",
    posted: "1 week ago",
    summary:
      "A ServiceNow Partner client is looking for an SPM Architect who can design and deliver a mature Strategic Portfolio Management practice on the Now Platform. The role blends enterprise project delivery methodology (SAFe, Agile) with deep ServiceNow SPM/PPM configuration. If you've built demand management pipelines, resource capacity models, and portfolio governance structures on ServiceNow — this is a strong fit.",
    responsibilities: [
      "Architect and configure ServiceNow SPM for demand management, project execution, and portfolio visibility",
      "Implement Project Portfolio Management (PPM) workflows including project intake, prioritization, and stage-gate governance",
      "Configure SAFe Agile delivery structures within ServiceNow — programs, sprints, backlogs, and PI planning boards",
      "Design resource capacity management models with role-based allocation and utilization tracking",
      "Build financial management overlays — budget tracking, actuals integration, and portfolio ROI dashboards",
      "Integrate SPM with ITSM change management for unified IT delivery governance",
      "Configure KPI dashboards for portfolio health, delivery velocity, and resource utilization",
      "Lead stakeholder workshops on SPM governance model and portfolio office operating model",
    ],
    requirements: [
      "15+ years of IT project and portfolio management experience",
      "Deep hands-on ServiceNow SPM and PPM configuration experience",
      "Strong SAFe Agile framework knowledge with practical implementation experience",
      "Ability to translate business portfolio management processes into ServiceNow configuration",
      "Experience building executive-level portfolio dashboards and reporting",
      "Prior experience in ServiceNow Partner or consulting environments preferred",
      "Proven ability to work independently in a fully remote engagement",
    ],
    certifications: [
      "CIS – Strategic Portfolio Management",
      "SAFe Program Consultant (SPC) or equivalent",
      "Project Management Professional (PMP) preferred",
      "ITIL v4 Foundation",
    ],
    accentColor: "text-gold",
    bgGlow: "from-gold/10 to-transparent",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const urgencyConfig = {
  Urgent: { label: "Urgent Hire", dot: "bg-red animate-pulse", ring: "bg-red/10 border-red/30 text-red" },
  Active:  { label: "Actively Hiring", dot: "bg-teal", ring: "bg-teal/10 border-teal/30 text-teal" },
  Open:    { label: "Open", dot: "bg-gold", ring: "bg-gold/10 border-gold/30 text-gold" },
};

// ─── APPLY FORM ──────────────────────────────────────────────────────────────

function ApplyForm({ job }: { job: Job }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
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
      // Never show "Application Received" when nothing was sent.
      setError({ message: result.error, mailto: result.mailto });
    }
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-10 gap-4">
        <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center">
          <CheckCircle size={32} weight="fill" className="text-teal" />
        </div>
        <h3 className="font-display font-700 text-white text-lg">Application Received</h3>
        <p className="text-slate text-sm leading-relaxed max-w-[240px]">
          Our talent team reviews every submission. You'll hear from us within 48 hours if there's a fit.
        </p>
        <button type="button" onClick={() => setSubmitted(false)}
          className="mt-2 text-xs text-gold hover:text-white transition-colors font-600">
          Submit another application
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
      <input type="hidden" name="intent" value="application" />
      <input type="hidden" name="role" value={job.title} />
      {/* Honeypot: hidden from people, irresistible to bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <div className="flex flex-col gap-1.5">
        <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Full Name *</label>
        <div className="relative">
          <UserCircle size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate" />
          <input required type="text" name="fullName" autoComplete="name" placeholder="Jane Smith"
            className="glass-inset w-full rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-slate/60 focus:outline-none focus:border-gold/50 transition-colors" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Email Address *</label>
        <div className="relative">
          <EnvelopeSimple size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate" />
          <input required type="email" name="email" autoComplete="email" placeholder="jane@example.com"
            className="glass-inset w-full rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-slate/60 focus:outline-none focus:border-gold/50 transition-colors" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Phone Number</label>
        <div className="relative">
          <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate" />
          <input type="tel" name="phone" autoComplete="tel" placeholder="+1 (555) 000-0000"
            className="glass-inset w-full rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-slate/60 focus:outline-none focus:border-gold/50 transition-colors" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-slate-light text-xs font-600 uppercase tracking-wider">LinkedIn Profile</label>
        <div className="relative">
          <ArrowUpRight size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate" />
          <input type="url" name="linkedin" placeholder="linkedin.com/in/yourprofile"
            className="glass-inset w-full rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-slate/60 focus:outline-none focus:border-gold/50 transition-colors" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Years of Experience *</label>
        <select required name="timeline" aria-label="Years of experience"
          className="glass-inset w-full rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none">
          <option value="" className="bg-navy text-slate">Select range</option>
          <option value="5-10" className="bg-navy">5–10 years</option>
          <option value="10-15" className="bg-navy">10–15 years</option>
          <option value="15-20" className="bg-navy">15–20 years</option>
          <option value="20+" className="bg-navy">20+ years</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Relevant Certifications</label>
        <div className="relative">
          <Certificate size={15} className="absolute left-3 top-3.5 text-slate" />
          <textarea rows={2} name="certs" placeholder="e.g. CIS-ITSM, CIS-FSM, ITIL v4..."
            className="glass-inset w-full rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-slate/60 focus:outline-none focus:border-gold/50 transition-colors resize-none" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Resume / Portfolio Link</label>
        <div className="relative">
          <FileText size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate" />
          <input type="url" name="resume" placeholder="Google Drive, Dropbox, or portfolio URL"
            className="glass-inset w-full rounded-xl pl-9 pr-4 py-3 text-white text-sm placeholder:text-slate/60 focus:outline-none focus:border-gold/50 transition-colors" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-slate-light text-xs font-600 uppercase tracking-wider">Brief Message</label>
        <textarea rows={3} name="message" placeholder="Tell us why this role is a fit — specific experience, availability, rate expectations..."
          className="glass-inset w-full rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate/60 focus:outline-none focus:border-gold/50 transition-colors resize-none" />
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
        className="group flex items-center justify-center gap-2 w-full py-4 bg-gold text-navy font-display font-700 text-sm rounded-xl hover:bg-amber-400 transition-all disabled:opacity-60 mt-1">
        {sending ? (
          <><ArrowsClockwise size={15} className="animate-spin" />Submitting…</>
        ) : (
          <><PaperPlaneTilt size={15} weight="fill" />Apply for This Role<ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" /></>
        )}
      </button>
      <p className="text-slate text-[10px] text-center leading-relaxed">
        By submitting you agree to be contacted by our talent team. We never share your information with third parties without consent.
      </p>
    </form>
  );
}

// ─── JOB LIST ITEM ───────────────────────────────────────────────────────────

function JobRow({ job, active, onClick }: { job: Job; active: boolean; onClick: () => void }) {
  const u = urgencyConfig[job.urgency];
  return (
    <button type="button" onClick={onClick}
      className={`group w-full text-left transition-all duration-200 rounded-2xl border p-4 ${
        active
          ? "bg-navy-light border-gold/30 shadow-lg shadow-gold/5"
          : "bg-transparent border-white/8 hover:border-white/20 hover:bg-white/3"
      }`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className={`text-[10px] font-700 uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/5 ${job.accentColor}`}>
              {job.area}
            </span>
            <span className={`inline-flex items-center gap-1.5 text-[10px] font-700 uppercase tracking-wide px-2 py-0.5 rounded-full border ${u.ring}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${u.dot}`} />
              {u.label}
            </span>
          </div>
          <h3 className={`font-display font-700 text-sm leading-snug ${active ? "text-white" : "text-slate-light group-hover:text-white"} transition-colors`}>
            {job.title}
          </h3>
        </div>
        <CaretRight size={14} weight="bold"
          className={`shrink-0 mt-1 transition-all ${active ? "text-gold rotate-90" : "text-slate group-hover:text-slate-light"}`} />
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="flex items-center gap-1 text-[11px] text-slate">
          <MapPin size={10} weight="fill" className="text-slate/60" /> {job.location}
        </span>
        <span className="text-slate/30 text-[11px]">·</span>
        <span className="flex items-center gap-1 text-[11px] text-slate">
          <Timer size={10} weight="fill" className="text-slate/60" /> {job.duration}
        </span>
        <span className="text-slate/30 text-[11px]">·</span>
        <span className="flex items-center gap-1 text-[11px] text-slate">
          <ChartBar size={10} weight="fill" className="text-slate/60" /> {job.experience}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {job.skills.slice(0, 4).map((s) => (
          <span key={s} className="glass-inset text-[10px] px-2 py-0.5 rounded-md text-slate">
            {s}
          </span>
        ))}
        {job.skills.length > 4 && (
          <span className="glass-inset text-[10px] px-2 py-0.5 rounded-md text-slate">
            +{job.skills.length - 4}
          </span>
        )}
      </div>
    </button>
  );
}

// ─── JOB DETAIL PANEL ────────────────────────────────────────────────────────

function JobDetail({ job }: { job: Job }) {
  const u = urgencyConfig[job.urgency];
  return (
    <div className="lg:col-span-7">
      {/* Job header card */}
      <div className={`relative rounded-2xl border border-white/10 bg-navy-light overflow-hidden mb-6`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${job.bgGlow} opacity-40 pointer-events-none`} />
        <div className="relative z-10 p-6 md:p-8">
          {/* Top row */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-[10px] font-700 uppercase tracking-widest px-2.5 py-1 rounded-lg bg-white/8 ${job.accentColor}`}>
                  {job.area}
                </span>
                <span className={`inline-flex items-center gap-1.5 text-[10px] font-700 uppercase tracking-wide px-2.5 py-1 rounded-full border ${u.ring}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${u.dot}`} />
                  {u.label}
                </span>
                <span className="text-slate text-[10px]">Posted {job.posted}</span>
              </div>
              <h2 className="font-display font-800 text-2xl md:text-3xl text-white leading-tight">{job.title}</h2>
            </div>
          </div>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {[
              { icon: MapPin,       label: "Location",    value: job.location },
              { icon: Briefcase,    label: "Engagement",  value: job.type },
              { icon: Timer,        label: "Duration",    value: job.duration },
              { icon: ChartBar,     label: "Experience",  value: job.experience },
              { icon: Users,        label: "Positions",   value: `${job.positions} open` },
              { icon: Buildings,    label: "Client",      value: job.clientType },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col gap-0.5 bg-white/5 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Icon size={12} weight="fill" className="text-slate/60" />
                  <span className="text-slate text-[10px] uppercase tracking-wider">{label}</span>
                </div>
                <span className="text-white font-600 text-sm leading-snug">{value}</span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <p className="text-slate text-[10px] uppercase tracking-wider mb-2">Required Skills</p>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((s) => (
                <span key={s}
                  className={`text-xs font-600 px-3 py-1.5 rounded-xl border bg-white/5 border-white/15 text-white`}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Two-column: Description + Apply Form */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Job description */}
        <div className="lg:col-span-3 space-y-6">
          {/* Summary */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display font-700 text-white text-base mb-3 flex items-center gap-2">
              <Star size={15} weight="fill" className="text-gold" />
              The Role
            </h3>
            <p className="text-slate text-sm leading-relaxed">{job.summary}</p>
          </div>

          {/* Responsibilities */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display font-700 text-white text-base mb-4 flex items-center gap-2">
              <Lightning size={15} weight="fill" className="text-teal" />
              What You&apos;ll Do
            </h3>
            <ul className="space-y-3">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate leading-relaxed">
                  <CheckCircle size={15} weight="fill" className="text-teal shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display font-700 text-white text-base mb-4 flex items-center gap-2">
              <SealCheck size={15} weight="fill" className={job.accentColor} />
              What We Need
            </h3>
            <ul className="space-y-3">
              {job.requirements.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate leading-relaxed">
                  <ArrowRight size={13} weight="bold" className={`${job.accentColor} shrink-0 mt-0.5`} />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="glass rounded-2xl p-6">
            <h3 className="font-display font-700 text-white text-base mb-4 flex items-center gap-2">
              <Certificate size={15} weight="fill" className="text-gold" />
              Certifications
            </h3>
            <ul className="space-y-2">
              {job.certifications.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sticky apply form */}
        <div className="lg:col-span-2">
          <div className="sticky top-24">
            <div className="glass rounded-2xl overflow-hidden [--glass-edge:rgba(201,168,76,0.32)]">
              <div className="bg-gradient-to-r from-gold/10 to-transparent px-6 pt-6 pb-4 border-b border-white/8">
                <h3 className="font-display font-700 text-white text-base mb-0.5">Apply Now</h3>
                <p className="text-slate text-xs">Our talent team responds within 48 hours</p>
              </div>
              <div className="p-5">
                <ApplyForm job={job} />
              </div>
            </div>

            {/* Quick contact */}
            <div className="glass mt-4 rounded-2xl p-5">
              <p className="text-white font-600 text-sm mb-1">Have a quick question?</p>
              <p className="text-slate text-xs mb-4 leading-relaxed">
                Reach our talent team directly before applying.
              </p>
              <Link href="mailto:talent@ascendworksnow.com"
                className="flex items-center gap-2 text-gold hover:text-white text-sm font-600 transition-colors">
                <EnvelopeSimple size={14} weight="fill" />
                talent@ascendworksnow.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

// ─── PARTICLE NETWORK CANVAS ─────────────────────────────────────────────────

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const W = canvas.width;
    const H = canvas.height;
    const PARTICLE_COUNT = 70;
    const MAX_DIST = 150;

    type Particle = {
      x: number; y: number; vx: number; vy: number;
      radius: number; phase: number; speed: number;
    };

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 0.8,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.012 + 0.006,
    }));

    let raf: number;
    let frame = 0;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, W, H);
      frame++;

      for (const p of particles) {
        // Mouse attraction
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += (dx / dist) * 0.012;
          p.vy += (dy / dist) * 0.012;
        }

        // Cap speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.2) { p.vx *= 0.96; p.vy *= 0.96; }

        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // Draw node with pulse
        const pulse = 0.5 + 0.5 * Math.sin(frame * p.speed + p.phase);
        const alpha = 0.25 + 0.2 * pulse;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + pulse * 0.8, 0, Math.PI * 2);
        // Gold/teal alternating by index
        const isGold = particles.indexOf(p) % 3 !== 2;
        ctx.fillStyle = isGold
          ? `rgba(188,181,111,${alpha})`
          : `rgba(17,174,174,${alpha})`;
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const opacity = (1 - d / MAX_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(188,181,111,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const cleanup = animate();
    const onMove = (e: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) { mouse.current.x = e.clientX - rect.left; mouse.current.y = e.clientY - rect.top; }
    };
    window.addEventListener("mousemove", onMove);
    return () => { cleanup?.(); window.removeEventListener("mousemove", onMove); };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
      aria-hidden="true"
    />
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function CareersClient() {
  const [activeJob, setActiveJob] = useState<Job>(jobs[0]);
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");
  const detailRef = useRef<HTMLDivElement>(null);

  const areas = ["All", ...Array.from(new Set(jobs.map((j) => j.area)))];

  const filtered = jobs.filter((j) => {
    const matchArea = filter === "All" || j.area === filter;
    const q = search.toLowerCase();
    const matchSearch = !q || j.title.toLowerCase().includes(q) || j.skills.some((s) => s.toLowerCase().includes(q)) || j.area.toLowerCase().includes(q);
    return matchArea && matchSearch;
  });

  function selectJob(job: Job) {
    setActiveJob(job);
    if (window.innerWidth < 1024 && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-16 overflow-hidden mesh-bg grain">
          <ParticleCanvas />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-gold/8 blur-[140px]" />
            <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-teal/6 blur-[100px]" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
              <defs><pattern id="cgrid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern></defs>
              <rect width="100%" height="100%" fill="url(#cgrid)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5">
              <span className="inline-block px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-600 uppercase tracking-widest">
                We&apos;re Hiring
              </span>
              <span className="text-slate text-xs">{jobs.length} active positions</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="font-display font-800 text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-5 max-w-3xl">
              The Work Is Demanding.<br />
              <span className="text-gold">So Is Our Standard.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-light text-lg leading-relaxed max-w-xl mb-10">
              We place elite ServiceNow architects with Fortune 1000 clients. These are not entry-level roles.
              If you&apos;ve built and delivered at enterprise scale — you belong here.
            </motion.p>
            {/* Stats bar */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 border-t border-white/10 pt-8">
              {[
                { icon: Laptop,         value: "100% Remote",    label: "All positions" },
                { icon: CurrencyDollar, value: "Corp-to-Corp",   label: "Engagement type" },
                { icon: Timer,          value: "12+ months",     label: "Avg. duration" },
                { icon: Handshake,      value: "48 hr",          label: "Response time" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Icon size={14} weight="fill" className="text-gold" />
                  </div>
                  <div>
                    <div className="text-white font-700 text-sm leading-none">{value}</div>
                    <div className="text-slate text-[11px]">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── JOB BOARD ─────────────────────────────────────────────────── */}
        <section className="section-light py-14 lg:py-20 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {/* Search */}
              <div className="relative flex-1 max-w-sm">
                <MagnifyingGlass size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/40" />
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title or skill…"
                  className="glass-inset-light w-full pl-9 pr-4 py-2.5 rounded-xl text-navy text-sm placeholder:text-navy/35 focus:outline-none focus:border-gold/50 transition-colors" />
              </div>
              {/* Area filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <Funnel size={14} className="text-navy/40" />
                {areas.map((a) => (
                  <button type="button" key={a} onClick={() => setFilter(a)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-600 transition-all border ${
                      filter === a
                        ? "bg-navy text-white border-navy"
                        : "bg-white text-navy/60 border-navy/15 hover:border-navy/30 hover:text-navy"
                    }`}>
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Split layout */}
            <div className="grid lg:grid-cols-12 gap-6 items-start">

              {/* Left: Job list */}
              <div className="lg:col-span-4 xl:col-span-4">
                <div className="sticky top-24 space-y-2.5">
                  <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-navy/10">
                    <div>
                      <p className="text-[10px] font-700 uppercase tracking-widest text-navy leading-none mb-1">
                        Open Positions
                      </p>
                      <p className="font-display font-800 text-navy text-xl leading-none">
                        {filtered.length}
                        <span className="font-400 text-sm text-navy/50 ml-1">
                          {filtered.length !== 1 ? "roles" : "role"} available
                        </span>
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red/8 border border-red/20 text-red text-[10px] font-700 uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
                      Hiring Now
                    </span>
                  </div>
                  {filtered.length === 0 ? (
                    <div className="flex flex-col items-center py-12 text-center">
                      <MagnifyingGlass size={28} className="text-navy/20 mb-3" />
                      <p className="text-navy/40 text-sm">No roles match your search.</p>
                    </div>
                  ) : (
                    filtered.map((job) => (
                      <JobRow key={job.id} job={job} active={activeJob?.id === job.id}
                        onClick={() => selectJob(job)} />
                    ))
                  )}
                </div>
              </div>

              {/* Right: Detail */}
              <div ref={detailRef} className="lg:col-span-8 xl:col-span-8">
                <AnimatePresence mode="wait">
                  {!activeJob ? (
                    <motion.div key="placeholder"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                      className="glass-light hidden lg:flex flex-col items-center justify-center min-h-[480px] rounded-3xl text-center p-12">
                      <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-5">
                        <Briefcase size={28} weight="duotone" className="text-navy/30" />
                      </div>
                      <h3 className="font-display font-700 text-navy text-lg mb-2">Select a role to view details</h3>
                      <p className="text-navy/40 text-sm max-w-xs leading-relaxed">
                        Click any position on the left to see the full job description and apply online.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div key={activeJob.id}
                      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                      <div className="bg-navy rounded-3xl p-5 md:p-6">
                        <JobDetail job={activeJob} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY JOIN CTA ──────────────────────────────────────────────── */}
        <section className="section-dark py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-5 mb-14">
              {[
                {
                  icon: Lightning,
                  color: "text-gold",
                  bg: "bg-gold/10",
                  title: "Elite client access",
                  body: "Every engagement is Fortune 1000 or high-growth enterprise. No small shops, no outdated stacks.",
                },
                {
                  icon: Handshake,
                  color: "text-teal",
                  bg: "bg-teal/10",
                  title: "We run a tight process",
                  body: "From first call to contract in under 72 hours when there's a fit. We don't waste your time.",
                },
                {
                  icon: SealCheck,
                  color: "text-purple",
                  bg: "bg-purple/10",
                  title: "Long-term relationships",
                  body: "Most of our contractors come back. We get to know your work and match you to roles where you'll thrive.",
                },
              ].map(({ icon: Icon, color, bg, title, body }) => (
                <div key={title} className="glass flex flex-col gap-4 p-6 rounded-2xl">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
                    <Icon size={20} weight="fill" className={color} />
                  </div>
                  <h3 className="font-display font-700 text-white text-base">{title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-slate text-sm mb-4">Don&apos;t see a match? We're always scouting senior ServiceNow talent.</p>
              <Link href="mailto:talent@ascendworksnow.com"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-display font-700 text-sm rounded-xl hover:bg-amber-400 transition-all">
                <EnvelopeSimple size={15} weight="fill" />
                Send us your profile
                <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
