'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

const MENGEN = [
  'Bitte wählen',
  'Nur ein Muster',
  '100 – 499 Stück',
  '500 – 999 Stück',
  '1.000 – 4.999 Stück',
  '5.000+ Stück',
]

const BRANCHE_OPTIONS = [
  'Bitte wählen (optional)',
  'Sanitär & Heizung',
  'Elektro & Installation',
  'Küchenbranche',
  'Bau & Immobilien',
  'Industrie & Maschinenbau',
  'Werbemittelhandel',
  'Baumarkt / Handel',
  'Sonstige',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [dsgvo, setDsgvo] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to backend / email service
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div>
            <FadeIn>
              <p className="text-knakke-lime text-sm font-semibold uppercase tracking-widest mb-3">
                Kontakt & Angebot
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Bereit für den besseren Zollstock?
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Fordern Sie jetzt Ihr persönliches Angebot an oder bestellen Sie ein kostenloses Muster.
                Unser Team meldet sich innerhalb von 24 Stunden bei Ihnen.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-knakke-lime/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-knakke-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Telefon</p>
                    <a href="tel:+49363431554000" className="text-white hover:text-knakke-lime transition-colors">
                      +49 (3634) 31 55 400
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-knakke-lime/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-knakke-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">E-Mail</p>
                    <a href="mailto:info@knakke.de" className="text-white hover:text-knakke-lime transition-colors">
                      info@knakke.de
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-knakke-card border border-knakke-border rounded-xl p-6">
                <p className="font-heading font-semibold text-white mb-3">Das bekommen Sie:</p>
                <ul className="space-y-2">
                  {[
                    'Persönliches Angebot innerhalb von 24 Stunden',
                    'Kostenloses Muster auf Anfrage',
                    'Individuelle Beratung zu Druck & Personalisierung',
                    'Staffelpreise ab 100 Stück',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-knakke-lime flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <FadeIn direction="left">
            <div className="bg-knakke-card border border-knakke-border rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading font-semibold text-xl text-white mb-6">Angebot anfordern</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-knakke-lime/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-knakke-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-white mb-2">Vielen Dank!</h4>
                  <p className="text-gray-400">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">Firma *</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-knakke-darker border border-knakke-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-knakke-lime/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">Name *</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-knakke-darker border border-knakke-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-knakke-lime/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">E-Mail *</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-knakke-darker border border-knakke-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-knakke-lime/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">Telefon</label>
                    <input
                      type="tel"
                      className="w-full bg-knakke-darker border border-knakke-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-knakke-lime/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">Gewünschte Menge *</label>
                    <select
                      required
                      className="w-full bg-knakke-darker border border-knakke-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-knakke-lime/50 transition-colors"
                    >
                      {MENGEN.map((m) => (
                        <option key={m} value={m === 'Bitte wählen' ? '' : m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">Ihre Branche</label>
                    <select className="w-full bg-knakke-darker border border-knakke-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-knakke-lime/50 transition-colors">
                      {BRANCHE_OPTIONS.map((b) => (
                        <option key={b} value={b.includes('optional') ? '' : b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1.5">Ihre Nachricht</label>
                    <textarea
                      rows={4}
                      className="w-full bg-knakke-darker border border-knakke-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-knakke-lime/50 transition-colors resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={dsgvo}
                      onChange={(e) => setDsgvo(e.target.checked)}
                      required
                      className="mt-1 w-4 h-4 rounded border-gray-600 text-knakke-lime focus:ring-knakke-lime/50 bg-knakke-darker"
                    />
                    <span className="text-xs text-gray-400 leading-relaxed">
                      Ich habe die{' '}
                      <a href="/datenschutz" className="text-knakke-lime hover:underline">
                        Datenschutzerklärung
                      </a>{' '}
                      gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={!dsgvo}
                    className="w-full py-3.5 bg-knakke-lime text-knakke-darker font-semibold rounded-lg hover:bg-knakke-limeLight transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Angebot anfordern
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    * Pflichtfelder. Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
