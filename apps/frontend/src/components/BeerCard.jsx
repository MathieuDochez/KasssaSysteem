import { memo } from 'react'
import { formatAbv, formatSize } from '../utils/format'
import './BeerCard.css'

function BeerCard({ beer, onOpen }) {
  return (
    <article className="beer-card">
      <button type="button" className="beer-card__button" onClick={() => onOpen(beer)}>
        <span className="beer-card__media">
          <img src={beer.image} alt="" loading="lazy" decoding="async" width="180" height="260" />
          <span className="beer-card__number">{beer.number}</span>
        </span>
        <span className="beer-card__body">
          <span className="beer-card__name">{beer.name}</span>
          <span className="beer-card__brewery">
            {beer.brewery} · {beer.place}
          </span>
          <span className="beer-card__meta">
            <span className="tag">{beer.style}</span>
            <span className="beer-card__stat">{formatAbv(beer.abv)}</span>
            <span className="beer-card__stat">{formatSize(beer.sizeCl)}</span>
          </span>
          <span className="beer-card__more">Meer info</span>
        </span>
      </button>
    </article>
  )
}

export default memo(BeerCard)
