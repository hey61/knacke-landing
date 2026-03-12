import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
