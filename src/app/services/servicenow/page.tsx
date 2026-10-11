import type { Metadata } from "next";
import ServicePage, { type ServicePageData } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "ServiceNow Implementation | AscendWorksNow",
  description:
    "Plan and deliver ServiceNow capabilities around your processes, architecture, integrations, governance, and operating model.",
};

const data: ServicePageData = {
  category: "ServiceNow implementation",
  headline: "Build the platform around the work.",
  subheadline:
    "Plan a ServiceNow implementation around your operating model, technical estate, and goals. From workflow design and configuration to testing, enablement, and ownership, the scope and timeline are shaped with your team.",
  heroStats: [
    { value: "ITSM · ITOM", label: "Core operations" },
    { value: "Flow Designer", label: "Workflow automation" },
    { value: "AI Control Tower", label: "AI governance" },
  ],
  problemHeading: "A platform is only as useful as the work it supports.",
  problemBody:
    "Implementations become difficult to sustain when process design, data, integrations, and platform ownership are treated as separate conversations. Start with the service experience and constraints your teams need to support.",
  painPoints: [
    {
      iconName: "Clock",
      title: "Scope before configuration",
      description: "Align on users, workflows, dependencies, and acceptance criteria before committing to build decisions.",
    },
    {
      iconName: "Target",
      title: "A platform designed to evolve",
      description: "Prefer maintainable patterns and a clear governance model over short-term customization that complicates upgrades.",
    },
    {
      iconName: "UsersThree",
      title: "Ownership beyond launch",
      description: "Include administrators, service owners, and support teams in design, testing, documentation, and handover.",
    },
  ],
  capabilitiesHeading: "Implementation across the Now Platform.",
  capabilitiesBody:
    "We shape the work to your licensed products and environment. Product availability and implementation scope are confirmed during discovery.",
  capabilities: [
    {
      iconName: "Gear",
      title: "ITSM, ITOM & CMDB",
      description: "Design service operations, configuration data, and workflows around the way teams detect, prioritize, and resolve work.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "UsersThree",
      title: "HRSD & employee services",
      description: "Map employee journeys, request experiences, knowledge, and service ownership across teams.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Handshake",
      title: "CSM & service experiences",
      description: "Connect customer-facing service workflows to the teams and information needed to resolve requests.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
    {
      iconName: "ShieldCheck",
      title: "SecOps & risk workflows",
      description: "Coordinate response, approvals, and evidence with clear roles and controls for your operating context.",
      borderColor: "border-gold/20",
      bgColor: "bg-gold/5",
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
      textColor: "text-gold",
    },
    {
      iconName: "ArrowsCounterClockwise",
      title: "Flow Designer & integrations",
      description: "Automate repeatable work and connect systems with explicit ownership, error handling, and support paths.",
      borderColor: "border-teal/20",
      bgColor: "bg-teal/5",
      iconBg: "bg-teal/10",
      iconColor: "text-teal",
      textColor: "text-teal",
    },
    {
      iconName: "Brain",
      title: "Now Assist & AI capabilities",
      description: "Assess use cases, data and access requirements, human oversight, and readiness before enabling AI-supported workflows.",
      borderColor: "border-purple/20",
      bgColor: "bg-purple/5",
      iconBg: "bg-purple/10",
      iconColor: "text-purple",
      textColor: "text-purple",
    },
  ],
  processHeading: "A delivery plan built around your constraints.",
  processBody:
    "The engagement sequence is agreed with your stakeholders. Each stage has a clear decision point, named owner, and output for the next stage.",
  processSteps: [
    {
      number: "01",
      title: "Discover",
      subtitle: "Processes, people, and platform context",
      description: "Review objectives, current-state workflows, licensed capabilities, data, integrations, and delivery constraints.",
      deliverable: "Prioritized scope and open decisions",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Architecture and service experience",
      description: "Agree target workflows, platform patterns, roles, integration approach, and acceptance criteria before implementation.",
      deliverable: "Solution design and delivery plan",
      color: "text-purple",
      borderColor: "border-purple/30",
      bgColor: "bg-purple/5",
    },
    {
      number: "03",
      title: "Configure & validate",
      subtitle: "Build, test, and prepare for adoption",
      description: "Deliver in reviewable increments, validate integrations and access, and involve service owners in acceptance testing.",
      deliverable: "Reviewed configuration and test evidence",
      color: "text-teal",
      borderColor: "border-teal/30",
      bgColor: "bg-teal/5",
    },
    {
      number: "04",
      title: "Launch & own",
      subtitle: "Operational readiness and handover",
      description: "Prepare support teams, document platform decisions, and agree how adoption, issues, and future changes will be managed.",
      deliverable: "Operational handover and next-step roadmap",
      color: "text-gold",
      borderColor: "border-gold/30",
      bgColor: "bg-gold/5",
    },
  ],
  outcomeHeading: "A clear basis for evaluating the work.",
  outcomeBody:
    "Define the intended measures with your stakeholders before delivery. Review progress against those agreed criteria, platform acceptance, and the operating team's readiness.",
  outcomeStats: [
    { value: "Scoped", label: "Priorities and boundaries", color: "text-gold" },
    { value: "Tested", label: "Acceptance and readiness", color: "text-teal" },
    { value: "Owned", label: "Operational handover", color: "text-purple" },
    { value: "Measured", label: "Agreed outcome criteria", color: "text-gold" },
  ],
};

export default function ServiceNowImplementationPage() {
  return <ServicePage data={data} />;
}
