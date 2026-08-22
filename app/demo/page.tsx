import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { DemoForm } from "@/components/demo-form";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Request a free, no-obligation Track IQ demo. See live GPS tracking, geofencing, and fleet analytics set up for your own vehicles or assets.",
};

const highlights = [
  "A live walkthrough tailored to your vehicles, fleet, or assets",
  "Straight answers on pricing and installation timelines",
  "No commitment or credit card required",
  "Available in Kinyarwanda, English, or French",
];

export default function DemoPage() {
  return (
    <section className="hero-mesh py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Book a Demo
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              See Track IQ live, on the things you actually track.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              Tell us a bit about your fleet or assets and we&apos;ll schedule a free walkthrough — in person in
              Kigali or over a call — with one of our specialists.
            </p>
            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="rounded-3xl border bg-card p-8 shadow-glow sm:p-10">
            <DemoForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
