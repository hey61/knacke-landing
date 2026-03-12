'use client'

import FadeIn from './FadeIn'
import { BRANCHEN } from '@/lib/constants'

export default function Branchen() {
  return (
    <section id="branchen" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-knakke-lime text-sm font-semibold uppercase tracking-widest mb-3">Zielgruppen</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Überall wo gemessen wird,<br className="hidden sm:block" /> ist die Knakke zuhause.
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg mb-16 leading-relaxed">
            Die meisten Werbeartikel landen in der Schublade. Die KNAKKE® landet in der
            Werkzeugtasche – und wird täglich benutzt. Das ist der Unterschied zwischen einem
            Werbegeschenk und einem Werbemittel mit echtem Mehrwert.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHEN.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.08}>
              <div className="group bg-knakke-card border border-knakke-border rounded-xl p-6 hover:border-knakke-lime/20 hover:bg-knakke-cardHover transition-all h-full">
                <span className="text-3xl mb-3 block">{b.emoji}</span>
                <p className="text-xs text-knakke-lime/70 uppercase tracking-wider mb-1">{b.label}</p>
                <h3 className="font-heading font-semibold text-lg text-white mb-3 group-hover:text-knakke-lime transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
