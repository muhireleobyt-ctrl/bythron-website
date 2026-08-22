import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Battery, CheckCircle2, MapPinned, Radio, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { DeviceCard } from "@/components/cards";
import { CtaSection } from "@/components/cta-section";
import { devices, getDevice } from "@/lib/data/devices";

export function generateStaticParams() {
  return devices.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const device = getDevice(slug);
  if (!device) return {};
  return {
    title: device.name,
    description: device.description,
  };
}

export default async function DeviceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const device = getDevice(slug);
  if (!device) notFound();

  const related = devices.filter((d) => d.slug !== device.slug).slice(0, 3);

  return (
    <>
      <section className="hero-mesh py-16 sm:py-20">
        <div className="container">
          <Link href="/devices" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> All Devices & Products
          </Link>

          <div className="mt-8 grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15">
                <Icon name={device.icon} className="h-8 w-8 text-primary" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-primary">{device.category}</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-balance sm:text-5xl">{device.name}</h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">{device.tagline}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{device.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {device.idealFor.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full font-normal">{tag}</Badge>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="btn-gradient border-0 text-white" asChild>
                  <Link href="/demo">
                    Start Tracking <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>
              <p className="mt-4 text-sm font-medium text-muted-foreground">{device.startingPrice}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card rounded-3xl border p-8 shadow-glow">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key Features</h3>
                <ul className="mt-5 space-y-3">
                  {device.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Technical Specifications</h2>
            <div className="mt-6 divide-y rounded-2xl border">
              {device.specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between px-6 py-4">
                  <span className="text-sm text-muted-foreground">{spec.label}</span>
                  <span className="text-sm font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-4">
            <InfoCard icon={<Battery className="h-5 w-5 text-primary" />} title="Battery Life" value={device.batteryLife} />
            <InfoCard icon={<Radio className="h-5 w-5 text-primary" />} title="Connectivity" value={device.connectivity} />
            <InfoCard icon={<MapPinned className="h-5 w-5 text-primary" />} title="Coverage" value={device.coverage} />
            <InfoCard icon={<Wrench className="h-5 w-5 text-primary" />} title="Installation" value={device.installation} />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <h2 className="text-2xl font-bold">Compatible Sensors & Add-Ons</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {device.compatibleSensors.map((s) => (
              <Badge key={s} className="rounded-full px-3 py-1.5 font-normal" variant="outline">{s}</Badge>
            ))}
          </div>
        </Reveal>
      </section>

      {/* RELATED */}
      <section className="bg-card/40 py-20">
        <div className="container">
          <h2 className="text-2xl font-bold">Explore Other Devices</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((d) => (
              <DeviceCard key={d.slug} device={d} />
            ))}
          </div>
        </div>
      </section>

      <div className="py-24">
        <CtaSection />
      </div>
    </>
  );
}

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-card p-5">
      <div className="flex items-center gap-2.5">
        {icon}
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value}</p>
    </div>
  );
}
