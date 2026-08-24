import { Briefcase, GraduationCap } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "./data";
import { SectionHeading } from "./SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="relative border-y border-border/60 bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Journey" title="Experience &" accent="education." />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 font-display text-sm tracking-[0.2em] text-muted-foreground uppercase">
              <Briefcase className="size-4 text-ion" /> Experience
            </h3>
            <div className="mt-7 space-y-6">
              {EXPERIENCE.map((e) => (
                <div key={e.role} className="reveal edge-card rounded-3xl p-7">
                  <p className="font-mono text-xs text-ion">{e.period}</p>
                  <h4 className="mt-3 font-display text-xl font-semibold">{e.role}</h4>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                  <ul className="mt-5 space-y-3">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-display text-sm tracking-[0.2em] text-muted-foreground uppercase">
              <GraduationCap className="size-4 text-ion" /> Education
            </h3>
            <ol className="relative mt-7 space-y-6 border-l border-border pl-7">
              {EDUCATION.map((e, i) => (
                <li
                  key={e.title}
                  className="reveal relative"
                  style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
                >
                  <span
                    className="absolute top-2 -left-[35px] size-2.5 rounded-full bg-ion shadow-[0_0_0_4px_color-mix(in_oklab,var(--ion)_20%,transparent)]"
                    aria-hidden
                  />
                  <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                  <h4 className="mt-2 font-display text-lg font-semibold">{e.title}</h4>
                  <p className="text-sm text-foreground/80">{e.org}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
