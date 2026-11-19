import { Link } from 'react-router'
import { festival } from '../data/festival'
import { navItems } from '../data/navigation'
import { mailtoHref } from '../utils/contact'
import './Footer.css'

export default function Footer() {
  const { venue } = festival

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h2 className="footer__title">{festival.name}</h2>
          <p>
            {festival.dateLabel} · vanaf {festival.opensAt}
            <br />
            {venue.name}, {venue.street}, {venue.postalCode} {venue.city}
          </p>
        </div>

        <div>
          <h3 className="footer__heading">Organisatie</h3>
          <ul className="footer__list">
            {festival.organisers.map((o) => (
              <li key={o.name}>
                <a href={o.url} target="_blank" rel="noreferrer">
                  {o.name}
                </a>
              </li>
            ))}
            <li>
              <a href={mailtoHref()}>{festival.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Navigatie</h3>
          <ul className="footer__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="container footer__note">Geniet, maar drink met mate.</p>
    </footer>
  )
}
