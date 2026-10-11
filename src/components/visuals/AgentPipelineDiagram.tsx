"use client";

import { motion, useReducedMotion } from "framer-motion";

type Stage = { id: string; label: string; sub: string; x: number };

const STAGES: Stage[] = [
  { id: "discover", label: "Discover", sub: "Agents mine requirements", x: 60 },
  { id: "build", label: "Design & Build", sub: "Config generated, humans decide", x: 230 },
  { id: "test", label: "Test", sub: "ATF suites auto-written", x: 400 },
  { id: "document", label: "Document", sub: "Docs from the real build", x: 570 },
  { id: "deploy", label: "Deploy", sub: "Readiness-checked go-live", x: 740 },
];

const RAIL_Y = 70;

/**
 * The AscendOS delivery pipeline. Energy pulses travel a gradient rail between
 * five agent stages; degrades to a static diagram under prefers-reduced-motion.
 */
export default function AgentPipelineDiagram() {
  const reduced = useReducedMotion();

  return (
    <div
      className="w-full overflow-x-auto"
      role="img"
      aria-label="AscendOS delivery pipeline: Discover, Design and Build, Test, Document, and Deploy. AI agents assist at every stage while humans approve every release."
    >
      <svg
        viewBox="0 0 800 190"
        className="w-full min-w-[640px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ap-rail" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#C9A84C" />
            <stop offset="0.5" stopColor="#E2C06C" />
            <stop offset="1" stopColor="#0D9B8A" />
          </linearGradient>
          <radialGradient id="ap-pulse">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="1" stopColor="#E2C06C" stopOpacity="0" />
          </radialGradient>
        </defs>

        <line
          x1={STAGES[0].x}
          y1={RAIL_Y}
          x2={STAGES[4].x}
          y2={RAIL_Y}
          stroke="url(#ap-rail)"
          strokeWidth="2.5"
          strokeOpacity="0.6"
        />

        {!reduced &&
          [0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              r="7"
              cy={RAIL_Y}
              fill="url(#ap-pulse)"
              initial={{ cx: STAGES[0].x, opacity: 0 }}
              animate={{ cx: [STAGES[0].x, STAGES[4].x], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 5,
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                delay: i * 1.7,
                ease: "linear",
              }}
            />
          ))}

        {STAGES.map((stage, i) => {
          const above = i % 2 === 0;
          return (
            <g key={stage.id}>
              <motion.circle
                cx={stage.x}
                cy={RAIL_Y}
                r="11"
                fill="#0A1628"
                stroke="url(#ap-rail)"
                strokeWidth="2.5"
                initial={reduced ? undefined : { scale: 0, opacity: 0 }}
                whileInView={reduced ? undefined : { scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />
              <circle cx={stage.x} cy={RAIL_Y} r="4" fill={i % 2 ? "#0D9B8A" : "#C9A84C"} />
              <text
                x={stage.x}
                y={above ? RAIL_Y - 30 : RAIL_Y + 42}
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="14"
                fontWeight="700"
              >
                {stage.label}
              </text>
              <text
                x={stage.x}
                y={above ? RAIL_Y - 14 : RAIL_Y + 58}
                textAnchor="middle"
                fill="#8892A4"
                fontSize="10.5"
              >
                {stage.sub}
              </text>
            </g>
          );
        })}

        {/* human approval gate marker */}
        <g>
          <rect
            x="726"
            y={RAIL_Y + 66}
            width="14"
            height="14"
            rx="3"
            stroke="#0D9B8A"
            strokeWidth="1.5"
          />
          <path
            d={`M729.5 ${RAIL_Y + 73} l3 3 5-5`}
            stroke="#0D9B8A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="718" y={RAIL_Y + 77} textAnchor="end" fontSize="10.5" fill="#8892A4">
            Human approval gates every release
          </text>
        </g>
      </svg>
    </div>
  );
}
