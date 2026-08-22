import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { PricingCard } from "@/components/pricing";
import { FaqAccordion } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { plans } from "@/lib/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent Track IQ pricing for individuals, businesses, and enterprise fleets — with no long-term lock-in.",
};

const pricingFaqs = [
  { question: "Does the price include the hardware device?", answer: "Device hardware is billed separately as a one-time purchase; the monthly price covers the Track IQ software subscription, data, and support for that device." },
  { question: "Can I mix device types on one plan?", answer: "Yes — vehicles, motos, assets, and personal trackers can all sit on the same account and plan tier, billed per active device." },
  { question: "Is there a setup or installation fee?", answer: "Professional installation for vehicle and motorcycle trackers is included at no extra cost across all plans." },
  { question: "What payment methods do you accept?", answer: "We accept mobile money, bank transfer, and major cards for both monthly and annual billing." },
  { question: "Can I upgrade or downgrade later?", answer: "Yes, you can change plans or add devices at any time — changes are prorated on your next billing cycle." },
];

export default function PricingPage() {
  return (
    <>
      <section className="hero-mesh py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Pricing"
              title="Plans built for East African fleets, not Silicon Valley budgets."
              description="Pay per device, per month. No hidden fees, no long-term lock-in — scale up or down whenever you need to."
            />
          </Reveal>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card/40 py-20">
        <div className="container">
          <Reveal>
            <SectionHeading eyebrow="Pricing FAQs" title="Common questions about billing and plans." />
          </Reveal>
          <Reveal delay={0.1} className="mt-14">
            <FaqAccordion faqs={pricingFaqs} />
          </Reveal>
        </div>
      </section>

      <div className="py-24">
        <CtaSection />
      </div>
    </>
  );
}
