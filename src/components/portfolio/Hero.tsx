import { ArrowDownToLine, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/use-typewriter";
import { MARQUEE, PROFILE, STATS, downloadLink } from "./data";
import { HeroTerminal } from "./HeroTerminal";

export function Hero() {
  const typed = useTypewriter(PROFILE.roles);

  return (
    <section id="top" className="relative overflow-x-clip pt-28 pb-16 sm:pt-40">
      <div className="grid-canvas absolute inset-0 -z-10" aria-hidden />
      <div className="glow-orb -top-32 left-1/4 -z-10 size-[420px] bg-primary/30" aria-hidden />
      <div
        className="glow-orb top-40 right-0 -z-10 size-[240px] sm:size-[360px] bg-ion/20"
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="reveal font-mono text-xs tracking-[0.35em] text-muted-foreground uppercase">
            Hi there — welcome
          </p>

          <h1
            className="reveal mt-6 text-[clamp(2.25rem,11vw,3rem)] leading-[0.95] font-bold sm:text-6xl lg:text-7xl"
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            Mohammad
            <br />
            Raquib <span className="text-ion">Ali</span>
          </h1>

          <p
            className="reveal mt-6 font-mono text-base break-words text-muted-foreground sm:text-xl"
            style={{ ["--reveal-delay" as string]: "160ms" }}
          >
            <span className="text-foreground/50">{"> "}</span>
            <span className="text-foreground">{typed}</span>
            <span className="animate-blink text-primary">_</span>
          </p>

          <p
            className="reveal mt-6 max-w-xl text-base leading-relaxed text-muted-foreground"
            style={{ ["--reveal-delay" as string]: "220ms" }}
          >
           Previously worked at Cognizant, building enterprise applications and strengthening my full-stack engineering skills.
          </p>

          <div
            className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            style={{ ["--reveal-delay" as string]: "300ms" }}
          >
            <Button asChild variant="ion" size="xl">
              <a href={downloadLink} target="_blank" rel="noopener noreferrer">
                Download CV <ArrowDownToLine />
              </a>
            </Button>
            <Button asChild variant="outlineIon" size="xl">
              <a href="#work">
                See my work <ArrowUpRight />
              </a>
            </Button>
          </div>

          <p
            className="reveal mt-8 flex items-center gap-2 text-sm text-muted-foreground"
            style={{ ["--reveal-delay" as string]: "360ms" }}
          >
            <MapPin className="size-4 text-ion" />
            {PROFILE.location}
          </p>
        </div>

        <div className="reveal relative" style={{ ["--reveal-delay" as string]: "200ms" }}>
          <HeroTerminal />
        </div>
      </div>

      <div className="relative mt-20 border-y border-border/70 py-5">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-xl font-semibold whitespace-nowrap text-muted-foreground/60 sm:text-2xl"
            >
              {item}
              <span className="ml-10 text-primary">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="reveal edge-card rounded-2xl p-5"
            style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
          >
            <p className="font-display text-3xl font-bold text-ion">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
