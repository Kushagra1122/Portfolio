"use client";

import { createVideoScrub } from "@/animations/factories";
import { Button } from "@/components/ui/Button";
import { content } from "@/content/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { openTerminal } from "@/utils/terminalEvents";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = usePrefersReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.muted = true;
    video.playsInline = true;
    video.pause();

    const cleanup = createVideoScrub({
      id: "hero-scrub",
      trigger: section,
      video,
      end: "+=220%",
      pin: true,
      onReady: () => setReady(true),
    });

    return () => {
      cleanup?.();
    };
  }, [reduced]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[100svh] min-h-[560px] overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/hero/poster.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          poster="/media/hero/poster.jpg"
          preload="auto"
          muted
          playsInline
          aria-hidden
        >
          <source src="/media/hero/hero.webm" type="video/webm" />
          <source src="/media/hero/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/40 via-[var(--bg)]/55 to-[var(--bg)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg)_78%)]" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-20 pt-24 md:px-8 md:pb-28">
        <div className="mx-auto w-full max-w-6xl">
          <p
            className={`mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-[var(--accent)] transition duration-700 ${ready || reduced ? "opacity-100" : "opacity-0"}`}
          >
            Portfolio
          </p>
          <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-tight text-[var(--fg)] sm:text-6xl md:text-8xl">
            {content.name}
          </h1>
          <p className="mt-5 max-w-xl text-base text-[var(--muted)] md:text-lg">
            {content.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={content.resumePath}>Download Resume</Button>
            <Button variant="outline" href="#contact">
              Contact
            </Button>
            <Button variant="ghost" onClick={openTerminal}>
              Open Terminal
            </Button>
          </div>
          <p className="mt-10 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            Scroll to scrub
          </p>
        </div>
      </div>
    </section>
  );
}
