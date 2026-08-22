import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, PlayCircle, ShieldCheck, Wifi, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { StatCounter } from "@/components/stat-counter";
import { RwandaMap } from "@/components/rwanda-map";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { DeviceCard, IndustryCard, ServiceCard, TestimonialCard } from "@/components/cards";
import { PricingCard } from "@/components/pricing";
import { FaqAccordion } from "@/components/faq-section";
import { PartnersMarquee } from "@/components/partners-marquee";
import { CtaSection } from "@/components/cta-section";

import { devices } from "@/lib/data/devices";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { testimonials } from "@/lib/data/testimonials";
import { plans } from "@/lib/data/pricing";
import { homeFaqs } from "@/lib/data/faqs";
import { stats, whyBythron, howItWorks } from "@/lib/data/misc";

export const metadata: Metadata = {
  title: "Bythron — Know Every Move. Anytime. Anywhere.",
  description:
    "Bythron helps businesses and individuals monitor vehicles, motorcycles, assets, pets, wildlife, fleets, and equipment in real time using intelligent GPS technology built for Africa. Data hosted securely in Rwanda.",
};

const whyTrackIQ = [
  { icon: "Radar", title: "Real-Time Live Tracking", description: "See every vehicle, asset, or device update its position on the map every few seconds." },
  { icon: "BellRing", title: "Instant Smart Alerts", description: "Geofence breaches, speeding, low battery, and unauthorized movement — pushed to you instantly." },
  { icon: "BarChart3", title: "Actionable Analytics", description: "Turn raw location data into fuel, driver, and utilization reports that actually save money." },
  { icon: "WifiOff", title: "Works Offline, Syncs Later", description: "Devices keep logging in low-signal areas and sync automatically once connectivity returns." },
  { icon: "Fingerprint", title: "Role-Based Access", description: "Give each teammate exactly the visibility they need — from viewer to full administrator." },
  { icon: "Server", title: "Hosted in Rwanda", description: "Your data stays on local infrastructure — faster, more compliant, and fully under your control." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-mesh">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="container relative py-20 sm:py-28 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium shadow-soft">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse-slow" />
                  Trusted by 480+ businesses across Rwanda
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
                  Track Everything.
                  <br />
                  <span className="text-gradient">Protect What Matters.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                  Bythron helps businesses and individuals monitor vehicles, motorcycles, assets, pets, wildlife,
                  fleets, and equipment in real time using intelligent GPS technology built for Africa.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button size="xl" className="btn-gradient border-0 text-white" asChild>
                    <Link href="/demo">
                      Start Tracking <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="xl" variant="outline" asChild>
                    <Link href="/our-app">
                      <PlayCircle className="mr-1 h-4 w-4" />
                      Book a Demo
                    </Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" /> Data hosted in Rwanda
                  </span>
                  <span className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-primary" /> Works in low-signal areas
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" /> Live in under 24 hours
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delay={0.2} className="relative z-10">
                <DashboardMockup />
              </Reveal>
              <div className="pointer-events-none absolute -right-16 -top-16 hidden h-72 w-72 opacity-70 lg:block xl:-right-24">
                <RwandaMap className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y bg-card/40">
        <div className="container grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                <StatCounter value={s.value} suffix={s.suffix} isDecimal={s.isDecimal} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BYTHRON */}
      <section className="container py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Why Bythron"
            title="Built in Rwanda. Engineered for reliability."
            description="We're not a foreign reseller — we're a local team that understands the terrain, the network conditions, and the customers we serve."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyBythron.slice(0, 10).map((item, i) => (
            <Reveal key={item.title} delay={(i % 5) * 0.05} className={i >= 5 ? "lg:col-span-1" : ""}>
              <div className="card-lift h-full rounded-2xl border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon name={item.icon} className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY TRACK IQ */}
      <section className="bg-card/40 py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Why Track IQ"
              title="One platform. Every kind of tracking."
              description="Track IQ is the intelligent core behind every Bythron device — from a single motorcycle to a national fleet."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyTrackIQ.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="card-lift h-full rounded-2xl border bg-card p-7">
                  <Icon name={item.icon} className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/our-app">
                Explore the Track IQ App <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* DEVICE CATEGORIES */}
      <section className="container py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Devices & Products"
            title="A tracker for everything you need to protect."
            description="From company fleets to family pets, our device lineup covers every use case with hardware built for African conditions."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {devices.map((device, i) => (
            <Reveal key={device.slug} delay={(i % 3) * 0.08}>
              <DeviceCard device={device} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Button className="btn-gradient border-0 text-white" asChild>
            <Link href="/devices">
              View All Devices & Products <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-card/40 py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Industries We Serve"
              title="Purpose-built for how Rwanda actually works."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-7">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 7) * 0.04}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container py-24">
        <Reveal>
          <SectionHeading eyebrow="How It Works" title="From box to live dashboard in four simple steps." />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1} className="relative">
              <span className="text-5xl font-bold text-primary/15">{step.step}</span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              {i < howItWorks.length - 1 && (
                <div className="absolute right-0 top-6 hidden h-px w-8 translate-x-full bg-border lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-card/40 py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Beyond hardware — complete tracking solutions."
              description="Every service is built on Track IQ and tailored to a specific operational challenge."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button variant="outline" asChild>
              <Link href="/services">
                View All Services <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-24">
        <Reveal>
          <SectionHeading eyebrow="Customer Stories" title="Businesses across Rwanda trust Bythron." />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="bg-card/40 py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Simple, transparent pricing that scales with you."
              description="No hidden fees. No long-term lock-in. Cancel or scale anytime."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <PricingCard plan={plan} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link href="/pricing" className="text-sm font-semibold text-primary hover:underline">
              See full plan comparison &amp; FAQs →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-24">
        <Reveal>
          <SectionHeading eyebrow="FAQs" title="Answers to what businesses ask us most." />
        </Reveal>
        <Reveal delay={0.1} className="mt-14">
          <FaqAccordion faqs={homeFaqs} />
        </Reveal>
      </section>

      {/* PARTNERS */}
      <section className="border-y bg-card/40 py-14">
        <div className="container">
          <p className="text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Trusted by teams working alongside
          </p>
          <div className="mt-8">
            <PartnersMarquee />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <div className="py-24">
        <CtaSection />
      </div>
    </>
  );
}
