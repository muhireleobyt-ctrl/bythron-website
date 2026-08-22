"use client";

import Link from "next/link";
import { ArrowRight, Building2, Mail, User } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RwandaMap } from "@/components/rwanda-map";

export default function SignupPage() {
  return (
    <section className="grid min-h-[calc(100vh-4.5rem)] lg:grid-cols-2">
      <div className="hidden items-center justify-center bg-card/60 p-16 lg:flex">
        <RwandaMap className="h-full max-h-[480px] w-full" />
      </div>

      <div className="flex items-center justify-center px-6 py-16 sm:px-12">
        <div className="w-full max-w-sm">
          <Logo />
          <h1 className="mt-8 text-2xl font-bold tracking-tight">Create your account</h1>
          <p className="mt-2 text-sm text-muted-foreground">Start tracking with Bythron in minutes.</p>

          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="name" placeholder="Jean-Paul Habimana" className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company (optional)</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="company" placeholder="Kigali Express Logistics" className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@company.com" className="pl-9" />
              </div>
            </div>
            <Button type="submit" className="btn-gradient w-full border-0 text-white">
              Create Account <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary hover:underline">Log in</Link>
          </p>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            This is a preview of the Track IQ onboarding experience.{" "}
            <Link href="/demo" className="text-primary hover:underline">Book a demo</Link> and our team will set up your account.
          </p>
        </div>
      </div>
    </section>
  );
}
