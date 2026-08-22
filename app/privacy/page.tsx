import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bythron collects, stores, and protects your data across the Track IQ platform.",
};

const sections = [
  {
    title: "1. Data We Collect",
    body: "We collect location data from your registered devices, account information (name, contact details, company), and usage data from the Track IQ web and mobile applications necessary to provide the service.",
  },
  {
    title: "2. Where Your Data Lives",
    body: "All customer data is stored on servers physically located within Rwanda. We do not transfer location or account data to servers outside Rwanda except where required for essential third-party integrations you explicitly enable.",
  },
  {
    title: "3. How We Use Your Data",
    body: "Data is used exclusively to provide and improve the Track IQ service: displaying live locations, generating reports, sending alerts, and providing customer support. We do not sell customer data to third parties.",
  },
  {
    title: "4. Data Security",
    body: "Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Access is governed by role-based permissions, and all administrative actions are logged and auditable.",
  },
  {
    title: "5. Data Retention & Ownership",
    body: "You own your data. Location history, reports, and account data can be exported at any time, and are deleted from our systems within 30 days of account closure upon request.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting our support team.",
  },
  {
    title: "7. Contact Us",
    body: `Questions about this policy can be directed to ${siteConfig.contact.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="container py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026</p>
        <div className="mt-10 space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
