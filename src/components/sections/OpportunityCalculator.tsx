"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const scenarios = [
  {
    id: "solo",
    label: "Solo Practice",
    sublabel: "Just you, billing direct",
    active: 326_400,
    passive: 0,
    people: 1,
  },
  {
    id: "plus2",
    label: "+ 2 Referred",
    sublabel: "You + 2 in your network",
    active: 326_400,
    passive: 64_800,
    people: 3,
  },
  {
    id: "plus5",
    label: "+ 5 Network",
    sublabel: "You + 5 practitioners",
    active: 326_400,
    passive: 162_000,
    people: 6,
  },
  {
    id: "practice",
    label: "Full Practice",
    sublabel: "You + 10-person practice",
    active: 326_400,
    passive: 324_000,
    people: 11,
  },
];

function fmt(n: number) {
  return "$" + n.toLocaleString("en-US");
}

export default function OpportunityCalculator() {
  const [sel, setSel] = useState(0);
  const s = scenarios[sel];
  const total = s.active + s.passive;
  const activeW = Math.round((s.active / (326_400 + 324_000)) * 100);
  const passiveW = Math.round((s.passive / (326_400 + 324_000)) * 100);

  return (
    <div className="glass-panel rounded-3xl p-8 lg:p-10">
      {/* Scenario tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {scenarios.map((sc, i) => (
          <button
            key={sc.id}
            type="button"
            onClick={() => setSel(i)}
            className={`px-4 py-3.5 rounded-2xl text-sm font-600 transition-all duration-200 text-left ${
              sel === i
                ? "bg-gold text-navy shadow-lg shadow-gold/25"
                : "border border-white/10 text-slate-light hover:border-gold/30 hover:text-white"
            }`}
          >
            <div className="font-700">{sc.label}</div>
            <div className={`text-[11px] mt-0.5 ${sel === i ? "text-navy/70" : "text-slate"}`}>{sc.sublabel}</div>
          </button>
        ))}
      </div>

      {/* Income cards */}
      <div className="grid md:grid-cols-3 gap-5 mb-7">
        <div className="glass-inset rounded-2xl p-5">
          <p className="text-slate text-[11px] uppercase tracking-widest mb-2">Active Income</p>
          <AnimatePresence mode="wait">
            <motion.p key={`a-${sel}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }} className="font-display font-800 text-3xl text-gold">
              {fmt(s.active)}
            </motion.p>
          </AnimatePresence>
          <p className="text-slate text-xs mt-1">Your direct project billing</p>
        </div>

        <div className="glass-inset rounded-2xl p-5">
          <p className="text-slate text-[11px] uppercase tracking-widest mb-2">Passive Income</p>
          <AnimatePresence mode="wait">
            <motion.p key={`p-${sel}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }} className={`font-display font-800 text-3xl ${s.passive > 0 ? "text-teal" : "text-slate/40"}`}>
              {s.passive > 0 ? fmt(s.passive) : "—"}
            </motion.p>
          </AnimatePresence>
          <p className="text-slate text-xs mt-1">{s.passive > 0 ? "Referral network earnings" : "Grows as you refer talent"}</p>
        </div>

        <div className="rounded-2xl border border-gold/25 bg-gold/8 p-5">
          <p className="text-gold/70 text-[11px] uppercase tracking-widest mb-2">Total OTE</p>
          <AnimatePresence mode="wait">
            <motion.p key={`t-${sel}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }} className="font-display font-800 text-3xl text-white">
              {fmt(total)}
            </motion.p>
          </AnimatePresence>
          <p className="text-slate text-xs mt-1 flex items-center gap-1">
            <Users size={11} /> {s.people} practitioner{s.people !== 1 ? "s" : ""} in network
          </p>
        </div>
      </div>

      {/* Income bar */}
      <div className="space-y-3 mb-6">
        <div>
          <div className="flex justify-between text-xs text-slate mb-1.5">
            <span>Active Income</span>
            <span className="text-gold font-600">{fmt(s.active)}</span>
          </div>
          <div className="h-3 rounded-full bg-white/8 overflow-hidden">
            <motion.div animate={{ width: `${activeW}%` }} transition={{ duration: 0.5, ease }} className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs text-slate mb-1.5">
            <span>Passive Income</span>
            <span className="text-teal font-600">{s.passive > 0 ? fmt(s.passive) : "—"}</span>
          </div>
          <div className="h-3 rounded-full bg-white/8 overflow-hidden">
            <motion.div animate={{ width: `${passiveW}%` }} transition={{ duration: 0.5, delay: 0.1, ease }} className="h-full rounded-full bg-gradient-to-r from-teal to-teal/60" />
          </div>
        </div>
      </div>

      <p className="text-slate/50 text-xs text-center">
        Based on $200/hr avg. ServiceNow bill rate · 1,920 annual billable hours · 85% profit retention model
      </p>
    </div>
  );
}
