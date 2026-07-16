"use client";

import { createReveal } from "@/animations/factories";
import { Button } from "@/components/ui/Button";
import { content } from "@/content/site";
import { useEffect, useRef } from "react";

export function CTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    createReveal({
      id: "cta-reveal",
      trigger: section,
      targets: section.querySelectorAll("[data-reveal]"),
      y: 40,
    });
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden border-t border-white/5 px-5 py-28 md:px-8 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(45,212,191,0.1),transparent_55%)]" />
      <div className="terminal-panel relative mx-auto max-w-4xl overflow-hidden p-6 md:p-10" data-reveal>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
          <span className="text-[var(--accent)]">contact.ready</span>
          <span>available for backend / AI infra roles</span>
        </div>
        <div className="pt-8 text-center">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
            next step
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--fg)] md:text-6xl">
            {content.cta.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[var(--muted)]">
            {content.cta.body}
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${content.email}`}>Email</Button>
          <Button variant="outline" href={content.resumePath}>
            Resume
          </Button>
        </div>
        <p className="mt-8 text-center font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
          {content.email} · {content.phone}
        </p>
      </div>
    </section>
  );
}
