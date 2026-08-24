import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="reveal font-mono text-xs tracking-[0.35em] text-muted-foreground uppercase">
        {eyebrow}
      </p>
      <h2
        className="reveal mt-4 text-4xl font-bold sm:text-5xl"
        style={{ ["--reveal-delay" as string]: "80ms" }}
      >
        {title} {accent && <span className="text-ion">{accent}</span>}
      </h2>
      {children && (
        <p
          className="reveal mt-5 text-base leading-relaxed text-muted-foreground"
          style={{ ["--reveal-delay" as string]: "150ms" }}
        >
          {children}
        </p>
      )}
    </div>
  );
}
