import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string }
  | { kind: "ok"; text: string }
  | { kind: "key"; text: string };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "mohammad-raquib-ali" },
  { kind: "cmd", text: "cat stack.json" },
  { kind: "key", text: '  "frontend": ["React", "Redux Toolkit", "Tailwind"],' },
  { kind: "key", text: '  "backend":  ["Node", "Express", "Flask"],' },
  { kind: "key", text: '  "data":     ["MongoDB", "MySQL"],' },
  { kind: "cmd", text: "let's_build" },
  { kind: "out", text: "Always open to exciting opportunities!" },
  { kind: "cmd", text: "npm run build --portfolio" },
  { kind: "out", text: "compiling modules ......... 100%" },
  { kind: "ok", text: "✔ built in 0.42s — ready to hire" },
];

const CHAR_MS = 16;
const LINE_PAUSE = 320;

export function HeroTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (lineIndex >= SCRIPT.length) {
      const restart = window.setTimeout(() => {
        setLineIndex(0);
        setCharCount(0);
      }, 4200);
      return () => window.clearTimeout(restart);
    }

    const line = SCRIPT[lineIndex]!;
    if (charCount < line.text.length) {
      const id = window.setTimeout(
        () => setCharCount((c) => c + 1),
        line.kind === "cmd" ? CHAR_MS * 2.2 : CHAR_MS,
      );
      return () => window.clearTimeout(id);
    }

    const id = window.setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharCount(0);
    }, LINE_PAUSE);
    return () => window.clearTimeout(id);
  }, [lineIndex, charCount]);

  const visible = SCRIPT.slice(0, lineIndex);
  const current = SCRIPT[lineIndex];

  return (
    <div className="relative">
      <div
        className="glow-orb -bottom-10 left-6 -z-10 size-[220px] bg-primary/25 sm:size-[300px]"
        aria-hidden
      />

      <div className="glass-panel relative overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
        {/* window chrome */}
        <div className="flex items-center gap-3 border-b border-border/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-3 rounded-full bg-destructive/70" />
            <span className="size-3 rounded-full bg-primary/60" />
            <span className="size-3 rounded-full bg-ion/70" />
          </div>
          <p className="flex min-w-0 items-center gap-2 font-mono text-[11px] tracking-wide text-muted-foreground">
            <Terminal className="size-3.5 shrink-0" />
            <span className="truncate">raquib@dev — zsh</span>
          </p>

          <div className="ml-auto flex items-center gap-1.5 font-mono text-[13px] text-emerald-500">
            <span className="size-3 rounded-full bg-emerald-500 animate-pulse" />
            <span>online</span>
          </div>
        </div>

        {/* body */}
        <div className="relative min-h-[300px] px-4 py-4 font-mono text-[12px] leading-relaxed sm:min-h-[340px] sm:px-6 sm:py-5 sm:text-[13px]">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-transparent via-primary/8 to-transparent"
            aria-hidden
          />
          {visible.map((l, i) => (
            <TerminalLine key={`${i}-${l.text}`} line={l} text={l.text} />
          ))}
          {current && <TerminalLine line={current} text={current.text.slice(0, charCount)} caret />}
        </div>
      </div>

      <div className="glass-panel absolute -bottom-6 right-3 rounded-2xl px-4 py-3 sm:right-6">
        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          Available for
        </p>
        <p className="font-display text-sm font-semibold">Full-stack roles</p>
      </div>
    </div>
  );
}

function TerminalLine({ line, text, caret }: { line: Line; text: string; caret?: boolean }) {
  const color =
    line.kind === "ok"
      ? "text-primary"
      : line.kind === "key"
        ? "text-foreground/80"
        : line.kind === "cmd"
          ? "text-foreground"
          : "text-muted-foreground";

  return (
    <p className="break-words whitespace-pre-wrap">
      {line.kind === "cmd" && (
        <>
          <span className="text-ion">➜</span>{" "}
          <span className="text-muted-foreground/70">~</span>{" "}
        </>
      )}
      <span className={color}>{text}</span>
      {caret && (
        <span className="text-primary" style={{ animation: "caret 1s step-end infinite" }}>
          ▋
        </span>
      )}
    </p>
  );
}
