"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Play, X, SpeakerHigh, SpeakerSlash, FilmSlate } from "@phosphor-icons/react";

const FILM_SRC = "/media/ai-control-tower-film.html";
const RUNTIME = "82 seconds";

/** Same-origin control surface the film exposes once its script runs. */
interface FilmWindow extends Window {
  AWNScore?: { setMuted: (m: boolean) => void; isMuted: () => boolean; stop: () => void };
}

const CHAPTERS = [
  "The problem",
  "What a Control Tower is",
  "12 capabilities",
  "Customer proof",
  "The CFO math",
];

export default function BriefingPlayer() {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const close = useCallback(() => {
    // Silence immediately rather than waiting for unmount. The iframe is only
    // removed once the exit animation finishes, and an animation can stall
    // (throttled rAF, backgrounded tab) — sound must never outlive the click.
    const win = iframeRef.current?.contentWindow as FilmWindow | null;
    try {
      win?.AWNScore?.stop();
    } catch {
      // cross-origin or already torn down — unmount will finish the job
    }
    setOpen(false);
    openerRef.current?.focus();
  }, []);

  // Esc to close, and keep focus inside the dialog while it is open
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], iframe, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden"; // stop the page scrolling behind
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    const win = iframeRef.current?.contentWindow as FilmWindow | null;
    win?.AWNScore?.setMuted(next);
  };

  return (
    <>
      {/* ── Poster / opener ─────────────────────────────────────────────── */}
      <div className="glass-panel mt-12 overflow-hidden rounded-3xl">
        <div className="grid items-center gap-8 p-6 md:grid-cols-[1.1fr_1fr] md:p-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-3 py-1 text-xs font-600 uppercase tracking-widest text-gold">
              <FilmSlate size={13} weight="duotone" /> Executive briefing
            </span>
            <h3 className="mt-4 font-display text-2xl font-700 leading-tight text-white md:text-3xl">
              Watch the AI Control Tower in {RUNTIME}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate">
              An animated walkthrough of the problem, the twelve capabilities, the
              proof, and the CFO maths behind governing AI on ServiceNow.
            </p>

            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {CHAPTERS.map((chapter, i) => (
                <li key={chapter} className="flex items-center gap-2 text-xs text-slate">
                  <span className="font-display font-700 text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {chapter}
                </li>
              ))}
            </ul>

            <button
              ref={openerRef}
              type="button"
              onClick={() => setOpen(true)}
              className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-gold px-6 py-3 font-display text-sm font-700 text-navy transition-all duration-200 hover:bg-gold-light"
            >
              <Play size={15} weight="fill" />
              Play the briefing
              <span className="text-navy/60">· with sound</span>
            </button>
            <p className="mt-3 text-xs text-slate">
              Loads on play — nothing streams until you ask for it.
            </p>
          </div>

          {/* Static poster: film-accurate, but no 1.4 MB payload until play */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Play the AI Control Tower briefing, ${RUNTIME}`}
            className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/20 bg-[#060912]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 25%, rgba(200,255,62,.16) 0%, transparent 55%), radial-gradient(ellipse at 75% 80%, rgba(110,168,255,.14) 0%, transparent 55%)",
              }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            <span className="absolute left-5 top-5 text-left">
              <span className="block font-display text-[11px] font-600 uppercase tracking-[0.2em] text-[#C8FF3E]">
                AscendWorksNow
              </span>
              <span className="mt-1 block font-display text-lg font-700 leading-tight text-[#F2EEE3]">
                AI Control Tower
              </span>
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C8FF3E] text-[#060912] transition-transform duration-200 group-hover:scale-105">
                <Play size={24} weight="fill" />
              </span>
            </span>
            <span className="absolute bottom-5 right-5 font-mono text-[11px] text-[#8A93A6]">
              01:22
            </span>
          </button>
        </div>
      </div>

      {/* ── Modal ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm md:p-8"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label="AI Control Tower executive briefing"
              className="flex w-full max-w-6xl flex-col"
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <p className="font-display text-sm font-600 text-white">
                  AI Control Tower — Executive Briefing
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleSound}
                    aria-pressed={muted}
                    className="glass-inset flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-600 text-slate-light transition-colors hover:bg-white/15 hover:text-white"
                  >
                    {muted ? <SpeakerSlash size={14} /> : <SpeakerHigh size={14} />}
                    {muted ? "Sound off" : "Sound on"}
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="glass-inset flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-600 text-slate-light transition-colors hover:bg-white/15 hover:text-white"
                  >
                    <X size={14} weight="bold" /> Close
                  </button>
                </div>
              </div>

              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/25 bg-[#060912]">
                <iframe
                  ref={iframeRef}
                  src={FILM_SRC}
                  title="AI Control Tower animated executive briefing"
                  className="h-full w-full"
                  allow="autoplay"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
