import { SKILL_GROUPS } from "./data";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative border-y border-border/60 bg-surface/30 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Toolkit" title="What I build" accent="with.">
          A stack I actually use day to day — not a list of logos.
        </SectionHeading>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.title}
              className="reveal edge-card rounded-3xl p-7"
              style={{ ["--reveal-delay" as string]: `${gi * 110}ms` }}
            >
              <p className="font-mono text-[11px] tracking-[0.3em] text-ion uppercase">
                0{gi + 1}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold">{group.title}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-surface-2/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary/60 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
