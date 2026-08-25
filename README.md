# Mind&Us

A mental-wellness initiative for Zimbabweans at home and across the
diaspora. This is the Version 1 marketing site, built with Next.js
(App Router) and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SITE_URL` — the production domain, once one is chosen.
  Used for canonical links, `sitemap.xml`, `robots.txt` and Open Graph
  tags.
- `NEXT_PUBLIC_FORMSPREE_ID` — the Formspree form ID backing the
  contact form on `/get-involved`. Create a free form at
  [formspree.io](https://formspree.io) and paste the ID (the part
  after `/f/` in your endpoint URL). Without it, the form shows a
  placeholder message instead of submitting.

## Project structure

- `src/app/` — one route per top-level nav item (`/learn`, `/support`,
  `/schools`, `/about`, `/growth`, `/get-involved`), plus the home
  page.
- `src/components/` — shared `Header`, `Footer`, `MobileMenu`,
  `ContactForm` and the animated `BreathingCircle`.
- `src/lib/` — shared nav data and the site URL helper.

## Production checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain.
- [ ] Set `NEXT_PUBLIC_FORMSPREE_ID` (or swap `ContactForm` for a
      different backend).
- [ ] Confirm verified local crisis-line numbers before publishing —
      `/support` intentionally ships without any, since none were
      confirmed at build time.
- [ ] Review `src/app/sitemap.ts` if routes change.

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new).
Set the environment variables above in the project settings before
going live.
