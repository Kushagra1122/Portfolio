"use client";

import { createVideoScrub } from "@/animations/factories";
import { Button } from "@/components/ui/Button";
import { content } from "@/content/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { openTerminal } from "@/utils/terminalEvents";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const heroScrollStages = [
  {
    label: "01",
    detail: "Backend systems",
    title: "Design reliable backend foundations.",
    body: "APIs, data models, auth paths, system boundaries, scale assumptions, and failure modes are shaped before features get complex.",
    evidence: ["backend", "system design", "typed APIs"],
  },
  {
    label: "02",
    detail: "AI and automation",
    title: "Make AI workflows usable in products.",
    body: "Retrieval, agent APIs, automation jobs, tool execution, and guardrails are built as systems teams can operate.",
    evidence: ["AI workflows", "RAG", "automation"],
  },
  {
    label: "03",
    detail: "Full-stack quality",
    title: "Connect UI, services, and user paths.",
    body: "React/Next.js flows, backend APIs, validation, QA checks, debugging, and regression thinking keep product behavior trustworthy.",
    evidence: ["full-stack", "frontend", "QA"],
  },
  {
    label: "04",
    detail: "DevOps and launch",
    title: "Ship with operations covered.",
    body: "CI/CD, deployments, environment config, logs, monitoring, docs, and handoff details are part of the build, not afterthoughts.",
    evidence: ["DevOps", "CI/CD", "deployments"],
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef(0);
  const reduced = usePrefersReducedMotion();
  const [ready, setReady] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const selectedStage = heroScrollStages[activeStage];

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
      onUpdate: (progress) => {
        progressRef.current?.style.setProperty("--hero-progress", `${progress * 100}%`);

        const nextStage = Math.min(
          heroScrollStages.length - 1,
          Math.floor(progress * heroScrollStages.length),
        );
        if (nextStage !== stageRef.current) {
          stageRef.current = nextStage;
          setActiveStage(nextStage);
        }
      },
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
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_400px]">
          <div className="max-w-3xl">
            <p
              className={`mb-5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] transition duration-700 ${ready || reduced ? "opacity-100" : "opacity-0"}`}
            >
              Backend · AI · Full-stack · DevOps
            </p>
            <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-[0.98] tracking-[-0.045em] text-[var(--fg)] sm:text-5xl md:text-6xl lg:text-7xl">
              {content.name}
            </h1>
            <p className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-xl leading-[1.16] tracking-tight text-[var(--fg)] md:text-3xl">
              I build backend and AI-heavy software that ships as real products.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--fg)]/85 md:text-lg">
              Strongest in backend, systems, and AI workflows; also open to full-stack, frontend, DevOps, and QA roles where reliable delivery matters.
            </p>
            <p className="mt-4 max-w-2xl font-[family-name:var(--font-mono)] text-[11px] leading-5 text-[var(--muted)] md:text-xs">
              TypeScript · Node.js · Python · Go · FastAPI · React · Next.js · RAG · CI/CD · testing
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={content.resumePath}>Download Resume</Button>
              <Button variant="outline" href="#contact">
                Contact
              </Button>
              <Button variant="ghost" onClick={openTerminal}>
                Open Terminal
              </Button>
            </div>
          </div>

          <aside
            ref={progressRef}
            className="hidden font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.16em] text-[var(--muted)] lg:block"
            style={{ "--hero-progress": "0%" } as CSSProperties}
            aria-label="Scroll inspection"
          >
            <div className="border border-white/10 bg-[#05080a]/72 p-4 shadow-[0_18px_56px_rgba(0,0,0,0.34)] backdrop-blur-md">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] text-[var(--muted)]">Scroll inspection</p>
                  <p className="mt-1 text-[var(--fg)]">{selectedStage.detail}</p>
                </div>
                <span className="text-[var(--accent)]">
                  {String(activeStage + 1).padStart(2, "0")} / 04
                </span>
              </div>

              <div className="relative h-px overflow-hidden bg-white/15">
                <div className="h-full w-[var(--hero-progress)] bg-[var(--accent)] shadow-[0_0_18px_rgba(50,245,208,0.7)]" />
              </div>

              <div className="mt-4">
                <div>
                  <p className="normal-case tracking-[-0.02em] text-[var(--fg)] text-sm leading-snug">
                    {selectedStage.title}
                  </p>
                  <p className="mt-2 max-w-2xl normal-case tracking-normal text-[11px] leading-5 text-[var(--fg)]/72">
                    {selectedStage.body}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedStage.evidence.map((item) => (
                      <span
                        key={item}
                        className="border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[8px] text-[var(--fg)]/78"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-2">
                  {heroScrollStages.map((stage, index) => (
                    <button
                      key={stage.label}
                      type="button"
                      onClick={() => setActiveStage(index)}
                      className={`group border px-2.5 py-2 text-left transition duration-300 ${
                        index === activeStage
                          ? "border-[var(--accent)]/60 bg-[var(--accent)]/10 text-[var(--fg)]"
                          : "border-white/10 bg-white/[0.02] text-[var(--muted)] hover:border-white/25 hover:text-[var(--fg)]"
                      }`}
                      aria-label={`Show ${stage.detail}`}
                    >
                      <span className="text-[var(--accent)]">{stage.label}</span>
                      <span className="ml-3 normal-case tracking-normal text-[9px] leading-4">
                        {stage.detail}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
