import PageHeader from '../components/PageHeader.jsx'
import { festival } from '../data/festival'
import './Directions.css'

export default function Directions() {
  const { venue, map } = festival

  return (
    <>
      <PageHeader eyebrow="Routeplanner" title="Zo vind je ons">
        <p>
          {venue.name}
          <br />
          {venue.street}, {venue.postalCode} {venue.city}
        </p>
      </PageHeader>

      <section className="section">
        <div className="container directions">
          <div className="directions__map">
            <iframe
              title={`Kaart van ${venue.name}`}
              src={map.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <aside className="card directions__info">
            <h2>Adres</h2>
            <address>
              {venue.name}
              <br />
              {venue.street}
              <br />
              {venue.postalCode} {venue.city}
            </address>
            <p className="muted">Café en terras open vanaf {festival.opensAt}.</p>

            <a className="btn btn--primary btn--block" href={map.directions} target="_blank" rel="noreferrer">
              Route in Google Maps
            </a>

            <h3>Met het openbaar vervoer</h3>
            <ul className="directions__links">
              {festival.travelLinks.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noreferrer">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
