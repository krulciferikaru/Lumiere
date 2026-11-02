import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { TransitionContext, useTransitionNavigate } from '../hooks/useTransitionNavigate'
import RansomText from './RansomText'

// Match the CSS: the last slab lands at 105ms + 600ms, and the last one leaves at 210ms + 640ms
const COVER_MS = 720
// A label's letters slam in like a section heading: first at 360ms, then every 32ms, each taking 420ms.
// The cover holds until the last one lands, plus a short beat to read it.
const LABEL_START_MS = 360
const LABEL_STAGGER_MS = 32
const LETTER_MS = 420
const LABEL_HOLD_MS = 120

function coverMsFor(label) {
  const letters = label.replace(/\s/g, '').length
  if (!letters) return COVER_MS
  return Math.max(COVER_MS, LABEL_START_MS + (letters - 1) * LABEL_STAGGER_MS + LETTER_MS + LABEL_HOLD_MS)
}
const REVEAL_MS = 870
const INTRO_MS = 1650
const INTRO_KEY = 'lumiere-intro-seen'
// Hand-off between this site and archived versions (public/archived/*/index.html reads and writes it too):
// the page you leave covers the screen and sets it; the page you land on starts covered and sweeps out.
const TRAVEL_KEY = 'lumiere-time-travel'

// Archived versions are separate static pages, not routes in this app
function isDocumentPath(to) {
  return typeof to === 'string' && to.startsWith('/archived/')
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// The intro plays on a first visit only. Storage can be blocked, so failures just mean "seen".
function shouldPlayIntro() {
  if (prefersReducedMotion()) return false
  try {
    return !window.localStorage.getItem(INTRO_KEY)
  } catch {
    return false
  }
}

// Arriving from an archived version's time machine: start covered, showing "Now"
function readArrival() {
  try {
    return window.sessionStorage.getItem(TRAVEL_KEY) === 'Lumière V2'
  } catch {
    return false
  }
}

function markTravel(to) {
  try {
    window.sessionStorage.setItem(TRAVEL_KEY, to)
  } catch {
    // Blocked storage: the next page just loads without the matching reveal
  }
}

function rememberIntro() {
  try {
    window.localStorage.setItem(INTRO_KEY, '1')
  } catch {
    // Private mode or blocked storage: the intro may play again next visit, which is fine
  }
}

// Persona-style scene change. Phases: idle -> cover -> (navigate or jump) -> reveal -> idle.
// A first visit starts in "intro", which hands off to "reveal".
// `to` is a route ("/work/swift", "/#works") or a same-page section ("#works").
export function PageTransitionProvider({ children }) {
  const navigate = useNavigate()
  const [phase, setPhase] = useState(() => {
    if (readArrival()) return prefersReducedMotion() ? 'idle' : 'reveal'
    return shouldPlayIntro() ? 'intro' : 'idle'
  })
  const [label, setLabel] = useState(() => (readArrival() ? 'Now' : ''))
  const pending = useRef(null)
  const phaseRef = useRef(phase)

  const go = useCallback(
    (to, nextLabel = '') => {
      if (prefersReducedMotion()) {
        if (to.startsWith('#')) document.getElementById(to.slice(1))?.scrollIntoView()
        else if (isDocumentPath(to)) window.location.assign(to)
        else navigate(to)
        return
      }
      // Clicks during a transition are queued; the latest one wins
      pending.current = { to, label: nextLabel }
      if (phaseRef.current === 'idle') {
        setLabel(nextLabel)
        setPhase('cover')
      }
    },
    [navigate],
  )

  const skipIntro = useCallback(() => {
    rememberIntro()
    setPhase((current) => (current === 'intro' ? 'reveal' : current))
  }, [])

  // Back and forward buttons change the page without a cover, so just sweep out.
  // Coming back from an archived version can restore this page from the browser cache while it was
  // still covered; sweep out then too, so it never stays black.
  useEffect(() => {
    function onPopState() {
      if (!prefersReducedMotion()) setPhase('reveal')
    }
    function onPageShow(event) {
      if (event.persisted) setPhase(prefersReducedMotion() ? 'idle' : 'reveal')
    }
    window.addEventListener('popstate', onPopState)
    window.addEventListener('pageshow', onPageShow)
    return () => {
      window.removeEventListener('popstate', onPopState)
      window.removeEventListener('pageshow', onPageShow)
    }
  }, [])

  // The arrival flag is read once (above); clear it so a reload doesn't replay the reveal
  useEffect(() => {
    try {
      window.sessionStorage.removeItem(TRAVEL_KEY)
    } catch {
      // Blocked storage: nothing to clear
    }
  }, [])

  // Let CSS hold staged entrances while the screen is covered, and pause ambient motion in hidden tabs
  useEffect(() => {
    phaseRef.current = phase
    document.documentElement.dataset.transition = phase
  }, [phase])

  useEffect(() => {
    function onVisibility() {
      document.documentElement.dataset.pageHidden = document.hidden ? 'true' : 'false'
    }
    onVisibility()
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  // Timers rather than animationend, which never fires if the tab is in the background
  useEffect(() => {
    if (phase === 'idle') return
    const delay = { intro: INTRO_MS, cover: coverMsFor(label), reveal: REVEAL_MS }[phase]
    const timer = setTimeout(() => {
      if (phase === 'intro') {
        rememberIntro()
        setPhase('reveal')
      } else if (phase === 'cover') {
        const { to } = pending.current ?? {}
        pending.current = null
        if (isDocumentPath(to)) {
          // A separate page (an archived version): load it while the screen stays covered.
          // The flag tells that page to open covered and finish the wipe.
          markTravel(to)
          window.location.assign(to)
          return
        }
        if (to?.startsWith('#')) document.getElementById(to.slice(1))?.scrollIntoView({ behavior: 'instant' })
        else if (to) navigate(to)
        setPhase('reveal')
      } else if (pending.current) {
        // Someone clicked while the slabs were leaving: run that transition now
        setLabel(pending.current.label)
        setPhase('cover')
      } else {
        setPhase('idle')
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [phase, navigate, label])

  return (
    <TransitionContext.Provider value={go}>
      {children}
      <div className="p5-transition" data-phase={phase} aria-hidden="true">
        <div className="p5-panel p5-panel-red" />
        <div className="p5-panel p5-panel-white" />
        <div className="p5-panel p5-panel-ink">
          <span className="halftone absolute inset-0 text-white/10" />
        </div>
        {label ? (
          <span
            className="p5-transition-label on-dark"
            // Longest word sets the size cap, so a single long word still fits on a phone
            style={{ '--chars': Math.max(...label.split(' ').map((word) => word.length)) }}
          >
            <RansomText text={label} />
          </span>
        ) : (
          <span className="p5-transition-star" />
        )}

        {phase === 'intro' && (
          <div className="p5-intro">
            <span className="p5-intro-star" />
            <span className="p5-intro-title">
              <span>Lumière</span>
            </span>
            <span className="p5-intro-role">
              <span>Jan Lloyd Nathaniel Francisco &middot; Designer</span>
            </span>
          </div>
        )}
      </div>

      {phase === 'intro' && (
        <button type="button" onClick={skipIntro} className="p5-intro-skip btn-slab btn-secondary" autoFocus>
          <span>Skip intro</span>
        </button>
      )}
    </TransitionContext.Provider>
  )
}

// A router Link that plays the transition. Modified clicks (new tab, etc.) behave normally.
export function TransitionLink({ to, label, onClick, ...props }) {
  const go = useTransitionNavigate()

  function handleClick(event) {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }
    event.preventDefault()
    go(to, label)
  }

  return <Link to={to} onClick={handleClick} {...props} />
}
