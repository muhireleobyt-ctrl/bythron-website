"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendNewsletterSignup } from "@/lib/emailjs";
import { toast } from "sonner";

const schema = z.object({ email: z.string().email("Enter a valid email address") });
type FormValues = z.infer<typeof schema>;

export function NewsletterForm() {
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { email: "" } });

  async function onSubmit(values: FormValues) {
    const result = await sendNewsletterSignup(values.email);
    if (result.success) {
      toast.success("You're subscribed! Watch your inbox for Bythron updates.");
      form.reset();
    } else {
      toast.error("Something went wrong. Please try again shortly.");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <Input
        type="email"
        placeholder="you@company.com"
        className="h-12 rounded-full bg-background"
        {...form.register("email")}
      />
      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="btn-gradient h-12 shrink-0 rounded-full border-0 text-white"
      >
        {form.formState.isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : (
          <>
            Subscribe <ArrowRight className="ml-1.5 h-4 w-4" />
          </>
        )}
      </Button>
      {form.formState.errors.email && (
        <p className="text-xs text-destructive sm:absolute sm:mt-14">{form.formState.errors.email.message}</p>
      )}
    </form>
  );
}
