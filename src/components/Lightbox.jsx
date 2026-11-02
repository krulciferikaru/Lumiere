import { useEffect, useRef, useState } from 'react'
import ArrowIcon from './ArrowIcon'

// `stacked` puts the text under the image, which suits wide screenshots
function Lightbox({ work, onClose, stacked = false }) {
  const dialogRef = useRef(null)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (work && !dialog.open) dialog.showModal()
    if (!work && dialog.open) dialog.close()
  }, [work])

  // Play the exit (mirror of the entrance), then actually close
  function requestClose() {
    if (closing) return
    setClosing(true)
    setTimeout(() => {
      setClosing(false)
      onClose()
    }, 180)
  }

  // Escape fires "cancel"; take it over so it animates too
  function handleCancel(event) {
    event.preventDefault()
    requestClose()
  }

  // A click on the dialog element itself (not its content) is a click on the backdrop
  function handleClick(event) {
    if (event.target === dialogRef.current) requestClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={`lightbox m-auto ${closing ? 'is-closing' : ''}`}
      onClose={onClose}
      onCancel={handleCancel}
      onClick={handleClick}
    >
      {work && (
        <div className={`flex flex-col gap-5 ${stacked ? '' : 'lg:flex-row lg:items-start'}`}>
          <img
            src={work.image}
            alt={work.title}
            className={`w-auto max-w-full self-center border-4 border-white object-contain ${
              stacked
                ? 'max-h-[calc(100dvh-14rem)]'
                : 'max-h-[70dvh] min-w-0 lg:max-h-[calc(100dvh-4rem)] lg:max-w-[calc(100%-22rem)]'
            }`}
          />
          <div className={`shrink-0 ${stacked ? 'flex flex-wrap items-end justify-between gap-x-8 gap-y-4' : 'max-w-sm lg:w-80 lg:pt-2'}`}>
            <div className="max-w-xl">
              {work.tags && (
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-crimson">
                  {work.tags.join(' / ')}
                </span>
              )}
              <h3 className="display mt-2 text-3xl sm:text-4xl">{work.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{work.description}</p>
              {work.links?.length > 0 && (
                <div className="mt-5">
                  {work.links.length > 1 && (
                    <p className="eyebrow mb-3 text-white/60">View the posts on Facebook</p>
                  )}
                  <div className="flex flex-wrap gap-4">
                    {work.links.map((href, index) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className={`btn-slab btn-primary ${work.links.length > 1 ? 'px-4! py-2! text-sm!' : ''}`}
                      >
                        <span className="flex items-center gap-2">
                          {work.links.length > 1 ? `Post ${index + 1}` : 'View on Facebook'}
                          <ArrowIcon />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button type="button" onClick={requestClose} className={`btn-slab btn-secondary ${stacked ? '' : 'mt-6'}`} autoFocus>
              <span>Close</span>
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}

export default Lightbox
