# Bythron — Marketing Website

**Know Every Move. Anytime. Anywhere.**

The production website for **Bythron**, a Rwandan GPS tracking and location intelligence company, and its flagship platform **Track IQ**. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui primitives, and Framer Motion.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, React 19, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@theme` + JS config bridge via `@config`) |
| UI Primitives | Radix UI, hand-rolled shadcn-style components |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Email Delivery | EmailJS (client-side, no backend required) |
| Charts | Recharts |
| Maps | React Leaflet / OpenStreetMap (live map), custom animated SVG (Rwanda hero graphic) |
| Icons | lucide-react |
| Toasts | Sonner |

No backend service is required to run this site — it is a fully static-generatable marketing site. Forms submit via EmailJS directly from the browser.

## Getting Started

```bash
npm install --legacy-peer-deps   # --legacy-peer-deps needed: some Radix/vaul peer ranges lag React 19
cp .env.example .env.local       # fill in EmailJS credentials (see below)
npm run dev                      # http://localhost:3000
```

```bash
npm run build   # production build — statically prerenders all 39 routes
npm run start   # serve the production build
npm run lint
```

## Project Structure

```
app/
  layout.tsx              Root layout: fonts, theme provider, navbar/footer, JSON-LD, metadata
  page.tsx                Home
  our-app/                Track IQ platform page
  devices/                Device & product catalog
    [slug]/                 Dynamic device detail (generateStaticParams)
  services/                Services catalog
    [slug]/                 Dynamic service detail (generateStaticParams)
  about/                  Company story, mission, timeline, leadership, Trust & Security
  contact/                Contact form, channels, map, business hours
  demo/                   "Book a Demo" lead-capture page
  pricing/                Plans + pricing FAQs
  blog/                   Blog index + [slug] detail (CMS-ready structure)
  login/ signup/          Authentication UI (presentational preview — see note below)
  privacy/ terms/         Legal pages
  sitemap.ts robots.ts manifest.ts   SEO/PWA metadata routes
  icon.tsx opengraph-image.tsx       Generated favicon & OG image (next/og)

components/
  ui/                     Low-level primitives (button, card, accordion, sheet, dialog, ...)
  navbar.tsx footer.tsx   Site chrome
  cards.tsx               DeviceCard, ServiceCard, IndustryCard, TestimonialCard
  dashboard-mockup.tsx    Recharts-powered fleet dashboard illustration
  live-map.tsx            Client-only Leaflet map (dynamic import, ssr:false)
  rwanda-map.tsx          Decorative animated SVG map for the hero
  contact-form.tsx demo-form.tsx newsletter-form.tsx   Zod-validated forms wired to EmailJS

lib/
  site.ts                 Site-wide config: nav items, contact info, social links
  emailjs.ts               EmailJS send helpers
  data/                   Content as typed data — the CMS-ready layer (see below)
```

## Content = Data, Not Hardcoded JSX (CMS-Ready)

Every repeatable content type — devices, services, industries, testimonials, FAQs, pricing plans, blog posts, team, timeline — lives in a typed file under `lib/data/`. Pages import this data and render it; they contain no copy of their own for these sections.

This means:
- Adding a 9th service or a 7th device category is a data change, not a new page.
- Swapping this for a real CMS (Sanity, Contentful, a headless WordPress, or a Prisma + PostgreSQL backend) later means replacing the contents of `lib/data/*.ts` with fetch calls that return the same shapes — the components and routes don't change.
- `app/devices/[slug]/page.tsx` and `app/services/[slug]/page.tsx` already use `generateStaticParams`, so new entries are automatically statically generated at build time.

## Design System

- Colors are defined once as HSL CSS custom properties in `app/globals.css` (`:root` / `.dark`), matching the palette already used in Bythron's mobile app (`#0286FF` primary blue). Tailwind reads them via `@theme`.
- Tailwind v4 is configured with **both** the native `@theme` block and a legacy-style `tailwind.config.ts` (extended color scale, container, keyframes, the `tailwindcss-animate` plugin) bridged in via `@config "../tailwind.config.ts";` at the top of `globals.css`. Both are required — don't remove the `@config` line or the extended tokens (container padding, `accordion-down`/`accordion-up` keyframes, `primary-50…900`, chart colors) silently stop applying.
- Dark mode uses the `class` strategy via `next-themes`, toggled from `components/theme-toggle.tsx`.

## Forms & Email (EmailJS)

Three forms submit through [EmailJS](https://www.emailjs.com/) directly from the browser — no server required:

1. Contact form (`/contact`)
2. Demo request form (`/demo`)
3. Newsletter signup (footer, every page)

To wire these up for real:
1. Create a free EmailJS account and an email service (e.g. connect a Gmail inbox).
2. Create three templates (contact, demo, newsletter) — see `lib/emailjs.ts` for the exact `templateParams` each function sends.
3. Copy `.env.example` to `.env.local` and fill in the service ID, template IDs, and public key.

Until configured, submissions will fail gracefully with a toast asking the user to call or WhatsApp instead — they will not crash the page.

## Authentication UI

`/login` and `/signup` are **presentational previews** of the Track IQ sign-in experience (styled forms, no backend). They are marked `robots: noindex` and both explain to the visitor that full account provisioning happens after onboarding via `/demo`. Wiring these to a real auth provider (NextAuth, Clerk, Supabase Auth, or a custom NestJS API) is a drop-in replacement of the `onSubmit` handler — the UI is ready.

## SEO

- Per-page `metadata` exports (title templates, descriptions) on every route.
- `app/sitemap.ts` enumerates all static routes plus every device, service, and blog post.
- `app/robots.ts` points crawlers at the sitemap.
- `app/opengraph-image.tsx` and `app/icon.tsx` generate the OG image and favicon at build time with `next/og` — no static image assets to keep in sync.
- JSON-LD `Organization` and `SoftwareApplication` structured data is injected in the root layout.
- `app/manifest.ts` provides a PWA-ready web manifest.

Before going live, update `siteConfig.url` in `lib/site.ts` to the real production domain — it feeds `metadataBase`, the sitemap, canonical URLs, and structured data.

## Known Follow-Ups

- Replace placeholder contact details, team names, and addresses in `lib/site.ts` and `lib/data/misc.ts` with real Bythron information.
- Replace the demo-video placeholder in `/our-app` with a real embedded video once produced.
- `npm audit` reports vulnerabilities inherited from older transitive dependencies (Radix/embla-carousel range); run `npm audit fix` and re-test before a security-sensitive deployment.
- The Rwanda map on the homepage/hero is a stylized decorative illustration, not a survey-accurate boundary — fine for brand purposes, but don't reuse it as a factual map.

## Deployment

### Vercel (recommended)
1. Push this repository to GitHub/GitLab.
2. Import it in [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy — Next.js App Router projects work out of the box with zero extra config.

### Railway
`railway.toml` and `nixpacks.toml` are already configured (npm install → `next build` → `next start`). Connect the repo in Railway, add the same environment variables, and deploy.

### Any Node host
```bash
npm install --legacy-peer-deps
npm run build
npm run start   # serves on port 3000 by default; set PORT to override
```

---

© Bythron Ltd. Built in Kigali, Rwanda.
