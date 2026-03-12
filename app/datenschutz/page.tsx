import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – KNAKKE®',
  robots: { index: false, follow: false },
}

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <a href="/" className="text-[#a8c800] hover:underline text-sm mb-8 inline-block">
          ← Zurück zur Startseite
        </a>
        <h1 className="font-heading font-bold text-3xl text-white mb-2">Datenschutzerklärung</h1>
        <p className="text-gray-500 text-sm mb-10">Stand: März 2026</p>

        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <p>
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung. Die Nutzung unserer
            Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
          </p>

          <div>
            <h2 className="text-white text-xl font-heading font-semibold mb-3">
              Verantwortlicher (Art. 4 Nr. 7 DSGVO)
            </h2>
            <p>Neue Technologie Neugärtner und Partner GmbH</p>
            <p>Vertreten durch: Mario Neugärtner</p>
            <p>Adolf-Barth-Straße 26, 99610 Sömmerda</p>
            <p>Telefon: +49 3634 3155400</p>
            <p>E-Mail: info@knakke.de</p>
          </div>

          <div>
            <h2 className="text-white text-xl font-heading font-semibold mb-3">Server-Log-Dateien</h2>
            <p>
              Der Provider dieser Website erhebt und speichert automatisch Informationen in
              sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
              Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer-URL, Hostname
              des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse (anonymisiert).
            </p>
            <p className="mt-2">
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser
              Daten mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung der Website).
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-heading font-semibold mb-3">Cookies</h2>
            <p>
              Diese Website verwendet technisch notwendige Cookies, um die Funktionalität der
              Seite sicherzustellen. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
              gespeichert werden. Die meisten verwendeten Cookies sind sogenannte
              &ldquo;Session-Cookies&rdquo;, die nach Ende Ihres Besuchs automatisch gelöscht werden.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-heading font-semibold mb-3">
              Kontaktformular und E-Mail-Kontakt
            </h2>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-2">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der Bearbeitung von Anfragen). Die Daten verbleiben bei uns, bis Sie uns zur
              Löschung auffordern, Ihre Einwilligung widerrufen oder der Zweck entfällt.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-heading font-semibold mb-3">Externe Dienste</h2>

            <h3 className="text-white font-semibold mt-4 mb-2">Google Fonts</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Google
              Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser
              die benötigten Webfonts in Ihren Browser-Cache. Dabei wird Ihre IP-Adresse an Google
              übermittelt. Anbieter: Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043,
              USA. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-white font-semibold mt-4 mb-2">Vercel (Hosting)</h3>
            <p>
              Diese Website wird auf der Plattform Vercel gehostet. Anbieter: Vercel Inc.,
              340 S Lemon Ave #4133, Walnut, CA 91789, USA. Beim Besuch unserer Website werden
              technisch notwendige Daten (IP-Adresse, Browsertyp) an Vercel übermittelt.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-heading font-semibold mb-3">
              Ihre Rechte als betroffene Person
            </h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                { art: 'Art. 15 DSGVO', text: 'Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten.' },
                { art: 'Art. 16 DSGVO', text: 'Recht auf unverzügliche Berichtigung unrichtiger Daten.' },
                { art: 'Art. 17 DSGVO', text: 'Recht auf Löschung Ihrer personenbezogenen Daten.' },
                { art: 'Art. 18 DSGVO', text: 'Recht auf Einschränkung der Verarbeitung.' },
                { art: 'Art. 20 DSGVO', text: 'Recht auf Datenübertragbarkeit.' },
                { art: 'Art. 21 DSGVO', text: 'Recht auf Widerspruch gegen die Verarbeitung.' },
                { art: 'Art. 7 Abs. 3 DSGVO', text: 'Recht auf Widerruf einer erteilten Einwilligung.' },
                { art: 'Art. 77 DSGVO', text: 'Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde.' },
              ].map((r) => (
                <li key={r.art} className="flex gap-2">
                  <span className="text-[#a8c800] font-medium whitespace-nowrap">{r.art}:</span>
                  <span>{r.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Zur Wahrnehmung Ihrer Rechte wenden Sie sich bitte an: info@knakke.de
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-heading font-semibold mb-3">Datensicherheit</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
              Sie daran, dass die Adresszeile des Browsers von &ldquo;http://&rdquo; auf
              &ldquo;https://&rdquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>

          <p className="text-xs text-gray-600 pt-4">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026.
          </p>
        </div>
      </div>
    </div>
  )
}
