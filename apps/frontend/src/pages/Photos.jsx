import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { useAsync } from '../hooks/useAsync'
import { getAlbums } from '../services/catalog'
import './Photos.css'

export default function Photos() {
  const { status, data: albums } = useAsync(getAlbums)
  const [year, setYear] = useState(null)
  const [index, setIndex] = useState(null)

  const album = albums?.find((a) => a.year === year) ?? albums?.[0]

  const pickYear = (y) => {
    setYear(y)
    setIndex(null)
  }

  return (
    <>
      <PageHeader eyebrow="Sfeerbeelden" title="Foto's van vorige edities" />

      <section className="section">
        <div className="container">
          {status === 'loading' && <p className="muted">Foto&apos;s laden…</p>}
          {status === 'error' && <p className="muted">De foto&apos;s konden niet geladen worden.</p>}

          {album && (
            <>
              <div className="year-tabs" role="tablist" aria-label="Kies een jaar">
                {albums.map((a) => (
                  <button
                    key={a.year}
                    type="button"
                    role="tab"
                    aria-selected={a.year === album.year}
                    className="year-tabs__tab"
                    onClick={() => pickYear(a.year)}
                  >
                    {a.year}
                    <small>{a.photos.length}</small>
                  </button>
                ))}
              </div>

              <ul className="photo-grid">
                {album.photos.map((photo, i) => (
                  <li key={photo.id}>
                    <button type="button" className="photo-grid__item" onClick={() => setIndex(i)}>
                      <img
                        src={photo.src}
                        alt={photo.caption || `Bierfestival ${album.year}, foto ${i + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                      {photo.caption && <span className="photo-grid__caption">{photo.caption}</span>}
                    </button>
                  </li>
                ))}
              </ul>

              <Lightbox photos={album.photos} index={index} onChange={setIndex} onClose={() => setIndex(null)} />
            </>
          )}
        </div>
      </section>
    </>
  )
}
