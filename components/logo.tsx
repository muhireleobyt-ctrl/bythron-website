import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, iconOnly = false }: { className?: string; iconOnly?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 shrink-0", className)} aria-label="Bythron home">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-glow">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
          <path
            d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8Z"
            fill="currentColor"
            fillOpacity="0.25"
          />
          <path
            d="M12 2C7.58 2 4 5.58 4 10c0 6 8 12 8 12s8-6 8-12c0-4.42-3.58-8-8-8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="2.6" fill="currentColor" />
        </svg>
      </span>
      {!iconOnly && (
        <span className="text-lg font-bold tracking-tight text-foreground">
          Bythron
        </span>
      )}
    </Link>
  );
}
