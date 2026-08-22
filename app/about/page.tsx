import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CtaSection } from "@/components/cta-section";
import { timeline, team, values, trustPoints } from "@/lib/data/misc";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Bythron is a Rwandan technology company on a mission to make professional GPS tracking affordable, reliable, and accessible across Rwanda and East Africa.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-mesh py-20 sm:py-28">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="About Bythron"
              title="Rwanda's trusted name in GPS tracking and location intelligence."
              description="We started Bythron because Rwandan businesses deserved tracking technology built for their reality — not a repackaged international product with foreign servers and slow support."
            />
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="container py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground text-pretty">
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
            <p className="mt-4">
              Bythron was founded in Kigali by engineers who saw the same problem repeat across the country:
              vehicles disappearing without a trace, fleets bleeding fuel with no visibility, and businesses paying
              premium prices for foreign tracking platforms that were slow, unreliable, and impossible to get support
              from. We set out to build something different — a GPS tracking platform designed, hosted, and
              supported entirely within Rwanda.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Today, Track IQ powers tracking for logistics companies, schools, NGOs, government fleets, and
              individual vehicle owners across the country — with devices that keep recording even where the
              network doesn&apos;t reach, and a support team that answers the phone in Kinyarwanda, English, or
              French.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="bg-card/40 py-20">
        <div className="container grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-2xl border bg-card p-8">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Our Mission</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                To make professional GPS tracking affordable, reliable, and accessible to every business and
                individual across Rwanda and East Africa.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border bg-card p-8">
              <Eye className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                A future where every vehicle, asset, and living thing that matters to an African business or family
                can be protected with world-class location intelligence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border bg-card p-8">
              <Compass className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-xl font-bold">Our Approach</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Local infrastructure, rugged hardware, and a support team that treats every customer relationship as
                long-term, not transactional.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="container py-20">
        <Reveal>
          <SectionHeading eyebrow="What We Believe" title="The values behind every decision we make." />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="card-lift h-full rounded-2xl border bg-card p-6">
                <Icon name={v.icon} className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-card/40 py-20">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow="Our Journey" title="From a Kigali garage to national infrastructure." />
          </Reveal>
          <div className="relative mx-auto mt-16 max-w-2xl">
            <div className="absolute left-[27px] top-0 h-full w-px bg-border sm:left-1/2" />
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.06} className="relative mb-10 flex gap-6 sm:justify-center">
                <div className="flex flex-col items-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <span className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-primary text-sm font-bold text-primary-foreground">
                    {item.year}
                  </span>
                </div>
                <div className="ml-20 rounded-2xl border bg-card p-5 sm:ml-0 sm:w-[calc(50%-3rem)] sm:even:ml-auto">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="container py-20">
        <Reveal>
          <SectionHeading eyebrow="Leadership" title="The team building Rwanda's tracking infrastructure." />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08} className="text-center">
              <Avatar className="mx-auto h-20 w-20 text-lg">
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <h3 className="mt-4 font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TRUST & SECURITY */}
      <section id="security" className="scroll-mt-24 bg-card/40 py-20">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Trust & Security"
              title="Your data, protected like it's ours."
              description="Every Track IQ deployment is built on infrastructure and practices designed for enterprise, government, and NGO-grade trust."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.08}>
                <div className="card-lift h-full rounded-2xl border bg-card p-6">
                  <Icon name={t.icon} className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="container py-20">
        <Reveal className="mx-auto max-w-3xl rounded-3xl border bg-gradient-to-br from-primary/5 to-secondary/5 p-10 text-center">
          <h2 className="text-2xl font-bold">Looking Ahead</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We&apos;re investing in AI-assisted route optimization, predictive maintenance, expanded satellite fallback
            for remote regions, and deeper integrations with the ERP and fuel-card systems Rwandan businesses already
            use — all without ever moving your data outside Rwanda.
          </p>
          <Button className="mt-6 btn-gradient border-0 text-white" asChild>
            <Link href="/contact">
              Talk to Our Team <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </section>

      <div className="pb-24">
        <CtaSection />
      </div>
    </>
  );
}
