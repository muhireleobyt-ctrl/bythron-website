import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

import { Icon } from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Device } from "@/lib/data/devices";
import type { Service } from "@/lib/data/services";
import type { Industry } from "@/lib/data/industries";
import type { Testimonial } from "@/lib/data/testimonials";

export function DeviceCard({ device }: { device: Device }) {
  return (
    <Link
      href={`/devices/${device.slug}`}
      className="card-lift group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-7"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15">
        <Icon name={device.icon} className="h-7 w-7 text-primary" />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{device.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{device.tagline}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {device.idealFor.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="rounded-full font-normal text-muted-foreground">
            {tag}
          </Badge>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        View device details
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-lift group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-7"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15">
        <Icon name={service.icon} className="h-7 w-7 text-primary" />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.tagline}</p>
      <ul className="mt-5 space-y-2">
        {service.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
            {f}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Explore this service
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="card-lift flex flex-col items-start gap-3 rounded-2xl border bg-card p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
        <Icon name={industry.icon} className="h-5 w-5 text-primary" />
      </div>
      <h3 className="font-semibold">{industry.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
    </div>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border bg-card p-7 shadow-soft">
      <div>
        <div className="flex gap-0.5 text-warning">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-4 text-base leading-relaxed text-foreground/90">&ldquo;{testimonial.quote}&rdquo;</p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <Avatar>
          <AvatarFallback>{testimonial.initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
