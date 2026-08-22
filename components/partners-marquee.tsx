import { partners } from "@/lib/data/misc";

export function PartnersMarquee() {
  const doubled = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-16">
        {doubled.map((name, i) => (
          <span key={i} className="shrink-0 text-lg font-semibold text-muted-foreground/60 whitespace-nowrap">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
