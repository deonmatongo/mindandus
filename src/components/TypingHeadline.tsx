"use client";

import { useEffect, useState } from "react";

type Phrase = { line1: string; line2: string };

const PHRASES: Phrase[] = [
  { line1: "Your mind matters,", line2: "always has." },
  { line1: "You're not alone,", line2: "we see you." },
];

const TYPE_MS = 55;
const DELETE_MS = 30;
const HOLD_MS = 2600;
const GAP_MS = 500;

export default function TypingHeadline() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const phrase = PHRASES[phraseIndex];
  const full = `${phrase.line1} ${phrase.line2}`;

  useEffect(() => {
    if (reduced) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && length < full.length) {
      timeout = setTimeout(() => setLength((l) => l + 1), TYPE_MS);
    } else if (!deleting && length === full.length) {
      timeout = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (deleting && length > 0) {
      timeout = setTimeout(() => setLength((l) => l - 1), DELETE_MS);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }, GAP_MS);
    }

    return () => clearTimeout(timeout);
  }, [length, deleting, full, reduced]);

  if (reduced) {
    return (
      <>
        {PHRASES[0].line1}
        <br />
        <em>{PHRASES[0].line2}</em>
      </>
    );
  }

  const shown = full.slice(0, length);
  const line1Shown = shown.slice(0, phrase.line1.length);
  const line2Shown =
    shown.length > phrase.line1.length + 1 ? shown.slice(phrase.line1.length + 1) : "";
  const cursorOnLine1 = length <= phrase.line1.length;

  return (
    <>
      <span className="type-line">
        {line1Shown}
        {cursorOnLine1 && <span className="type-cursor" aria-hidden="true" />}
      </span>
      <br />
      <em className="type-line">
        {line2Shown}
        {!cursorOnLine1 && <span className="type-cursor" aria-hidden="true" />}
      </em>
      <span className="sr-only">
        {PHRASES[0].line1} {PHRASES[0].line2}
      </span>
    </>
  );
}
