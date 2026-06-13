# Rotary Switch — Ceko Products Website

A Next.js practice project to rebuild my dad's business website for **Ceko Products**, a manufacturer of industrial rotary switches based in New Delhi, India.

## About

This project is a learning exercise in Next.js (App Router) while producing a real, usable website. Most components are designed to work in two modes — a compact version on the homepage and a full version on their dedicated standalone page — controlled via an `isPage` prop.

Built with some help from Claude AI.

## Tech Stack

- **Next.js 14** (App Router)
- **Bits UI / Radix UI** — accessible component primitives
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and scroll effects
- **Leaflet / React-Leaflet** — interactive map on the contact page
- **Lucide React** — icons

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, about summary, 3 featured products, contact form |
| `/about` | Full about page with mission, timeline, and all company pillars |
| `/products` | Full product listing |
| `/contact` | Contact form with map |
| `/policy` | Privacy policy |
| `/terms` | Terms & conditions |

## Key Components

- **Header** — sticky, animated logo with magnetic cursor effect and 3D tilt; animated nav underlines; mobile slide-down menu
- **Hero** — sticky scroll with overlapping slide sections
- **AboutUs** — two-column animated section; shows 4 pillars on home, all 8 on the about page (`isPage` prop)
- **Products** — accepts `start` and `limit` props to display a subset of products
- **ContactForm** — enquiry form with contact info panel; extended layout on the contact page
- **ContactMap** — Leaflet map pinned to the office location

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Notes

- Logo and product images are stored under `public/images/`
- The `isPage` prop pattern is used across `AboutUs` and `ContactForm` to show/hide content depending on whether the component is rendered on the homepage or its own dedicated page
