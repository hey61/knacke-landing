'use client'

import Image from 'next/image'
import FadeIn from './FadeIn'
import { IMAGES, WERBEARTIKEL_USPS } from '@/lib/constants'

export default function Werbeartikel() {
  return (
    <section id="werbemittel" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#151a00] via-knakke-darker to-knakke-darker" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <FadeIn>
              <p className="text-knakke-lime text-sm font-semibold uppercase tracking-widest mb-3">100% Individuell</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                Ihr Logo. Ihr Zollstock.<br />Ihr Mehrwert.
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Jede KNAKKE® wird individuell bedruckt – mit Ihrem Logo, Ihrem Slogan, Ihren Farben.
                Der Meterstab mit Logo wird direkt im Haus in höchster Qualität gefertigt – kein
                Zwischenhändler, schnelle Lieferung.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {WERBEARTIKEL_USPS.map((usp, i) => (
                <FadeIn key={usp} delay={i * 0.05}>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-knakke-lime flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-300">{usp}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#kontakt"
                  className="px-7 py-3.5 bg-knakke-lime text-knakke-darker font-semibold rounded-lg hover:bg-knakke-limeLight transition-all"
                >
                  Angebot anfordern
                </a>
                <a
                  href="#konfigurator"
                  className="px-7 py-3.5 border border-knakke-border text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  Konfigurator starten
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Images */}
          <FadeIn direction="left">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-knakke-border">
                <Image
                  src={IMAGES.rohr1}
                  alt="KNAKKE® bedruckt als Werbeartikel"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-knakke-border mt-8">
                <Image
                  src={IMAGES.rohr2}
                  alt="KNAKKE® Meterstab mit Logo"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
