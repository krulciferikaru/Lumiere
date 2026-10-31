import { useEffect, useRef } from 'react'

// `stacked` puts the text under the image, which suits wide screenshots
function Lightbox({ work, onClose, stacked = false }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (work && !dialog.open) dialog.showModal()
    if (!work && dialog.open) dialog.close()
  }, [work])

  // A click on the dialog element itself (not its content) is a click on the backdrop
  function handleClick(event) {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog ref={dialogRef} className="lightbox m-auto" onClose={onClose} onClick={handleClick}>
      {work && (
        <div className={`flex flex-col gap-5 ${stacked ? '' : 'lg:flex-row lg:items-start'}`}>
          <img
            src={work.image}
            alt={work.title}
            className={`w-auto max-w-full self-center border-4 border-white object-contain ${
              stacked ? 'max-h-[calc(100dvh-14rem)]' : 'max-h-[70dvh] lg:max-h-[calc(100dvh-4rem)]'
            }`}
          />
          <div className={`shrink-0 ${stacked ? 'flex flex-wrap items-end justify-between gap-x-8 gap-y-4' : 'max-w-sm lg:pt-2'}`}>
            <div className="max-w-xl">
              {work.tags && (
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-crimson">
                  {work.tags.join(' / ')}
                </span>
              )}
              <h3 className="display mt-2 text-3xl sm:text-4xl">{work.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{work.description}</p>
            </div>
            <button type="button" onClick={onClose} className={`btn-slab btn-secondary ${stacked ? '' : 'mt-6'}`} autoFocus>
              <span>Close</span>
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}

export default Lightbox
