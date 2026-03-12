'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import FadeIn from './FadeIn'
import { MARKET_STATS } from '@/lib/constants'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <div ref={ref} className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white">
      {count}
      <span className="text-knakke-lime">{suffix}</span>
    </div>
  )
}

export default function MarketStats() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Diagonal bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#151a00] via-knakke-darker to-knakke-darker" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(168,200,0,0.12) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-knakke-lime text-sm font-semibold uppercase tracking-widest mb-3">Der Markt</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-16">
            Warum Werbeartikel funktionieren
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {MARKET_STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center lg:text-left">
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="text-xs text-gray-600 mt-12">
            Quellen: GWW – Gesamtverband der Werbeartikel-Wirtschaft e.V. 2024 · Branchenanalyse Zollstockmarkt
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
