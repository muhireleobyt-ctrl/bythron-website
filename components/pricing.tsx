import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Plan } from "@/lib/data/pricing";

export function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl border p-8",
        plan.highlighted
          ? "border-primary/40 bg-gradient-to-b from-primary/5 to-transparent shadow-glow lg:-translate-y-4"
          : "bg-card"
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
        <span className="text-sm text-muted-foreground">{plan.period}</span>
      </div>
      <Button
        asChild
        className={cn("mt-6 rounded-full", plan.highlighted ? "btn-gradient border-0 text-white" : "")}
        variant={plan.highlighted ? "default" : "outline"}
      >
        <Link href={plan.name === "Enterprise" ? "/contact" : "/demo"}>{plan.cta}</Link>
      </Button>
      <ul className="mt-8 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
