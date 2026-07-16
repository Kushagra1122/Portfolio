import { SectionHeading } from "@/components/ui/SectionHeading";
import { content } from "@/content/site";

export function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden px-5 py-24 md:px-8 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeading
            eyebrow={content.story.eyebrow}
            title={content.story.headline}
            className="mb-0"
          />
          <div className="max-w-3xl space-y-6 border-l border-[var(--line)] pl-6 text-lg leading-8 text-[var(--muted)] md:text-xl md:leading-9">
            {content.story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-y border-[var(--line)] py-10 md:grid-cols-3">
          {[
            [
              "Shape",
              "Clarify the system boundary, data model, and failure behavior before adding surface area.",
            ],
            [
              "Build",
              "Implement APIs, workers, sync paths, and product flows with typed contracts and reviewable seams.",
            ],
            [
              "Ship",
              "Cover deployment, validation, debugging, and handoff details so the work survives production change.",
            ],
          ].map(([title, body]) => (
            <article
              key={title}
              className="max-w-sm"
            >
              <p className="font-[family-name:var(--font-display)] text-3xl leading-none tracking-[-0.05em] text-[var(--fg)]">
                {title}
              </p>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={content.resumePath}
            download
            className="text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Download full resume →
          </a>
          <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--muted-2)]">
            TypeScript · React · Next.js · Node.js · Python · Go · FastAPI · CI/CD · QA
          </div>
        </div>
      </div>
    </section>
  );
}
