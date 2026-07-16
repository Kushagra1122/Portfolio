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
      className="relative h-[100svh] min-h-[680px] overflow-hidden"
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
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-80"
          poster="/media/hero/poster.jpg"
          preload="auto"
          muted
          playsInline
          aria-hidden
        >
          <source src="/media/hero/hero.webm" type="video/webm" />
          <source src="/media/hero/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(50,245,208,0.22),transparent_30%),radial-gradient(circle_at_18%_68%,rgba(139,92,246,0.18),transparent_32%),linear-gradient(90deg,rgba(3,5,9,0.98)_0%,rgba(3,5,9,0.78)_46%,rgba(3,5,9,0.92)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
        <div className="grain" />
      </div>

      <div className="relative z-10 flex h-full items-center px-5 pt-16 md:px-8">
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="max-w-4xl">
            <p
              className={`mb-5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] transition duration-700 ${ready || reduced ? "opacity-100" : "opacity-0"}`}
            >
              Backend · Systems · AI Infrastructure
            </p>
            <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-[-0.055em] text-[var(--fg)] sm:text-6xl md:text-7xl lg:text-8xl">
              {content.name}
            </h1>
            <p className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-2xl leading-[1.12] tracking-tight text-[var(--fg)] md:text-4xl">
              I build dependable backend and AI systems for real products.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--fg)]/85 md:text-xl">
              Focused on production APIs, distributed execution, retrieval pipelines, secure local-to-cloud workflows, and developer tooling that stays easy to operate.
            </p>
            <p className="mt-5 max-w-2xl font-[family-name:var(--font-mono)] text-xs leading-6 text-[var(--muted)] md:text-sm">
              TypeScript · Go · Python · Node.js · FastAPI · distributed systems · RAG · infrastructure tooling
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
            <div className="mt-10 flex max-w-3xl flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              {[
                "Backend architecture",
                "Distributed jobs",
                "Retrieval systems",
                "Secure execution",
              ].map((item, index) => (
                <span key={item} className={index === 0 ? "text-[var(--accent)]" : ""}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <p className="absolute bottom-[-4.5rem] left-0 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            Scroll for motion · Open terminal for an interactive resume
          </p>
        </div>
      </div>
    </section>
  );
}
