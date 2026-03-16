'use client'

import FadeIn from './FadeIn'
import { AWARDS, TV_APPEARANCES } from '@/lib/constants'

export default function Auszeichnungen() {
  return (
    <section id="auszeichnungen" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-knakke-lime text-sm font-semibold uppercase tracking-widest mb-3">
            Ausgezeichnet weltweit
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Internationale Auszeichnungen
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg mb-16 leading-relaxed">
            Die KNAKKE® wurde 2014 auf fünf internationalen Erfindermessen ausgezeichnet – von Europa
            über Frankreich und die Schweiz bis nach Russland. Dazu kommt der Publikumspreis des
            Innovationspreises Thüringen.
          </p>
        </FadeIn>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {AWARDS.map((a, i) => (
            <FadeIn key={a.title + a.location} delay={i * 0.08}>
              <div className="group bg-knakke-card border border-knakke-border rounded-xl p-6 hover:border-knakke-lime/20 transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{a.flag}</span>
                  <div>
                    <span className="text-xs text-knakke-lime font-mono">{a.year}</span>
                    <span className="text-xs text-gray-500 ml-2">{a.location}</span>
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-white mb-2 group-hover:text-knakke-lime transition-colors">
                  {a.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{a.org}</p>
                <p className="text-sm text-gray-400">{a.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* TV Appearances */}
        <FadeIn>
          <h3 className="font-heading font-semibold text-xl text-white mb-6 flex items-center gap-3">
            <span className="text-2xl">📺</span>
            KNAKKE® im Fernsehen
          </h3>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-6">
          {TV_APPEARANCES.map((tv, i) => (
            <FadeIn key={tv.show} delay={i * 0.1}>
              <div className="bg-knakke-card border border-knakke-border rounded-xl overflow-hidden hover:border-knakke-lime/20 transition-all">
                <div className="relative w-full aspect-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${tv.youtubeId}`}
                    title={`${tv.channel} – ${tv.show}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="font-heading font-semibold text-white text-sm">{tv.channel}</p>
                  <p className="text-knakke-lime text-sm mt-1">{tv.show}</p>
                  <p className="text-xs text-gray-500 mt-1">{tv.date}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
