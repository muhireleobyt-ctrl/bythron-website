import type React from "react";
import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const LucideIcon = (Icons as unknown as Record<string, React.ComponentType<LucideProps>>)[name];
  if (!LucideIcon) return <Icons.CircleDot {...props} />;
  return <LucideIcon {...props} />;
}
