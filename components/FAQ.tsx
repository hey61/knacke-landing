'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn'
import { FAQ_ITEMS } from '@/lib/constants'

function FAQItem({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-knakke-border last:border-b-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`font-medium pr-8 transition-colors ${open ? 'text-knakke-lime' : 'text-white group-hover:text-gray-200'}`}>
          {q}
        </span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45 text-knakke-lime' : 'text-gray-500'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm leading-relaxed pb-5 pr-12">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-knakke-darker via-[#111] to-knakke-darker" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial */}
        <FadeIn>
          <blockquote className="text-center mb-16">
            <p className="text-xl sm:text-2xl text-gray-300 italic leading-relaxed mb-4">
              „Das ist mit Abstand das beste Handwerker-Gimmick, das es gibt. Es funktioniert
              wirklich so einfach, wie es in der Anleitung beschrieben ist."
            </p>
            <cite className="text-sm text-gray-500 not-italic">– René, Handwerker</cite>
          </blockquote>
        </FadeIn>

        <FadeIn>
          <p className="text-knakke-lime text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Häufige Fragen
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Alles, was Sie vor einer Bestellung wissen möchten.{' '}
            <a href="#kontakt" className="text-knakke-lime hover:underline">
              Weitere Fragen stellen →
            </a>
          </p>
        </FadeIn>

        <FadeIn>
          <div className="bg-knakke-card border border-knakke-border rounded-xl px-6 sm:px-8">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                open={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
