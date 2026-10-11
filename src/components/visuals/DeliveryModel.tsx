import { CheckCircle, UserCircle, Robot } from "@phosphor-icons/react/dist/ssr";

const work = [
  {
    task: "Discovery and requirements",
    agent: "Organize notes, compare inputs, and draft questions for review.",
    human: "Set priorities, resolve conflicts, and approve scope.",
  },
  {
    task: "Configuration and code",
    agent: "Prepare implementation options and check work against approved patterns.",
    human: "Own architecture, review changes, and approve production access.",
  },
  {
    task: "Testing and documentation",
    agent: "Draft test cases and keep records linked to the work delivered.",
    human: "Validate acceptance, assess risk, and approve release readiness.",
  },
  {
    task: "Operations and improvement",
    agent: "Summarize signals and surface possible follow-up actions.",
    human: "Interpret context, decide what to change, and remain accountable.",
  },
];

export default function DeliveryModel() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/15">
      <div className="grid border-b border-white/15 bg-white/[0.035] sm:grid-cols-[0.8fr_1fr_1fr]">
        <div className="hidden px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate sm:block">Delivery activity</div>
        <div className="flex items-center gap-2 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          <Robot size={15} aria-hidden="true" /> Agents prepare
        </div>
        <div className="flex items-center gap-2 border-t border-white/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal sm:border-l sm:border-t-0">
          <UserCircle size={15} aria-hidden="true" /> People decide
        </div>
      </div>

      {work.map((item) => (
        <div key={item.task} className="grid border-b border-white/10 last:border-b-0 sm:grid-cols-[0.8fr_1fr_1fr]">
          <h3 className="px-5 pb-1 pt-5 font-display text-sm font-700 text-white sm:py-5">{item.task}</h3>
          <p className="px-5 pb-4 text-sm leading-6 text-slate-light sm:py-5">{item.agent}</p>
          <p className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-light sm:border-l sm:border-t-0 sm:py-5">{item.human}</p>
        </div>
      ))}

      <p className="flex items-start gap-2 border-t border-white/15 bg-white/[0.035] px-5 py-4 text-xs leading-5 text-slate">
        <CheckCircle size={15} weight="regular" className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
        Automation boundaries depend on your platform, data, permissions, and governance requirements.
      </p>
    </div>
  );
}
