"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "/hero-photo-1.jpg",
    alt: "A diverse group practising yoga together outdoors at sunrise, overlooking mountains and the ocean",
  },
  {
    src: "/hero-photo-2.jpg",
    alt: "A diverse group practising yoga together outdoors at sunrise, overlooking mountains and the ocean",
  },
];

const AUTOPLAY_MS = 5000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [reduced]);

  return (
    <div className="hero-visual">
      <div className="hero-photo">
        {SLIDES.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 900px) 100vw, 45vw"
            className={`hero-photo-img${i === index ? " is-active" : ""}`}
            style={{ objectFit: "cover" }}
          />
        ))}
        <span className="hero-photo-tag">◦ Concept &amp; development</span>
      </div>
      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`dot${i === index ? " dot-active" : ""}`}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
