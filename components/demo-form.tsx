"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sendDemoRequestEmail } from "@/lib/emailjs";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  company: z.string().min(2, "Enter your company or organization"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  fleetSize: z.string().min(1, "Select a fleet size"),
  interest: z.string().min(1, "Select what you'd like to track"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const fleetSizes = ["1 vehicle", "2–5 vehicles", "6–20 vehicles", "21–50 vehicles", "50+ vehicles"];
const interests = [
  "Vehicle GPS Trackers",
  "Motorcycle GPS Trackers",
  "Pet Trackers",
  "Wildlife Trackers",
  "Asset Trackers",
  "Personal GPS Trackers",
  "Fleet Management System",
  "Not sure yet",
];

export function DemoForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", company: "", email: "", phone: "", fleetSize: "", interest: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    const result = await sendDemoRequestEmail(values);
    if (result.success) {
      toast.success("Demo request received! We'll contact you within one business day to schedule.");
      form.reset();
    } else {
      toast.error("We couldn't submit your request. Please call or WhatsApp us directly.");
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
          <Label htmlFor="company">Company / Organization</Label>
          <Input id="company" placeholder="Kigali Express Logistics" {...form.register("company")} />
          {form.formState.errors.company && <p className="text-xs text-destructive">{form.formState.errors.company.message}</p>}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="you@company.com" {...form.register("email")} />
          {form.formState.errors.email && <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+250 788 000 000" {...form.register("phone")} />
          {form.formState.errors.phone && <p className="text-xs text-destructive">{form.formState.errors.phone.message}</p>}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Fleet / Number of Units</Label>
          <Controller
            control={form.control}
            name="fleetSize"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger><SelectValue placeholder="Select a range" /></SelectTrigger>
                <SelectContent>
                  {fleetSizes.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            )}
          />
          {form.formState.errors.fleetSize && <p className="text-xs text-destructive">{form.formState.errors.fleetSize.message}</p>}
        </div>
        <div className="space-y-2">
          <Label>What Would You Like to Track?</Label>
          <Controller
            control={form.control}
            name="interest"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger><SelectValue placeholder="Select an option" /></SelectTrigger>
                <SelectContent>
                  {interests.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            )}
          />
          {form.formState.errors.interest && <p className="text-xs text-destructive">{form.formState.errors.interest.message}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Anything else we should know? (optional)</Label>
        <Textarea id="message" rows={4} placeholder="E.g. we need cold chain monitoring for 6 refrigerated trucks" {...form.register("message")} />
      </div>
      <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="btn-gradient w-full border-0 text-white">
        {form.formState.isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Request My Free Demo <ArrowRight className="ml-1.5 h-4 w-4" />
          </>
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">No commitment required. A Bythron specialist will reach out to schedule your demo.</p>
    </form>
  );
}
