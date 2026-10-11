import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "ITSM & Platform Optimization | AscendWorksNow",
  description:
    "Improve an existing ServiceNow environment through a focused review of workflows, adoption, CMDB quality, configuration, and platform health.",
};

const data: ServicePageData = {
  category: "ITSM & Platform Optimization",
  headline: "Make your ServiceNow investment work harder.",
  subheadline:
    "Review an existing ServiceNow environment with the people who run it. Identify friction across workflows, adoption, CMDB quality, and configuration, then prioritize improvements around your operational goals.",
  heroStats: [
    { value: "Workflows", label: "Review service operations" },
    { value: "Adoption", label: "Understand the user experience" },
    { value: "Platform health", label: "Prioritize sustainable changes" },
  ],

  problemHeading: "A platform needs attention after go-live.",
  problemBody:
    "Configuration, integrations, user needs, and business priorities change over time. A structured review helps identify where workflows need attention and which platform changes deserve to come first.",
  painPoints: [
    {
      iconName: "CurrencyDollar",
      title: "Licensing costs without licensing value",
      description:
        "ServiceNow is one of the largest line items in enterprise IT spend. When the platform is underutilized, every renewal cycle is a hard conversation with the CFO — and you're defending spend you can't fully justify.",
    },
    {
      iconName: "ChartLineDown",
      title: "Incident volumes that won't come down",
      description:
        "Review routing, prioritization, knowledge, and automation against the service experience teams need today.",
    },
    {
      iconName: "UsersThree",
      title: "Adoption that stalled after go-live",
      description:
        "Understand where employees encounter friction in the portal, request flows, knowledge, and support experience.",
    },
  ],

  capabilitiesHeading: "We Go Deep Where It Matters.",
  capabilitiesBody:
    "Review the platform with your service owners, agree priorities, and deliver changes in increments that can be validated against your needs.",
  capabilities: [
    {
      iconName: "MagnifyingGlass",
      title: "Platform Health Audit",
      description:
        "Review configuration, workflows, data quality, integrations, and platform health to identify areas for investigation and improvement.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Lightning",
      title: "Workflow & Automation Optimization",
      description:
        "Business rules, flow designer workflows, and SLA logic reviewed and rebuilt for your current operational reality — not the version of your business that existed at implementation.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "ChartBar",
      title: "Reporting & KPI Alignment",
      description:
        "Most ServiceNow dashboards report activity, not outcomes. We rebuild reporting around the metrics your leadership actually asks about — MTTR, cost per ticket, first-call resolution.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
    {
      iconName: "Users",
      title: "Adoption & Utilization Programs",
      description:
        "Shape enablement around roles and real workflows, and gather feedback from the people who use the platform.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Gear",
      title: "CMDB Accuracy & Hygiene",
      description:
        "A stale CMDB is a liability. Incorrect CIs corrupt incident routing, break change impact analysis, and undermine every automated workflow built on top of it. We fix it at the root.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "ArrowsCounterClockwise",
      title: "Continuous Improvement Cycles",
      description:
        "After the initial optimization, we run monthly improvement sprints tied to your KPI targets. The platform compounds in value over time — not just at launch.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
  ],

  processHeading: "Audit. Prioritize. Optimize. Repeat.",
  processBody:
    "Each phase produces a reviewable decision or work item. Priorities and timing are agreed with your team based on the platform and scope.",
  processSteps: [
    {
      number: "01",
      title: "Audit",
      subtitle: "Current-state review",
      description:
        "Review configuration, workflows, available utilization information, user feedback, and operational dependencies.",
      deliverable: "Prioritized optimization backlog + quick-win list",
      color: "text-teal",
      borderColor: "border-teal/30",
      bgColor: "bg-teal/5",
    },
    {
      number: "02",
      title: "Prioritize",
      subtitle: "Priorities and sequencing",
      description:
        "We rank improvements by impact and effort, align them to your top operational metrics, and build a roadmap your leadership team can approve — with cost and ROI projections for each item.",
      deliverable: "Optimization roadmap with ROI estimates",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
    {
      number: "03",
      title: "Optimize",
      subtitle: "Incremental, reviewable changes",
      description:
        "Deliver agreed improvements in reviewable increments, demonstrate changes, and evaluate them against the acceptance criteria.",
      deliverable: "Improved workflows, updated dashboards, KPI movement",
      color: "text-purple",
      borderColor: "border-purple/30",
      bgColor: "bg-purple/5",
    },
    {
      number: "04",
      title: "Sustain",
      subtitle: "Ongoing platform ownership",
      description:
        "The engagement doesn't end at eight weeks. We transition to monthly optimization reviews — keeping the platform current with your business, not frozen at its last major update.",
      deliverable: "Monthly KPI report + next-cycle improvements",
      color: "text-teal",
      borderColor: "border-teal/30",
      bgColor: "bg-teal/5",
    },
  ],

  outcomeHeading: "Measure against your own baseline.",
  outcomeBody:
    "Agree on measures that reflect your environment and priorities before work begins. Review changes with the teams responsible for operating the platform.",
  outcomeStats: [
    { value: "Baseline", label: "Current-state measures", color: "text-teal" },
    { value: "Workflow", label: "Service experience", color: "text-gold" },
    { value: "Adoption", label: "User feedback and use", color: "text-purple" },
    { value: "Ownership", label: "Ongoing responsibilities", color: "text-teal" },
  ],
};

export default function ITSMPage() {
  return <ServicePage data={data} />;
}
