'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { IMAGES, HERO_STATS } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with reduced opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.rohr1}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: '35% center' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-knakke-darker from-25% via-knakke-darker/85 via-50% to-black/15 to-80%" />
        <div className="absolute inset-0 bg-gradient-to-b from-knakke-darker/50 via-knakke-darker/30 to-knakke-darker/70" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-knakke-lime/10 border border-knakke-lime/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-knakke-lime rounded-full animate-pulse" />
            <span className="text-xs text-knakke-lime uppercase tracking-wider font-semibold">
              Patentiert · Eingetragene Marke · Mehrfach ausgezeichnet
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-white mb-8 uppercase">
            Der Zollstock,
            <br />
            <span className="text-knakke-lime">der auch den</span>
            <br />
            Durchmesser
            <br />
            misst.
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg font-heading font-medium mb-4">
            <span className="text-knakke-lime font-bold">KNAKKE®</span>
            <span className="text-gray-400 ml-2">– Das Original</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Zwei Werkzeuge in einem. Die einzige patentierte Kombination aus Längen- und{' '}
            <strong className="text-white">Durchmessermessung</strong> – ideal als{' '}
            <strong className="text-white">Werbeartikel</strong> für Handwerk, SHK, Elektro
            und Industrie. <strong className="text-white">Zollstock bedrucken</strong> mit
            Mehrwert: Individuell mit Ihrem Logo, Slogan und Firmenfarben.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-knakke-lime text-knakke-darker font-bold uppercase tracking-wide rounded-lg hover:bg-knakke-limeLight transition-all hover:shadow-lg hover:shadow-knakke-lime/20"
            >
              Jetzt Angebot anfordern
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#konfigurator"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold uppercase tracking-wide rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Konfigurator starten
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="border-l-2 border-knakke-lime/30 pl-4">
                <div className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  {stat.value}
                  <span className="text-knakke-lime text-lg">{stat.unit}</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <motion.div
          className="hidden lg:flex mt-16"
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
