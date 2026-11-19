import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { festival } from '../data/festival'
import { navItems } from '../data/navigation'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__brand" onClick={close}>
          <img className="header__logo" src="/favicon.svg" alt="" width="32" height="32" />
          <span>
            <strong>{festival.shortName}</strong>
            <small>{festival.dateLabel}</small>
          </span>
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className="header__burger" data-open={open} aria-hidden="true" />
        </button>

        <nav id="main-nav" className="header__nav" data-open={open} aria-label="Hoofdmenu">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className="header__link" onClick={close}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="header__link header__link--cta" onClick={close}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
