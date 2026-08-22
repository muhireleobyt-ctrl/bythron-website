"use client";

import Link from "next/link";
import { ArrowRight, Lock, Mail } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { DashboardMockup } from "@/components/dashboard-mockup";

export default function LoginPage() {
  return (
    <section className="grid min-h-[calc(100vh-4.5rem)] lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-16 sm:px-12">
        <div className="w-full max-w-sm">
          <Logo />
          <h1 className="mt-8 text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">Log in to your Track IQ dashboard.</p>

          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@company.com" className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-xs font-medium text-primary hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-9" />
              </div>
            </div>
            <Button type="submit" className="btn-gradient w-full border-0 text-white">
              Log In <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>

          <p className="text-center text-sm text-muted-foreground">
            New to Bythron?{" "}
            <Link href="/signup" className="font-semibold text-primary hover:underline">Create an account</Link>
          </p>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            This is a preview of the Track IQ sign-in experience. Full account access is provisioned after onboarding —{" "}
            <Link href="/demo" className="text-primary hover:underline">book a demo</Link> to get started.
          </p>
        </div>
      </div>

      <div className="hidden items-center justify-center bg-gradient-to-br from-primary to-secondary p-16 lg:flex">
        <DashboardMockup />
      </div>
    </section>
  );
}
