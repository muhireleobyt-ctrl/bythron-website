import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone, ShieldAlert } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { LiveMap } from "@/components/live-map";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bythron — call, WhatsApp, email, or visit our Kigali office. Our local support team responds fast, in Kinyarwanda, English, or French.",
};

const channels = [
  { icon: Phone, title: "Call Us", value: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
  { icon: MessageCircle, title: "WhatsApp", value: siteConfig.contact.whatsapp, href: siteConfig.contact.whatsappHref },
  { icon: Mail, title: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: MapPin, title: "Visit Us", value: siteConfig.contact.address, href: "#map" },
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-mesh py-20 sm:py-24">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Contact Us"
              title="Let's talk about what you need to track."
              description="Whether you're outfitting a single car or a national fleet, our Kigali-based team responds within one business day."
            />
          </Reveal>
        </div>
      </section>

      <section className="container pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-lift block h-full rounded-2xl border bg-card p-6"
              >
                <c.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-sm font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground break-words">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3 rounded-3xl border bg-card p-8 sm:p-10">
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <p className="mt-2 text-muted-foreground">Fill out the form and our sales or support team will follow up shortly.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-2.5">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Business Hours</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{siteConfig.contact.hours}</p>
            </div>
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold">Emergency Support</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Theft recovery or SOS assistance outside business hours: {" "}
                <a href={`tel:${siteConfig.contact.emergencyLine.replace(/\s/g, "")}`} className="font-medium text-destructive">
                  {siteConfig.contact.emergencyLine}
                </a>
              </p>
            </div>
            <div id="map">
              <LiveMap className="h-64 w-full" />
              <p className="mt-2 text-xs text-muted-foreground">Kigali Heights, Kacyiru — our head office and technical support center.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
