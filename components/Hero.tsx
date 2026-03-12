'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { IMAGES, HERO_STATS } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-knakke-darker via-knakke-darker to-[#1a2000]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-knakke-lime/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-knakke-lime/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-knakke-border rounded-full mb-6">
                <span className="w-2 h-2 bg-knakke-lime rounded-full animate-pulse" />
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  Patentiert · Eingetragene Marke · Mehrfach ausgezeichnet
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white mb-6">
                Der Zollstock,
                <br />
                der auch den
                <br />
                <span className="text-knakke-lime">Durchmesser</span> misst.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg text-gray-400 max-w-lg mb-4 font-heading font-medium text-knakke-lime/80">
                KNAKKE® – Das Original
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="text-base sm:text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
                Zwei Werkzeuge in einem. Die einzige patentierte Kombination aus Längen- und
                Durchmessermessung – ideal als Werbeartikel für Handwerk, SHK, Elektro und
                Industrie. Individuell mit Ihrem Logo, Slogan und Firmenfarben.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#kontakt"
                  className="px-7 py-3.5 bg-knakke-lime text-knakke-darker font-semibold rounded-lg hover:bg-knakke-limeLight transition-all hover:shadow-lg hover:shadow-knakke-lime/20"
                >
                  Jetzt Angebot anfordern
                </a>
                <a
                  href="#konfigurator"
                  className="px-7 py-3.5 border border-knakke-border text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  Konfigurator starten
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="grid grid-cols-3 gap-6">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-knakke-lime/30 pl-4">
                    <div className="font-heading font-bold text-2xl sm:text-3xl text-white">
                      {stat.value}
                      <span className="text-knakke-lime text-lg">{stat.unit}</span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Hero Image */}
          <FadeIn delay={0.3} direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-knakke-lime/10 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-knakke-border">
                <Image
                  src={IMAGES.rohr1}
                  alt="KNAKKE® Zollstock misst Rohrdurchmesser"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden lg:flex justify-center mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#funktion" className="text-gray-500 hover:text-knakke-lime transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
