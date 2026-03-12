# KNAKKE® Landing Page

Landing Page für den patentierten Zollstock mit Durchmessermessung.

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animationen)
- **Vercel** (Deployment)

## Setup

```bash
npm install
npm run dev
```

Läuft auf [http://localhost:3000](http://localhost:3000)

## Deployment auf Vercel

1. GitHub Repository erstellen
2. Code pushen
3. Auf vercel.com neues Projekt importieren
4. Domain verbinden

## Bilder

Die Produktbilder werden aktuell von CloudFront geladen. Für Produktion die Bilder herunterladen und in `/public/images/` ablegen, dann die URLs in `lib/constants.ts` anpassen.

## Kontaktformular

Das Formular ist aktuell clientseitig. Für Produktion:
- Option A: Vercel Serverless Function + E-Mail-Service (z.B. Resend)
- Option B: n8n Webhook
- Option C: Formspree / Getform
