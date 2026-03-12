'use client'

import { useState, useRef } from 'react'
import FadeIn from './FadeIn'

const PRESETS = [
  { name: 'Knakke Original', bg: '#ffffff', accent: '#a8c800' },
  { name: 'Dark Edition', bg: '#1a1a1a', accent: '#a8c800' },
  { name: 'Corporate Blue', bg: '#ffffff', accent: '#0066cc' },
]

export default function Konfigurator() {
  const [logo, setLogo] = useState<string | null>(null)
  const [firma, setFirma] = useState('')
  const [slogan, setSlogan] = useState('')
  const [bgColor, setBgColor] = useState('#ffffff')
  const [accentColor, setAccentColor] = useState('#a8c800')
  const [activePreset, setActivePreset] = useState(0)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setLogo(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  const applyPreset = (i: number) => {
    setActivePreset(i)
    setBgColor(PRESETS[i].bg)
    setAccentColor(PRESETS[i].accent)
  }

  const isDark = bgColor.toLowerCase() < '#888888'

  return (
    <section id="konfigurator" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-knakke-lime text-sm font-semibold uppercase tracking-widest mb-3">Online-Konfigurator</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Gestalte deinen Knakke
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg mb-12">
            Logo hochladen, Farben wählen, Firmenname eintragen – und sofort die Vorschau sehen.
            Diese Vorschau schickst du uns mit deiner Anfrage.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn>
            <div className="space-y-6">
              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Logo hochladen</label>
                <button
                  onClick={() => fileRef.current?.click()}
                  className="w-full border-2 border-dashed border-knakke-border rounded-xl p-8 text-center hover:border-knakke-lime/30 transition-colors group"
                >
                  {logo ? (
                    <img src={logo} alt="Logo" className="max-h-20 mx-auto" />
                  ) : (
                    <>
                      <svg className="w-8 h-8 mx-auto text-gray-500 group-hover:text-knakke-lime transition-colors mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>
                      <span className="text-sm text-gray-400">PNG, JPG oder SVG – klicken zum Hochladen</span>
                    </>
                  )}
                </button>
                <input ref={fileRef} type="file" accept="image/*" onChange={handleLogo} className="hidden" />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Firmenname</label>
                <input
                  type="text"
                  value={firma}
                  onChange={(e) => setFirma(e.target.value)}
                  placeholder="Ihr Firmenname"
                  className="w-full bg-knakke-card border border-knakke-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-knakke-lime/50 transition-colors"
                />
              </div>

              {/* Slogan */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Slogan / Kontakt</label>
                <input
                  type="text"
                  value={slogan}
                  onChange={(e) => setSlogan(e.target.value)}
                  placeholder="www.ihre-firma.de · Tel: 0800 12345"
                  className="w-full bg-knakke-card border border-knakke-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-knakke-lime/50 transition-colors"
                />
              </div>

              {/* Colors */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Hintergrund</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-10 h-10 rounded-lg border border-knakke-border cursor-pointer"
                    />
                    <span className="text-sm text-gray-400 font-mono">{bgColor}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Akzentfarbe</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="w-10 h-10 rounded-lg border border-knakke-border cursor-pointer"
                    />
                    <span className="text-sm text-gray-400 font-mono">{accentColor}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                <strong className="text-gray-400">Tipp:</strong> Lade die Vorschau herunter und schicke sie mit deiner Anfrage.
                Unser Team erstellt dann ein verbindliches Angebot mit professioneller Druckvorlage.
              </p>
            </div>
          </FadeIn>

          {/* Preview */}
          <FadeIn direction="left">
            <div className="space-y-4">
              <p className="text-sm text-gray-400 font-medium">Live-Vorschau</p>

              {/* Zollstock Preview */}
              <div className="bg-knakke-card border border-knakke-border rounded-xl p-8 flex items-center justify-center min-h-[280px]">
                <div
                  className="w-full max-w-md rounded-lg shadow-2xl overflow-hidden"
                  style={{ backgroundColor: bgColor }}
                >
                  {/* Simulated Zollstock segments */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 border-r last:border-r-0 py-6 px-2 flex flex-col items-center justify-center gap-2"
                        style={{ borderColor: `${accentColor}33` }}
                      >
                        {i === 0 && logo && (
                          <img src={logo} alt="" className="h-8 w-auto object-contain" />
                        )}
                        {i === 1 && firma && (
                          <span
                            className="text-[10px] font-bold text-center leading-tight"
                            style={{ color: isDark ? '#fff' : '#333' }}
                          >
                            {firma}
                          </span>
                        )}
                        {i === 2 && (
                          <div className="w-full h-1 rounded-full" style={{ backgroundColor: accentColor }} />
                        )}
                        {i === 3 && slogan && (
                          <span
                            className="text-[8px] text-center leading-tight"
                            style={{ color: isDark ? '#ccc' : '#666' }}
                          >
                            {slogan}
                          </span>
                        )}
                        {i === 4 && (
                          <span
                            className="text-[8px] font-bold"
                            style={{ color: accentColor }}
                          >
                            KNAKKE®
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Ruler markings hint */}
                  <div className="flex border-t" style={{ borderColor: `${accentColor}33` }}>
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-2"
                        style={{
                          borderRight: `1px solid ${accentColor}22`,
                          backgroundColor: i % 5 === 0 ? `${accentColor}11` : 'transparent',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-600 text-center">
                Nicht maßstabsgetreu · Nur zur Orientierung
              </p>

              {/* Presets */}
              <div className="flex gap-2">
                {PRESETS.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => applyPreset(i)}
                    className={`flex-1 px-3 py-2 text-xs rounded-lg border transition-all ${
                      activePreset === i
                        ? 'border-knakke-lime text-knakke-lime bg-knakke-lime/10'
                        : 'border-knakke-border text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              <a
                href="#kontakt"
                className="block w-full text-center px-6 py-3 bg-knakke-lime text-knakke-darker font-semibold rounded-lg hover:bg-knakke-limeLight transition-colors mt-4"
              >
                Angebot mit dieser Vorlage anfordern
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
