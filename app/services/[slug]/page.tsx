import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/cards";
import { FaqAccordion } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { services, getService } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.overview };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="hero-mesh py-16 sm:py-20">
        <div className="container">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>

          <div className="mt-8 grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15">
                <Icon name={service.icon} className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl">{service.name}</h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">{service.tagline}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.overview}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="btn-gradient border-0 text-white" asChild>
                  <Link href="/demo">
                    Book a Demo <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <DashboardMockup />
            </Reveal>
          </div>
        </div>
      </section>

      {/* BENEFITS + FEATURES */}
      <section className="container py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold">Key Benefits</h2>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-bold">What&apos;s Included</h2>
            <ul className="mt-6 space-y-4">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <h2 className="text-2xl font-bold">Built For These Industries</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.industries.map((ind) => (
              <Badge key={ind} variant="secondary" className="rounded-full px-3 py-1.5 font-normal">{ind}</Badge>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-card/40 py-20">
        <div className="container">
          <h2 className="text-center text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-10">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="container py-20">
        <h2 className="text-2xl font-bold">Related Services</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <div className="pb-24">
        <CtaSection
          title={`Ready to bring ${service.shortName} to your operation?`}
          description="Book a free walkthrough and we'll show you exactly how it works with your fleet or assets."
        />
      </div>
    </>
  );
}
