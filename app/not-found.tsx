import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
        <Compass className="h-8 w-8 text-primary" />
      </div>
      <h1 className="mt-6 text-5xl font-bold tracking-tight">404</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Looks like this page wandered off the map. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button className="btn-gradient border-0 text-white" asChild>
          <Link href="/">
            Back to Home <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </section>
  );
}
