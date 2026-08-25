import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PROFILE } from "./data";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled ? "glass-panel shadow-[var(--shadow-lift)]" : "border border-transparent",
        )}
      >
        <a
          href="#top"
          className="font-display text-base font-bold tracking-tight sm:text-lg"
          aria-label="Back to top"
        >
          {PROFILE.short}
          <span className="text-ion">.ali</span>
        </a>

        <div className="hidden items-center gap-8 text-sm md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ion" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Hire me</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-panel mx-auto mt-2 max-w-6xl animate-in fade-in slide-in-from-top-2 rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link">
                {l.label}
              </a>
            ))}
            <Button asChild variant="ion" size="sm">
              <a href="#contact" onClick={() => setOpen(false)}>
                Hire me
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
