# Nova Cleaning Services — Small Business Landing (Demo)

A **frontend-only** marketing page for a fictional home cleaning company. It targets the typical Fiverr SMB brief: services, pricing cards, trust signals, service area, and a quote form that shows a friendly success state without sending data.

## Live Demo

Coming soon.

## Video demo

Screen recording of the UI in motion (WebM, committed in this repo):

<video src="demo/nova-cleaning-services.webm" controls playsinline muted width="100%"></video>

If the player does not load in your viewer, open [`demo/nova-cleaning-services.webm`](./demo/nova-cleaning-services.webm) locally or via **Raw** on GitHub.

## Features

- Bright, trustworthy UI with sky blue and mint accents
- Three pricing tiers: Basic, Deep Clean, Move-Out
- Before/after sections using CSS placeholders (no external images)
- Quote form with name, service, home size, and message — `preventDefault` + success message
- Testimonials, service area mock, and responsive spacing
- Sticky navigation with clear primary CTA

## Tech Stack

- React
- Vite
- Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

## Possible Future Improvements

- Hook the quote form to email (Formspree, Resend, etc.) or a CRM
- Add scheduling widget and live chat stub
- Blog / tips section for SEO
- Admin-editable pricing via CMS
