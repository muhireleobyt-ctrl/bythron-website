import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function CtaSection({
  title = "Ready to know where everything is, every second?",
  description = "Join hundreds of businesses across Rwanda already using Track IQ to protect their vehicles, fleets, and assets.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="container">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-secondary px-8 py-16 text-center sm:px-16 sm:py-20">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 text-pretty">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="xl" asChild className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto">
              <Link href="/demo">
                Start Tracking
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              asChild
              className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:w-auto"
            >
              <a href={siteConfig.contact.phoneHref}>
                <PhoneCall className="mr-1 h-4 w-4" />
                Talk to Sales
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
