import { Button } from "@/components/ui/Button";
import { content } from "@/content/site";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--line)] px-5 pb-24 pt-16 md:px-8 md:pb-28 md:pt-20"
    >
      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_0.46fr] md:items-end">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
            Contact
          </p>
          <h2 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.96] tracking-[-0.065em] text-[var(--fg)] md:text-7xl">
            {content.cta.headline}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
            {content.cta.body}
          </p>
        </div>
        <div className="md:justify-self-end">
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href={`mailto:${content.email}`}>Email</Button>
            <Button variant="outline" href={content.resumePath}>
              Resume
            </Button>
          </div>
          <p className="mt-6 font-[family-name:var(--font-mono)] text-xs leading-6 text-[var(--muted)] md:text-right">
            {content.email}
            <br />
            {content.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
