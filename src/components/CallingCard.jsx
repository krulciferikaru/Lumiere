import { useEffect, useRef, useState } from 'react'
import { siteVersions } from '../data/versions'
import { useTransitionNavigate } from '../hooks/useTransitionNavigate'
import ArrowIcon from './ArrowIcon'

// A small calling card that floats at the bottom right of every page, lying tilted like a card
// left on a table. Clicking it springs open a "time machine": every version of this site, served
// from this same site. Picking an archived one plays the wipe and loads it.
function CallingCard() {
  const [isOpen, setIsOpen] = useState(false)
  const go = useTransitionNavigate()
  const triggerRef = useRef(null)
  const panelRef = useRef(null)

  // Open: focus the first link. Escape or a click outside closes and hands focus back to the card.
  useEffect(() => {
    if (!isOpen) return
    const timer = setTimeout(() => panelRef.current?.querySelector('button.calling-version')?.focus(), 30)

    function close() {
      setIsOpen(false)
      triggerRef.current?.focus()
    }
    function onKey(event) {
      if (event.key === 'Escape') close()
    }
    function onPointerDown(event) {
      if (!panelRef.current?.contains(event.target) && !triggerRef.current?.contains(event.target)) setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointerDown)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [isOpen])

  return (
    <div className="calling-fab">
      <div
        ref={panelRef}
        id="calling-card-panel"
        role="dialog"
        aria-labelledby="calling-card-title"
        className="calling-panel"
        data-open={isOpen}
        inert={!isOpen}
      >
        <button
          type="button"
          onClick={() => {
            setIsOpen(false)
            triggerRef.current?.focus()
          }}
          className="calling-panel-close"
          aria-label="Close calling card"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <p className="slash-label bg-ink text-white">
          <span>Time machine</span>
        </p>
        <h2 id="calling-card-title" className="display mt-4 text-3xl text-white">
          Reveal your past form!
        </h2>
        <ul className="mt-5 space-y-3">
          {siteVersions.map((version, index) => {
            const body = (
              <>
                <span className="calling-version-tag">{version.label}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl uppercase leading-none">{version.title}</span>
                  <span className="mt-1 block text-xs text-white/80">
                    {version.note} &middot; {version.year}
                  </span>
                </span>
              </>
            )
            return (
              <li key={version.id} className="calling-panel-item" style={{ '--i': index }}>
                {version.current ? (
                  // The version you're on isn't a link; it's marked as on air
                  <div className="calling-version calling-version-current" aria-current="page">
                    {body}
                    <span className="calling-on-air">Live</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="calling-version w-full text-left"
                    onClick={() => {
                      setIsOpen(false)
                      go(version.href, version.label)
                    }}
                  >
                    {body}
                    <ArrowIcon className="text-lg" />
                  </button>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="calling-fab-button"
        aria-expanded={isOpen}
        aria-controls="calling-card-panel"
        aria-label={isOpen ? 'Close the time machine' : 'Open the time machine: reveal past forms of this site'}
      >
        <span className="calling-fab-card" aria-hidden="true">
          <span className="calling-fab-slash" />
          <span className="calling-fab-star" />
          <span className="calling-fab-word">Lumière</span>
        </span>
      </button>
    </div>
  )
}

export default CallingCard
