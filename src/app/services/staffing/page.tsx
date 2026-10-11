import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Talent & IT Staffing | AscendWorksNow",
  description:
    "Certified ServiceNow engineers, architects, and project managers embedded in your team and available in 72 hours. 500+ vetted professionals.",
};

const data: ServicePageData = {
  category: "Talent & IT Staffing",
  headline: "Certified Engineers\nin 72 Hours. Guaranteed.",
  subheadline:
    "ServiceNow talent is scarce. Vetted ServiceNow talent is scarcer. We've spent years building and qualifying a network of 500+ certified professionals so your transformation doesn't wait on a six-month hiring cycle.",
  heroStats: [
    { value: "72 hrs", label: "Average placement time" },
    { value: "500+", label: "Vetted engineers" },
    { value: "95%", label: "First-placement success rate" },
  ],

  problemHeading: "The Wrong Resource at the Right Rate Is Still the Wrong Decision.",
  problemBody:
    "We've seen what happens when organizations compromise on role fit to fill a position quickly. Misaligned experience can create rework later in delivery, when teams have less room to adjust.",
  painPoints: [
    {
      iconName: "Clock",
      title: "Transformation programs blocked on headcount",
      description:
        "A ServiceNow implementation without the right architect can create avoidable rework. Staffing plans should reflect the role, delivery schedule, and technical context.",
    },
    {
      iconName: "MagnifyingGlass",
      title: "Certifications that don't reflect real capability",
      description:
        "The ServiceNow certification ecosystem is wide. A Certified System Administrator and a seasoned Implementation Specialist have the same badge category and different orders of magnitude of impact. We know the difference.",
    },
    {
      iconName: "Warning",
      title: "Contractors who need managing instead of executing",
      description:
        "A contractor who requires constant direction from your team isn't extending your capacity — they're consuming it. The right resource executes independently and raises the right questions without being asked.",
    },
  ],

  capabilitiesHeading: "The Right Person. The Right Role. Placed Fast.",
  capabilitiesBody:
    "Every professional in our network has been through a technical qualification process — not a résumé screen. We know what they've built, how they work, and whether they'll fit your environment before we make an introduction.",
  capabilities: [
    {
      iconName: "Users",
      title: "ServiceNow Architects & Developers",
      description:
        "Certified architects with deep module specializations — ITSM, ITOM, HRSD, CSM, SecOps, App Engine. Staff augmentation or project-based, depending on your engagement model.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Briefcase",
      title: "Project & Program Managers",
      description:
        "ServiceNow-experienced PMs who can run a deployment timeline, manage vendor relationships, and communicate status to your C-suite — without needing the technical team to translate.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "ArrowsCounterClockwise",
      title: "Platform Administrators",
      description:
        "Certified System Administrators for day-to-day platform support, upgrade management, and operational maintenance — available on a part-time, full-time, or on-demand basis.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
    {
      iconName: "ShieldCheck",
      title: "Security & Compliance Specialists",
      description:
        "Engineers with hands-on experience in HIPAA, SOX, PCI-DSS, and FedRAMP ServiceNow environments — for organizations where compliance depth is non-negotiable.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "ChartBar",
      title: "Business Analysts & Reporting Leads",
      description:
        "ServiceNow-fluent BAs and reporting specialists who translate business requirements into platform configuration — reducing the back-and-forth that delays every sprint.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "Handshake",
      title: "Embedded Team Model",
      description:
        "For larger transformations, we place a complete embedded team — architect, developer, PM, and BA — who operate as an extension of your organization, not a separate vendor track.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
  ],

  processHeading: "How We Place the Right Person in 72 Hours.",
  processBody:
    "Speed without quality is just a faster way to make the wrong hire. Our process moves fast because the qualification work is done before you call us, not after.",
  processSteps: [
    {
      number: "01",
      title: "Brief",
      subtitle: "Day 1: Role requirements, environment context",
      description:
        "A 30-minute call. We learn the technical requirements, the project context, the team dynamic, and the timeline. The more specific you are, the faster and better the match.",
      deliverable: "Qualified shortlist within 24 hours",
      color: "text-teal",
      borderColor: "border-teal/30",
      bgColor: "bg-teal/5",
    },
    {
      number: "02",
      title: "Match",
      subtitle: "Day 1–2: Network search, technical qualification",
      description:
        "We search against our pre-qualified network first. If we don't have an exact match, we identify the closest fit and verify their availability before presenting them to you.",
      deliverable: "Two to three pre-qualified candidates",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
    {
      number: "03",
      title: "Validate",
      subtitle: "Day 2–3: Your interview, our guarantee",
      description:
        "You interview and select. We provide reference context from our direct experience with the candidate — not from references they curated. If the placement doesn't work, we replace at no charge.",
      deliverable: "Selected candidate, placement guarantee",
      color: "text-purple",
      borderColor: "border-purple/30",
      bgColor: "bg-purple/5",
    },
    {
      number: "04",
      title: "Deploy",
      subtitle: "Day 3–4: Onboarding, performance accountability",
      description:
        "The resource is onboarded and productive within 72 hours. We stay accountable for performance through monthly check-ins — not just at the 90-day mark when it's too late to course-correct.",
      deliverable: "Active resource, 30/60/90 performance reviews",
      color: "text-teal",
      borderColor: "border-teal/30",
      bgColor: "bg-teal/5",
    },
  ],

  outcomeHeading: "What Our Clients See.",
  outcomeBody:
    "Placement metrics from active staffing engagements across the last 24 months, measured at 90 days post-placement.",
  outcomeStats: [
    { value: "72 hrs", label: "Average time to placement", color: "text-teal" },
    { value: "95%", label: "First-placement success rate", color: "text-gold" },
    { value: "500+", label: "Pre-vetted professionals", color: "text-teal" },
    { value: "< 48 hrs", label: "Replacement if needed", color: "text-purple" },
  ],
};

export default function TalentStaffingPage() {
  return <ServicePage data={data} />;
}
