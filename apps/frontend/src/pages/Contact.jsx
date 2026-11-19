import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { festival } from '../data/festival'
import { mailtoHref } from '../utils/contact'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(festival.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Clipboard can be blocked; the address is visible and selectable anyway.
    }
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Vragen? Mail ons gerust">
        <p>Voor vragen over het festival, de bieren of sponsoring kan je de organisatie mailen.</p>
      </PageHeader>

      <section className="section">
        <div className="container contact">
          <div className="card contact__card">
            <p className="contact__label">E-mailadres</p>
            <p className="contact__email">{festival.email}</p>
            <div className="contact__actions">
              <a className="btn btn--primary" href={mailtoHref()}>
                Mail ons
              </a>
              <button type="button" className="btn btn--outline" onClick={copy}>
                {copied ? 'Gekopieerd ✓' : 'Kopieer adres'}
              </button>
            </div>
            <p className="muted contact__hint">
              Opent &quot;Mail ons&quot; niets? Dan is er geen standaard mailprogramma ingesteld. Kopieer het
              adres en plak het in je eigen mail.
            </p>
          </div>

          <div className="card contact__card">
            <p className="contact__label">Organisatie</p>
            <ul className="contact__list">
              {festival.organisers.map((o) => (
                <li key={o.name}>
                  <a href={o.url} target="_blank" rel="noreferrer">
                    {o.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
