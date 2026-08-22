import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of Bythron's Track IQ platform and devices.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By purchasing devices from or subscribing to Track IQ, you agree to these Terms of Service and any service-specific agreements provided at the time of purchase.",
  },
  {
    title: "2. Service Description",
    body: "Bythron provides GPS tracking hardware and the Track IQ software platform for monitoring vehicles, assets, and other tracked items. Service availability depends on device connectivity and network conditions.",
  },
  {
    title: "3. Subscriptions & Billing",
    body: "Subscriptions are billed monthly or annually per active device. Plans may be upgraded, downgraded, or cancelled at any time; changes take effect at the next billing cycle.",
  },
  {
    title: "4. Hardware Warranty",
    body: "All Bythron devices carry a manufacturer warranty against defects for the period specified at purchase. Damage from misuse, tampering, or unauthorized modification is not covered.",
  },
  {
    title: "5. Acceptable Use",
    body: "Devices and the Track IQ platform must not be used to track individuals without their knowledge where prohibited by law, or for any unlawful surveillance purpose.",
  },
  {
    title: "6. Limitation of Liability",
    body: "Bythron is not liable for indirect or consequential damages arising from service interruptions, network outages, or third-party connectivity issues beyond our reasonable control.",
  },
  {
    title: "7. Changes to These Terms",
    body: "We may update these terms from time to time. Continued use of the service after changes take effect constitutes acceptance of the revised terms.",
  },
  {
    title: "8. Contact Us",
    body: `Questions about these terms can be directed to ${siteConfig.contact.email}.`,
  },
];

export default function TermsPage() {
  return (
    <section className="container py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026</p>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
