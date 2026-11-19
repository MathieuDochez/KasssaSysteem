import { Link } from 'react-router'
import { festival } from '../data/festival'
import { useCountdown } from '../hooks/useCountdown'
import './Home.css'

const highlights = [
  {
    title: `${festival.beerCountLabel} bieren`,
    text: `Gekende, minder gekende en nieuwe bieren, per flesje of per proefglas (${festival.tastingGlassCl} cl).`,
    to: '/bieren',
    cta: 'Bekijk de bierlijst',
  },
  {
    title: 'Hapjes & frietjes',
    text: 'Frietjes met curryworst of hamburger, bordjes, chips en natuurlijk frisdrank en wijn.',
    to: '/aanbod',
    cta: 'Overig aanbod',
  },
  {
    title: festival.venue.name,
    text: `${festival.venue.street}, ${festival.venue.postalCode} ${festival.venue.city}. Café en terras open vanaf ${festival.opensAt.replace(':00', ' uur')}.`,
    to: '/route',
    cta: 'Routebeschrijving',
  },
]

export default function Home() {
  const countdown = useCountdown(`${festival.date}T${festival.opensAt}:00`)

  return (
    <>
      <section className="hero" style={{ '--hero-image': `url("${festival.heroImage}")` }}>
        <div className="container hero__inner">
          <p className="hero__eyebrow">Scouts Lint &amp; Veros presenteren</p>
          <h1 className="hero__title">{festival.name}</h1>
          <p className="hero__date">
            <time dateTime={festival.date}>{festival.dateLabel}</time> · vanaf {festival.opensAt}
          </p>
          <p className="hero__place">
            {festival.venue.name}, {festival.venue.city}
          </p>
          <div className="hero__actions">
            <Link to="/bieren" className="btn btn--primary">
              Ontdek de bieren
            </Link>
            <Link to="/route" className="btn btn--ghost">
              Hoe geraak ik er?
            </Link>
          </div>
          {countdown && (
            <dl className="countdown" aria-label="Aftellen tot het festival">
              {countdown.map(([label, value]) => (
                <div key={label} className="countdown__part">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container highlights">
          {highlights.map((h) => (
            <article key={h.title} className="card highlight">
              <h2 className="highlight__title">{h.title}</h2>
              <p>{h.text}</p>
              <Link to={h.to} className="highlight__link">
                {h.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container about">
          <a className="about__poster" href={festival.poster} target="_blank" rel="noreferrer">
            <img
              src={festival.poster}
              alt={`Affiche ${festival.shortName} ${festival.dateLabel}`}
              loading="lazy"
            />
          </a>
          <div className="about__text">
            <h2>Proef het betere Vlaamse bier</h2>
            <p>
              Op {festival.dateLabel} openen de {festival.venue.name} opnieuw de deuren voor het{' '}
              {festival.name}. Vanaf {festival.opensAt.replace(':00', ' uur')} zijn
              café en terras open.
            </p>
            <p>
              Een organisatie van{' '}
              {festival.organisers.map((o, i) => (
                <span key={o.name}>
                  {i > 0 && ' en '}
                  <a href={o.url} target="_blank" rel="noreferrer">
                    {o.name}
                  </a>
                </span>
              ))}
              .
            </p>
            <Link to="/fotos" className="btn btn--secondary">
              Foto&apos;s van vorige edities
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
