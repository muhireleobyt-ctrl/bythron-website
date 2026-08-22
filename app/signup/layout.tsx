import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your Track IQ account to start tracking vehicles, fleets, and assets.",
  robots: { index: false, follow: false },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
