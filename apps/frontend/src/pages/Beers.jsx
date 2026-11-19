import { useDeferredValue, useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import BeerCard from '../components/BeerCard.jsx'
import BeerDialog from '../components/BeerDialog.jsx'
import { festival } from '../data/festival'
import { useAsync } from '../hooks/useAsync'
import { getBeers } from '../services/catalog'
import './Beers.css'

const SORTS = {
  number: { label: 'Nummer', fn: (a, b) => a.number - b.number },
  name: { label: 'Naam', fn: (a, b) => a.name.localeCompare(b.name, 'nl') },
  abvAsc: { label: 'Alcohol ↑', fn: (a, b) => a.abv - b.abv },
  abvDesc: { label: 'Alcohol ↓', fn: (a, b) => b.abv - a.abv },
}

const normalize = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')

export default function Beers() {
  const { status, data: beers } = useAsync(getBeers)
  const [query, setQuery] = useState('')
  const [style, setStyle] = useState('')
  const [sort, setSort] = useState('number')
  const [selected, setSelected] = useState(null)
  const deferredQuery = useDeferredValue(query)

  const styles = useMemo(
    () => [...new Set((beers ?? []).map((b) => b.style))].sort((a, b) => a.localeCompare(b, 'nl')),
    [beers],
  )

  const visible = useMemo(() => {
    if (!beers) return []
    const q = normalize(deferredQuery.trim())
    return beers
      .filter((b) => !style || b.style === style)
      .filter((b) => !q || normalize(`${b.name} ${b.brewery} ${b.place} ${b.style}`).includes(q))
      .sort(SORTS[sort].fn)
  }, [beers, deferredQuery, style, sort])

  const reset = () => {
    setQuery('')
    setStyle('')
  }

  return (
    <>
      <PageHeader eyebrow={festival.dateLabel} title="Bierlijst">
        <p>
          Elk bier is verkrijgbaar per flesje of per proefglas van {festival.tastingGlassCl} cl.
          Zoek op naam, brouwerij of stijl.
        </p>
      </PageHeader>

      <section className="section">
        <div className="container">
          <div className="filters" role="search">
            <label className="field field--grow">
              <span className="field__label">Zoeken</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="bv. tripel, Lupulus, Westvleteren…"
              />
            </label>
            <label className="field">
              <span className="field__label">Stijl</span>
              <select value={style} onChange={(e) => setStyle(e.target.value)}>
                <option value="">Alle stijlen</option>
                {styles.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="field">
              <span className="field__label">Sorteer</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {Object.entries(SORTS).map(([key, s]) => (
                  <option key={key} value={key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {status === 'loading' && <p className="muted">Bierlijst laden…</p>}
          {status === 'error' && <p className="muted">De bierlijst kon niet geladen worden.</p>}

          {status === 'success' && (
            <>
              <p className="results" aria-live="polite">
                {visible.length} van {beers.length} bieren
                {(query || style) && (
                  <button type="button" className="link-btn" onClick={reset}>
                    Filters wissen
                  </button>
                )}
              </p>
              {visible.length > 0 ? (
                <div className="beer-grid">
                  {visible.map((beer) => (
                    <BeerCard key={beer.id} beer={beer} onOpen={setSelected} />
                  ))}
                </div>
              ) : (
                <p className="empty">Geen bieren gevonden. Probeer een andere zoekterm.</p>
              )}
              <BeerDialog
                beer={selected}
                beers={visible}
                onChange={setSelected}
                onClose={() => setSelected(null)}
              />
            </>
          )}
        </div>
      </section>
    </>
  )
}
