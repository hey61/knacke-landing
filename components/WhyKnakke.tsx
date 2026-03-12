'use client'

import FadeIn from './FadeIn'
import { FEATURES } from '@/lib/constants'

export default function WhyKnakke() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-knakke-darker via-[#111] to-knakke-darker" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-knakke-lime text-sm font-semibold uppercase tracking-widest mb-3">Warum Knakke?</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-16">
            Mehr als ein Zollstock.<br className="hidden sm:block" /> Mehr als ein Werbeartikel.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <div className="group bg-knakke-card border border-knakke-border rounded-xl p-6 lg:p-8 hover:border-knakke-lime/20 hover:bg-knakke-cardHover transition-all h-full">
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-heading font-semibold text-lg text-white mb-3 group-hover:text-knakke-lime transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
