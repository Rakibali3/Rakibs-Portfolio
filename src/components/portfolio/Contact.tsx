import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PROFILE, SOCIALS } from "./data";
import { SectionHeading } from "./SectionHeading";

const SOCIAL_ICONS = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  youtube: Youtube,
};

export function Contact() {
  const [state, handleSubmit] = useForm("xaewgdpe");

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl overflow-hidden px-4 py-24 sm:px-6"
    >
      <div
        className="glow-orb bottom-0 left-1/3 -z-10 size-[240px] bg-primary/20 sm:size-[380px]"
        aria-hidden
      />

      <SectionHeading
        eyebrow="Get in touch"
        title="Let's build"
        accent="something."
      >
        Have a role, a project, or just a question? Drop a line — I reply quickly.
      </SectionHeading>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Contact Form */}
        <form
          className="reveal edge-card rounded-3xl p-7 sm:p-9"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Name */}
            <div className="grid gap-2">
              <Label htmlFor="name">Your name</Label>

              <Input
                id="name"
                name="name"
                required
                placeholder="Jane Doe"
              />

              <ValidationError
                field="name"
                prefix="Name"
                errors={state.errors}
                className="text-sm text-red-500"
              />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Your email</Label>

              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
              />

              <ValidationError
                field="email"
                prefix="Email"
                errors={state.errors}
                className="text-sm text-red-500"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-5 grid gap-2">
            <Label htmlFor="message">Your message</Label>

            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What are you building?"
            />

            <ValidationError
              field="message"
              prefix="Message"
              errors={state.errors}
              className="text-sm text-red-500"
            />
          </div>

          {/* Form-level error */}
          {state.errors && (
            <ValidationError
              errors={state.errors}
              className="mt-4 text-sm text-red-500"
            />
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="ion"
            size="xl"
            className="mt-7"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send message"}
            <Send />
          </Button>

          {/* Success Message */}
          {state.succeeded && (
            <p className="mt-4 text-sm text-green-500">
              Thanks! Your message has been sent successfully. I'll get back to
              you soon.
            </p>
          )}
        </form>

        {/* Contact Details */}
        <div
          className="reveal edge-card rounded-3xl p-7"
          style={{ ["--reveal-delay" as string]: "120ms" }}
        >
          <h3 className="font-display text-lg font-semibold">
            Contact details
          </h3>

          <ul className="mt-6 space-y-5 text-sm">
            {/* Location */}
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-ion" />

              <span className="text-muted-foreground">
                {PROFILE.location}
              </span>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-ion" />

              <a
                href={`mailto:${PROFILE.email}`}
                className="min-w-0 break-all text-muted-foreground transition-colors hover:text-foreground"
              >
                {PROFILE.email}
              </a>
            </li>

            {/* Phone */}
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-ion" />

              <a
                href={`tel:${PROFILE.phone}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {PROFILE.phone}
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-8 border-t border-border/60 pt-7">
            <h3 className="font-display text-lg font-semibold">
              Follow me
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Find me across the internet.
            </p>

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