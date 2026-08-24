import { PROFILE } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
        <p className="truncate text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <a href="#top" className="nav-link shrink-0 font-mono text-xs tracking-widest uppercase">
          Back to top
        </a>
      </div>
    </footer>
  );
}
