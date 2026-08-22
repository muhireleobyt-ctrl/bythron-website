import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { DeviceCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import { devices } from "@/lib/data/devices";

export const metadata: Metadata = {
  title: "Devices & Products",
  description:
    "Explore Bythron's full lineup of GPS tracking hardware — vehicle trackers, motorcycle trackers, pet trackers, wildlife collars, asset trackers, and personal safety devices.",
};

export default function DevicesPage() {
  return (
    <>
      <section className="hero-mesh py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Devices & Products"
              title="Hardware built for every kind of tracking."
              description="Every device is engineered for East African conditions — rugged, reliable, and backed by free professional installation."
            />
          </Reveal>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {devices.map((device, i) => (
            <Reveal key={device.slug} delay={(i % 3) * 0.08}>
              <DeviceCard device={device} />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pb-24">
        <CtaSection
          title="Not sure which device fits your use case?"
          description="Tell us what you need to track and our team will recommend the right hardware and plan."
        />
      </div>
    </>
  );
}
