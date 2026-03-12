'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'
import { IMAGES, STEPS } from '@/lib/constants'

const GALLERY = [
  { src: IMAGES.rohr1, alt: 'KNAKKE® misst Stahlrohr-Durchmesser' },
  { src: IMAGES.zylinder1, alt: 'KNAKKE® misst Zylinder-Durchmesser' },
  { src: IMAGES.zylinder2, alt: 'KNAKKE® Durchmesser-Skala Erklärung' },
  { src: IMAGES.quer, alt: 'KNAKKE® Vorderseite und Rückseite' },
]

const FEATURES = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    title: 'Vorderseite: Standard-Zollstock',
    text: 'Präzise Längenmessung bis 2 m – wie gewohnt.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
    title: 'Rückseite: Durchmesser-Skala',
    text: 'Patentierte Skala für Durchmessermessung 1 mm – 33 cm.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: 'So einfach wie möglich',
    text: 'Zollstock dreieckig ums Objekt legen – Durchmesser ablesen. Fertig.',
  },
]

export default function Innovation() {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <section id="funktion" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn>
          <p className="text-knakke-lime text-sm font-semibold uppercase tracking-widest mb-3">Die Innovation</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Zwei Werkzeuge. Ein Zollstock.
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mb-16 leading-relaxed">
            Die Vorderseite ist ein präziser Standard-Zollstock bis 2 m. Die Rückseite revolutioniert
            alles: Mit der patentierten Durchmesser-Skala messen Sie runde Objekte von 1 mm bis 33 cm
            – ohne Messschieber, ohne Umrechnung, ohne Umwege.
          </p>
        </FadeIn>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div className="bg-knakke-card border border-knakke-border rounded-xl p-6 hover:border-knakke-lime/20 transition-colors">
                <div className="w-10 h-10 bg-knakke-lime/10 rounded-lg flex items-center justify-center text-knakke-lime mb-4">
                  {f.icon}
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Image Gallery + Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Gallery */}
          <FadeIn>
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-knakke-border aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={GALLERY[activeImg].src}
                      alt={GALLERY[activeImg].alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {GALLERY.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative rounded-lg overflow-hidden aspect-[4/3] border-2 transition-all ${
                      activeImg === i ? 'border-knakke-lime' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Steps */}
          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.15}>
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-knakke-lime/10 border border-knakke-lime/20 rounded-xl flex items-center justify-center font-heading font-bold text-knakke-lime text-lg group-hover:bg-knakke-lime/20 transition-colors">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.5}>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 border border-knakke-lime/30 text-knakke-lime rounded-lg hover:bg-knakke-lime/10 transition-colors mt-4"
              >
                Muster anfordern
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
