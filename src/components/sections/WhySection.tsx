import { ArrowsLeftRight, ClipboardText, ShieldCheck, Target } from "@phosphor-icons/react/dist/ssr";

const principles = [
  {
    Icon: Target,
    number: "01",
    title: "Start with the operating model",
    description: "Map the work, decision rights, and service outcomes before shaping the ServiceNow design.",
  },
  {
    Icon: ArrowsLeftRight,
    number: "02",
    title: "Design the connections",
    description: "Treat data, integrations, ownership, and exception handling as part of the workflow—not follow-on tasks.",
  },
  {
    Icon: ShieldCheck,
    number: "03",
    title: "Govern automation deliberately",
    description: "Set permissions, approval points, escalation paths, and human oversight around AI-enabled work.",
  },
  {
    Icon: ClipboardText,
    number: "04",
    title: "Define evidence of success",
    description: "Agree on baselines, acceptance criteria, and operational ownership before measuring change.",
  },
];

export default function WhySection() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gold">How we think</p>
            <h2 className="max-w-3xl font-display text-3xl font-800 leading-tight text-white md:text-4xl lg:text-5xl">
              Experience shows up in the decisions.
            </h2>
          </div>
          <p className="text-sm leading-7 text-slate-light md:text-base">
            Enterprise ServiceNow work is not just configuration. It connects process, architecture, controls, and the people who own the platform after launch.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 sm:grid-cols-2">
          {principles.map(({ Icon, number, title, description }) => (
            <article key={number} className="bg-navy p-6 sm:p-8">
              <div className="mb-7 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-gold">
                  <Icon size={19} weight="regular" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs tabular-nums text-slate/60">{number}</span>
              </div>
              <h3 className="font-display text-lg font-700 text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-light">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
