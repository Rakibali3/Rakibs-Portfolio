import { useState } from "react";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PROFILE, SOCIALS } from "./data";
import { SectionHeading } from "./SectionHeading";

const SOCIAL_ICONS = { linkedin: Linkedin, github: Github, instagram: Instagram, youtube: Youtube };

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6">
      <div className="glow-orb bottom-0 left-1/3 -z-10 size-[240px] sm:size-[380px] bg-primary/20" aria-hidden />
      <SectionHeading eyebrow="Get in touch" title="Let's build" accent="something.">
        Have a role, a project, or just a question? Drop a line — I reply quickly.
      </SectionHeading>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <form
          className="reveal edge-card rounded-3xl p-7 sm:p-9"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            setSending(true);
            window.setTimeout(() => {
              setSending(false);
              form.reset();
              toast.success("Message ready — I'll get back to you soon!");
            }, 700);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" required placeholder="Jane Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Your email</Label>
              <Input id="email" name="email" type="email" required placeholder="jane@company.com" />
            </div>
          </div>
          <div className="mt-5 grid gap-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea id="message" name="message" required rows={5} placeholder="What are you building?" />
          </div>
          <Button type="submit" variant="ion" size="xl" className="mt-7" disabled={sending}>
            {sending ? "Sending..." : "Send message"} <Send />
          </Button>
        </form>

        <div className="reveal edge-card rounded-3xl p-7" style={{ ["--reveal-delay" as string]: "120ms" }}>
          <h3 className="font-display text-lg font-semibold">Contact details</h3>
          <ul className="mt-6 space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-ion" />
              <span className="text-muted-foreground">{PROFILE.location}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-ion" />
              <a href={`mailto:${PROFILE.email}`} className="min-w-0 break-all text-muted-foreground transition-colors hover:text-foreground">
                {PROFILE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-ion" />
              <a href={`tel:${PROFILE.phone}`} className="text-muted-foreground transition-colors hover:text-foreground">
                {PROFILE.phone}
              </a>
            </li>
          </ul>

          <div className="mt-8 border-t border-border/60 pt-7">
            <h3 className="font-display text-lg font-semibold">Follow me</h3>
            <p className="mt-2 text-sm text-muted-foreground">Find me across the internet.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="group grid size-11 place-items-center rounded-2xl border border-border/70 bg-surface-2/50 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-foreground"
                  >
                    <Icon className="size-[18px] transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
