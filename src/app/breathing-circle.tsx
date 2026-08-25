"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const phases = [
  { text: "Breathe in", duration: 4 },
  { text: "Hold", duration: 4 },
  { text: "Breathe out", duration: 4 },
];

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
function getSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
function getServerSnapshot() {
  return false;
}

export default function BreathingCircle() {
  const reduceMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [state, setState] = useState({ phaseIndex: 0, remaining: phases[0].duration });

  useEffect(() => {
    if (reduceMotion) return;

    const tick = setInterval(() => {
      setState((prev) => {
        if (prev.remaining > 1) {
          return { ...prev, remaining: prev.remaining - 1 };
        }
        const phaseIndex = (prev.phaseIndex + 1) % phases.length;
        return { phaseIndex, remaining: phases[phaseIndex].duration };
      });
    }, 1000);

    return () => clearInterval(tick);
  }, [reduceMotion]);

  const phase = phases[state.phaseIndex];

  return (
    <div className="breath-stage">
      <div className="breath-rings" aria-hidden="true"></div>
      <div className="breath-circle">
        <div className="breath-label">
          <span>{reduceMotion ? "Take a breath" : phase.text}</span>
          <span className="breath-count">{reduceMotion ? "" : state.remaining}</span>
        </div>
      </div>
    </div>
  );
}
