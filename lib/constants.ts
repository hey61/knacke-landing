export const IMAGES = {
  rohr1: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663050781907/Lh3G3SVYkTPDPfnPvxxbFQ/knakke_rohr1_94e4a97a.jpg',
  rohr2: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663050781907/Lh3G3SVYkTPDPfnPvxxbFQ/knakke_rohr2_23949d24.jpg',
  zylinder1: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663050781907/Lh3G3SVYkTPDPfnPvxxbFQ/knakke_zylinder1_7f9cf011.jpg',
  zylinder2: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663050781907/Lh3G3SVYkTPDPfnPvxxbFQ/knakke_zylinder2_6143dd48.jpg',
  quer: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663050781907/Lh3G3SVYkTPDPfnPvxxbFQ/knakke_quer_05e5974b.jpg',
} as const

export const NAV_LINKS = [
  { label: 'Funktion', href: '#funktion' },
  { label: 'Konfigurator', href: '#konfigurator' },
  { label: 'Branchen', href: '#branchen' },
  { label: 'Werbemittel', href: '#werbemittel' },
  { label: 'Auszeichnungen', href: '#auszeichnungen' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
] as const

export const HERO_STATS = [
  { value: '1–33', unit: 'cm', label: 'Durchmesser messbar' },
  { value: '2', unit: 'm', label: 'Länge (Standard)' },
  { value: '6×', unit: '', label: 'Int. Auszeichnungen' },
] as const

export const STEPS = [
  {
    num: '01',
    title: 'Zollstock anlegen',
    text: 'Den Zollstock dreieckig um das runde Objekt legen – Rohr, Kabel, Flasche, Welle.',
  },
  {
    num: '02',
    title: 'Skala ablesen',
    text: 'Auf der Rückseite den Durchmesser direkt in cm oder Zoll ablesen. Keine Umrechnung.',
  },
  {
    num: '03',
    title: 'Fertig.',
    text: 'Kein Messschieber, kein Taschenrechner, kein Weg zum Auto. Ergebnis sofort.',
  },
] as const

export const MARKET_STATS = [
  { value: 76, suffix: '%', label: 'der Bevölkerung erreicht Werbeartikel täglich' },
  { value: 62, suffix: '%', label: 'nutzen Werbeartikel länger als 1 Jahr' },
  { value: 78, suffix: '%', label: 'Erinnerungswert an das beworbene Unternehmen' },
  { value: 400, suffix: ' Mio.', label: 'Zollstöcke werden jährlich weltweit verkauft' },
] as const

export const FEATURES = [
  {
    icon: '🏆',
    title: 'Patentiert & ausgezeichnet',
    text: 'Weltweit patentiert. Gewinner des Grand Prix Européen des Inventeurs, iENA, Geneva Inventions und weiterer internationaler Preise.',
  },
  {
    icon: '🎨',
    title: 'Individuell bedruckt',
    text: 'Ihr Logo, Ihr Slogan, Ihre Farben – direkt auf dem Zollstock. Hochwertigster Druck im eigenen Haus. Auch mit Geschenkverpackung.',
  },
  {
    icon: '⚙️',
    title: 'Online-Konfigurator',
    text: 'Logo hochladen, Farbe wählen, Vorschau sehen – direkt auf dieser Seite. Vorschau herunterladen und mit der Anfrage schicken.',
  },
  {
    icon: '✦',
    title: 'Premium-Qualität',
    text: 'Buchenholz, Federstahlgelenke, präzise Skala. Ein Zollstock, der täglich in Gebrauch ist – und täglich für Ihre Marke wirbt.',
  },
  {
    icon: '⚡',
    title: 'Echter Mehrwert',
    text: 'Kein Topflappen, keine Kugelschreiber. Ein Werkzeug mit echtem Nutzen, das Ihr Kunde wirklich verwendet.',
  },
  {
    icon: '🌐',
    title: 'Für alle Branchen',
    text: 'Von Sanitär über Küchenhersteller bis Baumarkt: Überall wo gemessen wird, ist die Knakke das überlegene Werbegeschenk.',
  },
] as const

export const BRANCHEN = [
  {
    emoji: '🔧',
    label: 'SHK-Betriebe & Installateure',
    title: 'Sanitär & Heizung (SHK)',
    text: 'Rohrdurchmesser messen ist Tagesgeschäft. Die KNAKKE® ersetzt den Messschieber auf jeder Baustelle.',
  },
  {
    emoji: '⚡',
    label: 'Elektriker & Elektrobetriebe',
    title: 'Elektro & Installation',
    text: 'Kabeldurchmesser, Leerrohre, Installationsrohre – alles mit einem Werkzeug. Ideal als Werbeartikel für Elektriker.',
  },
  {
    emoji: '🍳',
    label: 'Nolte, Häcker, Nobilia & Co.',
    title: 'Küchenhersteller',
    text: 'Statt Topflappen: Die KNAKKE® als Beigabe. Kunde misst sofort Syphon & Anschlüsse unter der Spüle.',
  },
  {
    emoji: '🏠',
    label: 'OBI, Hornbach & Co.',
    title: 'Baumärkte & Heimwerker',
    text: 'Listung als Premium-Werkzeug oder Eigenmarke. Zieht Heimwerker an. Ideal für Werbeartikel-Aktionen.',
  },
  {
    emoji: '🏭',
    label: 'Technische Betriebe',
    title: 'Industrie & Maschinenbau',
    text: 'Überall wo Rohre, Wellen und runde Teile gemessen werden. Werbeartikel mit täglichem Nutzwert.',
  },
  {
    emoji: '🏢',
    label: 'Makler & Verwalter',
    title: 'Immobilien & Verwaltung',
    text: 'Hochwertiges Kundengeschenk mit echtem Nutzen – weit über dem Standard-Werbeartikel.',
  },
] as const

export const AWARDS = [
  {
    flag: '🇪🇺',
    year: '2014',
    location: 'Europa',
    title: 'Grand Prix Européen des Inventeurs',
    org: 'Europe France Inventeurs',
    text: 'Höchste europäische Auszeichnung für Erfinder.',
  },
  {
    flag: '🇩🇪',
    year: '2014',
    location: 'Deutschland',
    title: 'Auszeichnung iENA 2014',
    org: 'Internationale Fachmesse Ideen, Erfindungen, Neuheiten',
    text: 'Ausgezeichnet auf der wichtigsten internationalen Fachmesse für Erfindungen in Nürnberg.',
  },
  {
    flag: '🇩🇪',
    year: '2014',
    location: 'Thüringen',
    title: 'Publikumspreis Innovationspreis Thüringen',
    org: 'Innovationspreis Thüringen',
    text: 'Publikumspreis beim renommierten Innovationspreis Thüringen 2014.',
  },
  {
    flag: '🇫🇷',
    year: '2014',
    location: 'Frankreich',
    title: '1. Preis',
    org: 'Fédération française des inventeurs (F.F.I.)',
    text: 'Erster Preis des französischen Erfinderverbands.',
  },
  {
    flag: '🇨🇭',
    year: '2014',
    location: 'Schweiz',
    title: 'Auszeichnung Geneva Inventions',
    org: '43. Internationale Messe für Erfindungen in Genf',
    text: 'Ausgezeichnet auf der weltweit bedeutendsten Erfindermesse.',
  },
  {
    flag: '🇷🇺',
    year: '2014',
    location: 'Russland',
    title: 'Prize of Association',
    org: 'Russian House for Int. Scientific and Technological Cooperation',
    text: 'Auszeichnung durch das russische Haus für internationale Zusammenarbeit.',
  },
] as const

export const TV_APPEARANCES = [
  { channel: 'MDR Thüringen', show: 'Einfach genial', date: '10.02.2015, 19:50 Uhr' },
  { channel: 'MDR Thüringen Journal', show: 'iENA-Bericht', date: '28.10.2014, 19:30 Uhr' },
  { channel: 'N24', show: 'Extratipps Business', date: 'Erstausstrahlung 04.04.2014' },
] as const

export const FAQ_ITEMS = [
  {
    q: 'Was macht die KNAKKE® anders als ein normaler Zollstock?',
    a: 'Die KNAKKE® hat auf der Rückseite eine patentierte Durchmesser-Skala. Damit können Sie runde Objekte von 1 mm bis 33 cm Durchmesser messen – einfach den Zollstock dreieckig ums Objekt legen und ablesen. Kein anderer Zollstock kann das.',
  },
  {
    q: 'Welchen Durchmesserbereich kann ich messen?',
    a: 'Von 1 mm bis 33 cm Durchmesser. Das deckt alles ab – von dünnen Kabeln über Wasserrohre bis hin zu Abflussrohren und Zylindern.',
  },
  {
    q: 'Wie funktioniert die Durchmessermessung genau?',
    a: 'Sie legen den Zollstock dreieckig um das runde Objekt. Auf der Rückseite lesen Sie dann direkt den Durchmesser in Zentimetern oder Zoll ab. Keine Umrechnung, keine Formel – einfach anlegen und ablesen.',
  },
  {
    q: 'Ab welcher Menge kann ich die KNAKKE® als Werbeartikel bestellen?',
    a: 'Staffelpreise beginnen ab 100 Stück. Für kleinere Mengen oder einzelne Muster kontaktieren Sie uns gerne direkt.',
  },
  {
    q: 'Wie läuft die individuelle Bedruckung ab?',
    a: 'Nutzen Sie unseren Online-Konfigurator auf dieser Seite, um eine Vorschau zu erstellen. Laden Sie Ihr Logo hoch, wählen Sie Farben und schicken Sie die Vorschau mit Ihrer Anfrage. Unser Team erstellt dann eine professionelle Druckvorlage und ein verbindliches Angebot.',
  },
  {
    q: 'Kann ich vor der Bestellung ein Muster erhalten?',
    a: 'Ja! Wir versenden kostenlose Muster auf Anfrage. Füllen Sie einfach unser Kontaktformular aus und wählen Sie „Nur ein Muster" als gewünschte Menge.',
  },
  {
    q: 'Ist die KNAKKE® wirklich patentiert?',
    a: 'Ja. Die KNAKKE® ist weltweit patentiert und als Marke eingetragen. Die Durchmesser-Skala auf der Rückseite eines Gliedermaßstabs ist eine geschützte Erfindung.',
  },
  {
    q: 'Für welche Branchen eignet sich die KNAKKE® als Werbeartikel besonders?',
    a: 'Besonders für SHK-Betriebe, Elektriker, Küchenhersteller, Baumärkte, Industrieunternehmen und Immobilienfirmen – also überall, wo gemessen wird und ein Werkzeug mit echtem Nutzen mehr Wirkung hat als ein klassischer Werbeartikel.',
  },
  {
    q: 'Wie lange dauert die Lieferung nach Bestellung?',
    a: 'Nach Freigabe der Druckvorlage beträgt die Lieferzeit in der Regel 2–3 Wochen. Bei größeren Mengen oder Sonderwünschen kann es etwas länger dauern – wir informieren Sie im Angebot über den genauen Zeitrahmen.',
  },
  {
    q: 'Kann ich die KNAKKE® auch ohne Bedruckung kaufen?',
    a: 'Ja, die KNAKKE® ist auch ohne individuelle Bedruckung als „Original" erhältlich. Kontaktieren Sie uns für Einzelstück-Preise oder Kleinmengen.',
  },
] as const

export const WERBEARTIKEL_USPS = [
  'Beidseitiger Druck möglich',
  'Vollfarbdruck in höchster Qualität',
  'Druck direkt im Haus – kein Zwischenhändler',
  'Geschenkverpackung auf Wunsch',
  'Online-Konfigurator mit Live-Vorschau',
  'Staffelpreise ab 100 Stück',
  'Händlerkonditionen für Werbemittlenhändler',
  'Muster kostenlos auf Anfrage',
] as const
