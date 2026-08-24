import { EXTRAS } from "./data";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="glow-orb top-10 -left-20 -z-10 size-[300px] bg-primary/15" aria-hidden />
      <SectionHeading eyebrow="About me" title="Engineer with a" accent="builder's habit." />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <div className="reveal edge-card rounded-3xl p-7 sm:p-9">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm an IT graduate from Vishnu Institute of Technology who fell for the web the
              moment a first API call returned real data. Since then I've been building
              full-stack applications — authentication flows, live data dashboards, admin
              surfaces — with React, Node and whichever database fits the problem.
            </p>
            <p>
              At Cognizant I work on enterprise applications as a Program Analyst Trainee:
              requirement analysis, coding, testing and production support. That mix taught me
              something side projects can't — how software behaves once real people depend on
              it.
            </p>
            <p className="text-foreground">
              I'm looking for a team where I can keep shipping, keep learning, and take
              ownership of real features.
            </p>
          </div>
        </div>

        <div className="reveal edge-card rounded-3xl p-7" style={{ ["--reveal-delay" as string]: "120ms" }}>
          <h3 className="font-display text-lg font-semibold">Beyond the code</h3>
          <ul className="mt-5 space-y-4">
            {EXTRAS.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ion" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
