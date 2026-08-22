"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail } from "@/lib/emailjs";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Tell us what this is about"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    const result = await sendContactEmail(values);
    if (result.success) {
      toast.success("Message sent! Our team will get back to you within one business day.");
      form.reset();
    } else {
      toast.error("We couldn't send your message. Please try WhatsApp or call us directly.");
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Jean-Paul Habimana" {...form.register("name")} />
          {form.formState.errors.name && <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="you@company.com" {...form.register("email")} />
          {form.formState.errors.email && <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number (optional)</Label>
          <Input id="phone" placeholder="+250 788 000 000" {...form.register("phone")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Fleet tracking for 12 vehicles" {...form.register("subject")} />
          {form.formState.errors.subject && <p className="text-xs text-destructive">{form.formState.errors.subject.message}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" rows={5} placeholder="Tell us what you'd like to track and any questions you have..." {...form.register("message")} />
        {form.formState.errors.message && <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>}
      </div>
      <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="btn-gradient w-full border-0 text-white sm:w-auto">
        {form.formState.isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Send Message <Send className="ml-1.5 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
