import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// SMTP/Nodemailer braucht die Node-Runtime (nicht Edge).
export const runtime = 'nodejs'

interface ContactPayload {
  firma?: string
  name?: string
  email?: string
  telefon?: string
  menge?: string
  branche?: string
  nachricht?: string
  dsgvo?: boolean
  website?: string // Honeypot – muss leer bleiben
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export async function POST(req: Request) {
  let data: ContactPayload
  try {
    data = (await req.json()) as ContactPayload
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 })
  }

  // Honeypot: Füllt ein Bot dieses versteckte Feld aus, tun wir so, als sei alles ok,
  // senden aber nichts. So bleibt der Bot im Dunkeln, ohne echte Mails auszulösen.
  if (data.website && data.website.trim() !== '') {
    return NextResponse.json({ ok: true })
  }

  const firma = (data.firma ?? '').trim()
  const name = (data.name ?? '').trim()
  const email = (data.email ?? '').trim()
  const telefon = (data.telefon ?? '').trim()
  const menge = (data.menge ?? '').trim()
  const branche = (data.branche ?? '').trim()
  const nachricht = (data.nachricht ?? '').trim()

  if (!firma || !name || !email || !menge) {
    return NextResponse.json({ error: 'Bitte füllen Sie alle Pflichtfelder aus.' }, { status: 400 })
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' }, { status: 400 })
  }
  if (data.dsgvo !== true) {
    return NextResponse.json({ error: 'Bitte stimmen Sie der Datenschutzerklärung zu.' }, { status: 400 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO || !CONTACT_FROM) {
    console.error('Kontaktformular: SMTP-Konfiguration unvollständig (Umgebungsvariablen prüfen).')
    return NextResponse.json(
      { error: 'Der Versand ist derzeit nicht möglich. Bitte versuchen Sie es später erneut.' },
      { status: 500 },
    )
  }

  const port = Number(SMTP_PORT)
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 465 = implizites TLS, 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const lines = [
    `Firma: ${firma}`,
    `Name: ${name}`,
    `E-Mail: ${email}`,
    telefon ? `Telefon: ${telefon}` : null,
    `Gewünschte Menge: ${menge}`,
    branche ? `Branche: ${branche}` : null,
    '',
    'Nachricht:',
    nachricht || '(keine)',
  ]
    .filter((l) => l !== null)
    .join('\n')

  try {
    await transporter.sendMail({
      from: CONTACT_FROM, // z. B. "KNAKKE Website <info@knakke.de>" – muss zum SMTP-Konto passen
      to: CONTACT_TO, // z. B. info@knakke.de
      replyTo: { name, address: email }, // als Objekt: schützt vor Header-Injection
      subject: `Neue Anfrage über zollstock-innovation.de – ${firma}`,
      text: lines,
    })
  } catch (err) {
    console.error('Kontaktformular: Mailversand fehlgeschlagen.', err)
    return NextResponse.json(
      { error: 'Der Versand ist fehlgeschlagen. Bitte versuchen Sie es später erneut.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
