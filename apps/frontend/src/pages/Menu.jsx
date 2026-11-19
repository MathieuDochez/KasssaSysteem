import { Link } from 'react-router'
import PageHeader from '../components/PageHeader.jsx'
import { useAsync } from '../hooks/useAsync'
import { getMenu } from '../services/catalog'
import { formatPrice } from '../utils/format'
import './Menu.css'

export default function Menu() {
  const { status, data: categories } = useAsync(getMenu)

  return (
    <>
      <PageHeader eyebrow="Naast het bier" title="Overig aanbod">
        <p>
          Geen bierliefhebber of zin in een hapje? Hier vind je alles wat er naast de{' '}
          <Link to="/bieren">bierlijst</Link> te krijgen is.
        </p>
      </PageHeader>

      <section className="section">
        <div className="container">
          {status === 'loading' && <p className="muted">Aanbod laden…</p>}
          {status === 'error' && <p className="muted">Het aanbod kon niet geladen worden.</p>}
          {status === 'success' && (
            <div className="menu-grid">
              {categories.map((cat) => (
                <article key={cat.id} className="card menu-card">
                  <h2 className="menu-card__title">{cat.title}</h2>
                  <ul className="menu-card__list">
                    {cat.items.map((item) => (
                      <li key={item.id}>
                        <span>{item.name}</span>
                        {item.price != null && <span className="menu-card__price">{formatPrice(item.price)}</span>}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
