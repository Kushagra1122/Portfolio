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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-3xl text-center" data-reveal>
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
          Contact
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-tight text-[var(--fg)] md:text-6xl">
          {content.cta.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[var(--muted)]">
          {content.cta.body}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${content.email}`}>Email me</Button>
          <Button variant="outline" href={content.resumePath}>
            Download Resume
          </Button>
        </div>
        <p className="mt-8 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
          {content.email} · {content.phone}
        </p>
      </div>
    </section>
  );
}
