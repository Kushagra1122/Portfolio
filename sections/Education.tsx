import { content } from "@/content/site";

export function Education() {
  return (
    <section
      id="education"
      className="px-5 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {content.education.map((edu) => (
          <div
            key={edu.school}
            className="grid gap-6 border-y border-[var(--line)] py-8 md:grid-cols-[0.32fr_1fr_0.24fr] md:items-center"
          >
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
              Education
            </p>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-[-0.04em] text-[var(--fg)] md:text-4xl">
                {edu.school}
              </h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">{edu.degree}</p>
            </div>
            <div className="text-left md:text-right">
              <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
                {edu.period}
              </p>
              <p className="mt-2 text-sm text-[var(--fg)]">{edu.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
