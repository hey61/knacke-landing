import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum – KNAKKE®',
  robots: { index: false, follow: false },
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <a href="/" className="text-[#a8c800] hover:underline text-sm mb-8 inline-block">
          ← Zurück zur Startseite
        </a>
        <h1 className="font-heading font-bold text-3xl text-white mb-8">Impressum</h1>

        <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
          <div>
            <p className="text-white font-semibold text-base mb-2">Neue Technologie Neugärtner und Partner GmbH</p>
            <p>Vertreten durch: Mario Neugärtner</p>
            <p>Adolf-Barth-Straße 26</p>
            <p>99610 Sömmerda</p>
          </div>

          <div>
            <p>Telefon: +49 (3634) 31 55 400</p>
            <p>Telefax: +49 (3634) 31 55 420</p>
            <p>E-Mail: info@knakke.de</p>
          </div>

          <div>
            <p>Eintragung im Handelsregister</p>
            <p>Registergericht: Amtsgericht Jena</p>
            <p>Registernummer: HRB 106999</p>
          </div>

          <div>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
            <p>DE162410711</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
            <p>Mario Neugärtner</p>
            <p>Adolf-Barth-Straße 26</p>
            <p>99610 Sömmerda</p>
          </div>

          <h2 className="text-white text-xl font-heading font-semibold pt-4">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
            Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
            erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold pt-4">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
            mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold pt-4">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </div>
  )
}
