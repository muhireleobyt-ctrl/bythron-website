import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

import { Logo } from "@/components/logo";
import { NewsletterForm } from "@/components/newsletter-form";
import { footerNav, siteConfig } from "@/lib/site";

const socialLinks = [
  { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.social.twitter, icon: Twitter, label: "Twitter" },
  { href: siteConfig.social.facebook, icon: Facebook, label: "Facebook" },
  { href: siteConfig.social.instagram, icon: Instagram, label: "Instagram" },
  { href: siteConfig.social.youtube, icon: Youtube, label: "YouTube" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-card/40">
      <div className="container py-16">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 rounded-3xl border bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:flex-row md:items-center lg:p-12">
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold tracking-tight">Stay ahead with Bythron</h3>
            <p className="mt-2 text-muted-foreground">
              Product updates, tracking tips, and stories from Rwandan businesses using Track IQ — straight to your inbox.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Product" links={footerNav.product} />
          <FooterColumn title="Services" links={footerNav.services} />
          <FooterColumn title="Company" links={footerNav.company} />

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={siteConfig.contact.phoneHref} className="hover:text-primary">{siteConfig.contact.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary">{siteConfig.contact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bythron Ltd. All rights reserved. Proudly built in Kigali, Rwanda.
          </p>
          <div className="flex gap-6">
            {footerNav.legal.map((l) => (
              <Link key={l.label} href={l.href} className="text-xs text-muted-foreground hover:text-primary">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
