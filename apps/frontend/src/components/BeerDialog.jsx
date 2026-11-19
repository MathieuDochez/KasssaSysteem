import { useEffect, useRef } from 'react'
import { festival } from '../data/festival'
import { formatAbv, formatPrice, formatSize } from '../utils/format'
import './BeerDialog.css'

// Detail view for one beer, on a native <dialog> (Esc + focus trap built in).
// `beers` is the currently visible list so previous/next follow the filters.
export default function BeerDialog({ beer, beers, onChange, onClose }) {
  const dialogRef = useRef(null)
  const index = beer ? beers.findIndex((b) => b.id === beer.id) : -1
  const prev = index > 0 ? beers[index - 1] : null
  const next = index >= 0 && index < beers.length - 1 ? beers[index + 1] : null

  useEffect(() => {
    const dialog = dialogRef.current
    if (beer && !dialog.open) dialog.showModal()
    if (!beer && dialog.open) dialog.close()
  }, [beer])

  useEffect(() => {
    if (!beer) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight' && next) onChange(next)
      if (e.key === 'ArrowLeft' && prev) onChange(prev)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [beer, prev, next, onChange])

  return (
    <dialog
      ref={dialogRef}
      className="beer-dialog"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-labelledby="beer-dialog-title"
    >
      {beer && (
        <div className="beer-dialog__panel">
          <button type="button" className="beer-dialog__close" onClick={onClose} aria-label="Sluiten">
            ×
          </button>

          <div className="beer-dialog__media">
            <img src={beer.image} alt={beer.name} width="180" height="260" />
          </div>

          <div className="beer-dialog__content">
            <p className="beer-dialog__number">Nummer {beer.number}</p>
            <h2 id="beer-dialog-title" className="beer-dialog__title">
              {beer.name}
            </h2>
            <p className="beer-dialog__brewery">
              {beer.brewery} · {beer.place}
            </p>

            {beer.description && <p className="beer-dialog__description">{beer.description}</p>}

            <dl className="beer-dialog__facts">
              <div>
                <dt>Stijl</dt>
                <dd>{beer.style}</dd>
              </div>
              <div>
                <dt>Alcohol</dt>
                <dd>{formatAbv(beer.abv)}</dd>
              </div>
              <div>
                <dt>Fles</dt>
                <dd>{formatSize(beer.sizeCl)}</dd>
              </div>
              <div>
                <dt>Proefglas</dt>
                <dd>{formatSize(festival.tastingGlassCl)}</dd>
              </div>
              {beer.bottlePrice != null && (
                <div>
                  <dt>Prijs fles</dt>
                  <dd>{formatPrice(beer.bottlePrice)}</dd>
                </div>
              )}
              {beer.tastingPrice != null && (
                <div>
                  <dt>Prijs proefglas</dt>
                  <dd>{formatPrice(beer.tastingPrice)}</dd>
                </div>
              )}
            </dl>

            <div className="beer-dialog__nav">
              <button type="button" className="btn btn--outline" disabled={!prev} onClick={() => onChange(prev)}>
                ← Vorige
              </button>
              <button type="button" className="btn btn--outline" disabled={!next} onClick={() => onChange(next)}>
                Volgende →
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
