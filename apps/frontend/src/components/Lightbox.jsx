import { useEffect, useRef } from 'react'
import './Lightbox.css'

// Full-screen photo viewer on a native <dialog> (focus trap + Esc for free).
export default function Lightbox({ photos, index, onChange, onClose }) {
  const dialogRef = useRef(null)
  const isOpen = index != null
  const photo = isOpen ? photos[index] : null

  useEffect(() => {
    const dialog = dialogRef.current
    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onChange((index + 1) % photos.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, index, photos.length, onChange])

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-label="Foto bekijken"
    >
      {photo && (
        <>
          <figure className="lightbox__figure">
            <img src={photo.src} alt={photo.caption || `Foto ${index + 1}`} />
            <figcaption>
              {photo.caption && <span>{photo.caption}</span>}
              <span className="lightbox__count">
                {index + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__btn lightbox__btn--prev"
            onClick={() => onChange((index - 1 + photos.length) % photos.length)}
            aria-label="Vorige foto"
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__btn--next"
            onClick={() => onChange((index + 1) % photos.length)}
            aria-label="Volgende foto"
          >
            ›
          </button>
          <button type="button" className="lightbox__close" onClick={onClose} aria-label="Sluiten">
            ×
          </button>
        </>
      )}
    </dialog>
  )
}
