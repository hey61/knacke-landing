import { NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-knakke-border bg-knakke-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-heading font-bold text-2xl text-white mb-1">
              KNAKKE<span className="text-knakke-lime">®</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">eingetragene Marke</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Der patentierte Zollstock mit Durchmessermessung. Individuell bedruckt als
              Werbeartikel für Profis.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-knakke-lime transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+49363431554000" className="hover:text-knakke-lime transition-colors">
                  +49 (3634) 31 55 400
                </a>
              </li>
              <li>
                <a href="mailto:info@knakke.de" className="hover:text-knakke-lime transition-colors">
                  info@knakke.de
                </a>
              </li>
              <li>
                <a href="https://www.knakke.de" target="_blank" rel="noopener noreferrer" className="hover:text-knakke-lime transition-colors">
                  www.knakke.de
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm">Jetzt starten</h4>
            <a
              href="#kontakt"
              className="inline-block px-6 py-3 bg-knakke-lime text-knakke-darker text-sm font-semibold rounded-lg hover:bg-knakke-limeLight transition-colors"
            >
              Angebot anfordern
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-knakke-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} KNAKKE® – Alle Rechte vorbehalten · Eingetragene Marke · Patentiert
          </p>
          <div className="flex gap-6">
            <a href="/impressum" className="text-xs text-gray-500 hover:text-knakke-lime transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-xs text-gray-500 hover:text-knakke-lime transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
