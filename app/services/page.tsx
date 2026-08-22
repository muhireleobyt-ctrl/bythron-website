import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From fleet management to cold chain monitoring, explore Bythron's complete suite of GPS-powered tracking services built on the Track IQ platform.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-mesh py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Complete tracking solutions, not just hardware."
              description="Every service below runs on Track IQ and is tailored to a specific operational challenge — from fuel theft to student safety."
            />
          </Reveal>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pb-24">
        <CtaSection
          title="Not sure which service fits your operation?"
          description="Tell us about your business and our team will recommend the right combination of services."
        />
      </div>
    </>
  );
}
