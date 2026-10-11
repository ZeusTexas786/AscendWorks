"use client";

import { motion, useReducedMotion } from "framer-motion";

type Stage = { id: string; label: string; sub: string; x: number; dot: string };

const STAGES: Stage[] = [
  { id: "detect", label: "Detect", sub: "Signals scored in real time", x: 120, dot: "#C9A84C" },
  { id: "coordinate", label: "Coordinate", sub: "Workflows routed automatically", x: 400, dot: "#0D9B8A" },
  { id: "act", label: "Act", sub: "Right intelligence, right person", x: 680, dot: "#6B4FBB" },
];

const RAIL_Y = 68;

/**
 * Animated Detect → Coordinate → Act signal flow for the AI Control Tower.
 * Pure SVG + framer-motion; degrades to a static diagram under
 * prefers-reduced-motion.
 */
export default function ControlTowerFlow() {
  const reduced = useReducedMotion();

  return (
    <div
      className="w-full overflow-x-auto"
      role="img"
      aria-label="AI Control Tower signal flow: Detect, where signals are scored in real time; Coordinate, where workflows route automatically; and Act, where the right intelligence reaches the right person."
    >
      <svg
        viewBox="0 0 800 150"
        className="w-full min-w-[560px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ct-rail" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#C9A84C" />
            <stop offset="0.5" stopColor="#0D9B8A" />
            <stop offset="1" stopColor="#6B4FBB" />
          </linearGradient>
          <radialGradient id="ct-pulse">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="1" stopColor="#E2C06C" stopOpacity="0" />
          </radialGradient>
        </defs>

        <line
          x1={STAGES[0].x}
          y1={RAIL_Y}
          x2={STAGES[2].x}
          y2={RAIL_Y}
          stroke="url(#ct-rail)"
          strokeWidth="2"
          strokeOpacity="0.6"
        />

        {!reduced &&
          [0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              r="8"
              cy={RAIL_Y}
              fill="url(#ct-pulse)"
              initial={{ cx: STAGES[0].x, opacity: 0 }}
              animate={{ cx: [STAGES[0].x, STAGES[2].x], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 4.5,
                times: [0, 0.12, 0.88, 1],
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
            />
          ))}

        {STAGES.map((stage, i) => (
          <g key={stage.id}>
            {!reduced && (
              <motion.circle
                cx={stage.x}
                cy={RAIL_Y}
                r="16"
                fill={stage.dot}
                initial={{ opacity: 0.25, scale: 0.9 }}
                animate={{ opacity: [0.25, 0.05, 0.25], scale: [0.9, 1.5, 0.9] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
              />
            )}
            <circle cx={stage.x} cy={RAIL_Y} r="11" fill="#0A1628" stroke={stage.dot} strokeWidth="2.5" />
            <circle cx={stage.x} cy={RAIL_Y} r="4" fill={stage.dot} />
            <text
              x={stage.x}
              y={RAIL_Y - 30}
              textAnchor="middle"
              fill={stage.dot}
              fontSize="15"
              fontWeight="700"
            >
              {stage.label}
            </text>
            <text
              x={stage.x}
              y={RAIL_Y + 38}
              textAnchor="middle"
              fill="#8892A4"
              fontSize="11"
            >
              {stage.sub}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
