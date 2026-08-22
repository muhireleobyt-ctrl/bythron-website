import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The logo's pin is Bythron's brand blue, which is close enough in hue to
 * dark mode's blue-tinted surfaces that it loses contrast sitting directly
 * on them. A dark:invert filter "fixed" that but shifted the brand's sky
 * blue / deep navy into orange-pink, which isn't the brand — so instead the
 * mark keeps its real colors always, and gets a small solid gray chip
 * behind it in dark mode only to sit it apart from the surrounding blues.
 * Light mode stays transparent since it already reads clearly there.
 */
export function LogoMark({
  size = 44,
  className,
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full dark:bg-neutral-300 dark:p-[3px] dark:shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.3)]",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/bythron-logo-v2.png"
        alt="Bythron"
        width={size * 2}
        height={size * 2}
        priority={priority}
        className="h-full w-full object-contain"
      />
    </span>
  );
}

export function Logo({
  className,
  iconOnly = false,
  priority = false,
}: {
  className?: string;
  iconOnly?: boolean;
  priority?: boolean;
}) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 shrink-0", className)} aria-label="Bythron home">
      <LogoMark size={44} priority={priority} />
      {!iconOnly && (
        <span className="text-xl font-bold tracking-tight text-foreground">
          Bythron
        </span>
      )}
    </Link>
  );
}
