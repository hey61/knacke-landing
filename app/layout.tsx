import type { Metadata } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'
import CookieConsent from '@/components/CookieConsent'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KNAKKE® – Der patentierte Zollstock mit Durchmessermessung | Werbeartikel bedrucken',
  description:
    'KNAKKE® – Der einzige patentierte Zollstock mit Durchmessermessung. Individuell bedruckt als Premium-Werbeartikel für Handwerk, SHK, Elektro und Industrie. Zollstock bedrucken mit echtem Mehrwert.',
  keywords: [
    'Zollstock bedrucken',
    'Werbeartikel Handwerk',
    'Meterstab mit Logo',
    'Gliedermaßstab bedrucken',
    'Durchmesser messen',
    'KNAKKE',
    'Werbemittel',
    'Zollstock Werbeartikel',
    'patentierter Zollstock',
  ],
  openGraph: {
    title: 'KNAKKE® – Der Zollstock, der auch den Durchmesser misst',
    description:
      'Patentiert, mehrfach ausgezeichnet, individuell bedruckbar. Der einzige Zollstock mit Durchmessermessung – als Premium-Werbeartikel.',
    type: 'website',
    locale: 'de_DE',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://zollstock-innovation.de' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${outfit.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'KNAKKE® Zollstock mit Durchmessermessung',
              description:
                'Patentierter Zollstock mit Durchmesserskala auf der Rückseite. Misst Längen bis 2m und Durchmesser von 1mm bis 33cm.',
              brand: { '@type': 'Brand', name: 'KNAKKE®' },
              award: [
                'Grand Prix Européen des Inventeurs 2014',
                'iENA 2014 Auszeichnung',
                'Publikumspreis Innovationspreis Thüringen 2014',
                '1. Preis Fédération française des inventeurs 2014',
                'Geneva Inventions 2014',
              ],
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'EUR',
                availability: 'https://schema.org/InStock',
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
