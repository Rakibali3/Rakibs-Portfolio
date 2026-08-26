import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "./data";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6">
      <div className="glow-orb -right-24 top-24 -z-10 size-[220px] sm:size-[340px] bg-ion/15" aria-hidden />
      <SectionHeading eyebrow="Selected work" title="Things I've" accent="Developed.">
        Each project pushed me into something new — auth, live APIs, state at scale, or a
        Python service sitting behind a React front end.
      </SectionHeading>

      <div className="mt-16 divide-y divide-border/70 border-y border-border/70">
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            className="reveal group relative grid gap-6 py-10 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10"
            style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
          >
            <span className="font-mono text-sm text-muted-foreground/70">
              0{i + 1} <span className="hidden md:inline">/ {p.year}</span>
            </span>

            <div className="min-w-0">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-bold transition-colors duration-400 group-hover:text-ion sm:text-3xl">
                  {p.title}
                </h3>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${p.title} source on GitHub`}
                  className="shrink-0 rounded-full border border-border/70 bg-surface p-2.5 text-muted-foreground transition-colors hover:border-ion/50 hover:text-ion"
                >
                  <Github className="size-5" />
                </a>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {p.blurb}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:pt-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/12 px-4 py-2 text-xs text-foreground/90">
                <ArrowUpRight className="size-3.5 text-ion" />
                {p.highlight}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
