import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Apple,
  ArrowRight,
  Bell,
  Fuel,
  Gauge,
  Map as MapIcon,
  MonitorSmartphone,
  MoonStar,
  Navigation,
  PlayCircle,
  Route,
  ShieldAlert,
  Smartphone,
  Users,
  Wifi,
  Wrench,
  Code2,
  FileBarChart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { DashboardMockup } from "@/components/dashboard-mockup";
import { LiveMap } from "@/components/live-map";
import { CtaSection } from "@/components/cta-section";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const metadata: Metadata = {
  title: "Track IQ App — Live GPS Tracking Platform",
  description:
    "Track IQ is Bythron's intelligent GPS tracking and location management platform: live tracking, geofencing, analytics, fuel monitoring, driver scoring, SOS alerts, and offline synchronization — on Android, iOS, and the web.",
};

const appFeatures = [
  { icon: "Navigation", title: "Live Tracking", description: "Every vehicle and asset updates on the map every few seconds, with full trip playback." },
  { icon: "Bell", title: "Real-Time Notifications", description: "Instant push, SMS, and email alerts for geofence breaches, speeding, and device events." },
  { icon: "Route", title: "Trip History", description: "Replay any journey with timestamps, stops, speed, and distance breakdowns." },
  { icon: "MapIcon", title: "Geofencing", description: "Draw unlimited custom zones and get notified the instant something enters or exits." },
  { icon: "FileBarChart", title: "Analytics & Reports", description: "Exportable reports on utilization, fuel, driver safety, and fleet performance." },
  { icon: "Wrench", title: "Maintenance Reminders", description: "Automated service alerts based on mileage or time, so nothing falls through the cracks." },
  { icon: "Fuel", title: "Fuel Monitoring", description: "Live fuel-level tracking with theft and siphoning detection built in." },
  { icon: "Gauge", title: "Driver Score", description: "Objective safety scores from speed, braking, acceleration, and cornering data." },
  { icon: "ShieldAlert", title: "SOS Alerts", description: "One-tap emergency alerts from any connected device, routed straight to your team." },
  { icon: "Wifi", title: "Offline Synchronization", description: "Devices keep recording in low-signal areas and sync automatically once reconnected." },
];

const platforms = [
  { icon: "Cloud", title: "Cloud Platform", description: "A resilient, always-on backend hosted on infrastructure inside Rwanda." },
  { icon: "Smartphone", title: "Android App", description: "Full-featured native app for fleet managers and drivers on the go." },
  { icon: "Apple", title: "iPhone App", description: "A fast, native iOS experience with the same real-time data as the web." },
  { icon: "MonitorSmartphone", title: "Web Dashboard", description: "The full command center — built for dispatchers and operations teams." },
  { icon: "Code2", title: "Developer API", description: "REST API and webhooks to integrate Track IQ data into your own systems." },
  { icon: "Users", title: "Role Management", description: "Granular, role-based permissions for every team member and department." },
  { icon: "MoonStar", title: "Dark Mode", description: "A polished dark theme for late-night dispatch and low-light environments." },
  { icon: "MapIcon", title: "Interactive Maps", description: "Smooth, responsive maps with clustering, traffic, and satellite views." },
];

export default function OurAppPage() {
  return (
    <>
      <section className="relative overflow-hidden hero-mesh">
        <div className="container relative py-20 sm:py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  Track IQ Platform
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  The intelligent app behind every Bythron device.
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                  Track IQ turns raw GPS signals into live maps, smart alerts, and reports your team can act on —
                  available on Android, iPhone, and the web, and built to keep working when the network doesn&apos;t.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button size="xl" className="btn-gradient border-0 text-white" asChild>
                    <Link href="/demo">
                      Book a Demo <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="xl" variant="outline">
                        <PlayCircle className="mr-1 h-4 w-4" />
                        Watch the App
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black">
                      <DialogTitle className="sr-only">Track IQ Product Walkthrough</DialogTitle>
                      <DialogDescription className="sr-only">
                        A short video walkthrough of the Track IQ platform.
                      </DialogDescription>
                      <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/40 to-secondary/40">
                        <div className="text-center text-white">
                          <PlayCircle className="mx-auto h-14 w-14 opacity-90" />
                          <p className="mt-3 text-sm opacity-80">Product walkthrough video — coming soon</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 rounded-xl border bg-card px-4 py-2.5 text-sm font-medium shadow-soft">
                    <Apple className="h-4 w-4" /> App Store
                  </span>
                  <span className="flex items-center gap-2 rounded-xl border bg-card px-4 py-2.5 text-sm font-medium shadow-soft">
                    <Smartphone className="h-4 w-4" /> Google Play
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <DashboardMockup />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Everything Included"
            title="One app. Complete visibility."
            description="Every Track IQ subscription includes the full feature set below — no add-on tiers required."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {appFeatures.map((f, i) => (
            <Reveal key={f.title} delay={(i % 5) * 0.06}>
              <div className="card-lift h-full rounded-2xl border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <FeatureIcon name={f.icon} />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTERACTIVE MAP */}
      <section className="bg-card/40 py-24">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">Interactive Maps</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              See your entire operation at a glance.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Zoom from a national fleet view down to a single vehicle, with live speed, direction, and status —
              rendered on fast, responsive maps that hold up on mobile networks.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Navigation className="h-4 w-4 text-primary" /> Live position updates every few seconds</li>
              <li className="flex items-center gap-2"><MapIcon className="h-4 w-4 text-primary" /> Clustering for large fleets, satellite &amp; street views</li>
              <li className="flex items-center gap-2"><Route className="h-4 w-4 text-primary" /> Full trip history and route playback</li>
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <LiveMap className="h-[420px] w-full" />
          </Reveal>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="container py-24">
        <Reveal>
          <SectionHeading eyebrow="One Ecosystem" title="Built for every screen your team uses." />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.08}>
              <div className="card-lift h-full rounded-2xl border bg-card p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-secondary/15">
                  <FeatureIcon name={p.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pb-24">
        <CtaSection
          title="See Track IQ running on your own fleet."
          description="Book a free, no-obligation walkthrough with our team — we'll set up a live demo tailored to your vehicles or assets."
        />
      </div>
    </>
  );
}

function FeatureIcon({ name, className = "h-5 w-5 text-primary" }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    Navigation: <Navigation className={className} />,
    Bell: <Bell className={className} />,
    Route: <Route className={className} />,
    MapIcon: <MapIcon className={className} />,
    FileBarChart: <FileBarChart className={className} />,
    Wrench: <Wrench className={className} />,
    Fuel: <Fuel className={className} />,
    Gauge: <Gauge className={className} />,
    ShieldAlert: <ShieldAlert className={className} />,
    Wifi: <Wifi className={className} />,
    Cloud: <MonitorSmartphone className={className} />,
    Smartphone: <Smartphone className={className} />,
    Apple: <Apple className={className} />,
    MonitorSmartphone: <MonitorSmartphone className={className} />,
    Code2: <Code2 className={className} />,
    Users: <Users className={className} />,
    MoonStar: <MoonStar className={className} />,
  };
  return <>{icons[name] ?? null}</>;
}
