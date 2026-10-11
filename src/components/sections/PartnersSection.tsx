import { ArrowsLeftRight, Fingerprint, StackSimple } from "@phosphor-icons/react/dist/ssr";

const architectureConcerns = [
  {
    Icon: Fingerprint,
    number: "01",
    title: "Identity and access",
    description: "Clarify who or what can access a workflow, what context follows the request, and where approvals belong.",
  },
  {
    Icon: ArrowsLeftRight,
    number: "02",
    title: "Data and integration",
    description: "Map the records, systems, and error paths a ServiceNow workflow depends on before it reaches production.",
  },
  {
    Icon: StackSimple,
    number: "03",
    title: "Operations and ownership",
    description: "Design monitoring, support, upgrades, and change ownership into the platform—not around it afterward.",
  },
];

export default function PartnersSection() {
  return (
    <section className="section-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-navy/60">Enterprise architecture</p>
            <h2 className="max-w-3xl font-display text-3xl font-800 leading-tight text-navy md:text-4xl lg:text-5xl">
              ServiceNow must work with the estate you already have.
            </h2>
          </div>
          <p className="text-sm leading-7 text-navy/65 md:text-base">
            Platform outcomes depend on the connections around them. We bring those dependencies into the design conversation early.
          </p>
        </div>

        <div className="grid gap-5 border-t border-navy/10 pt-6 md:grid-cols-3">
          {architectureConcerns.map(({ Icon, number, title, description }) => (
            <article key={number} className="pr-4">
              <div className="mb-7 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10 text-navy/70">
                  <Icon size={19} weight="regular" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs tabular-nums text-navy/45">{number}</span>
              </div>
              <h3 className="font-display text-lg font-700 text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-navy/65">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
