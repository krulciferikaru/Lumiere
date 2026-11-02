import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTransitionNavigate } from '../hooks/useTransitionNavigate'
import { TransitionLink } from './PageTransition'

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const go = useTransitionNavigate()
  const isHome = pathname === '/'
  const triggerRef = useRef(null)
  const menuRef = useRef(null)

  const ids = useMemo(() => links.map((link) => link.id), [links])
  const activeSection = useActiveSection(ids, isHome)
  // On a case study page, highlight Works since that's where it came from
  const activeId = isHome ? activeSection : 'works'

  // Phone menu focus: move in on open, keep Tab inside (menu button + links), Escape closes
  useEffect(() => {
    if (!isOpen) return
    const menu = menuRef.current
    // A short timeout (not rAF, which stalls in background tabs) lets the menu become visible first
    const timer = setTimeout(() => menu?.querySelector('button')?.focus(), 30)

    function onKey(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const items = [triggerRef.current, ...menu.querySelectorAll('button')]
      const index = items.indexOf(document.activeElement)
      const next = event.shiftKey ? index - 1 : index + 1
      event.preventDefault()
      items[(next + items.length) % items.length].focus()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  // Every section jump is a scene change: wipe, jump, reveal
  function handleNavClick(link) {
    setIsOpen(false)
    go(isHome ? `#${link.id}` : `/#${link.id}`, link.label)
  }

  function handleLogoClick(event) {
    setIsOpen(false)
    if (isHome) {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="nav-shell fixed inset-x-0 top-0 z-50 border-b-2 border-crimson">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <TransitionLink
            to="/"
            label="Home"
            onClick={handleLogoClick}
            className="flex items-center gap-2 font-display text-2xl uppercase tracking-wide text-white"
          >
            <span className="logo-mark" aria-hidden="true" />
            Lumière
          </TransitionLink>

          <ul className="isolate hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link)}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className="nav-link"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? 'translate-y-[4px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? '-translate-y-[4px] -rotate-45' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Phone menu: a black panel cuts in from the right, a red slab follows, then each link slashes in */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className="mobile-menu md:hidden"
        data-open={isOpen}
        inert={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="mobile-menu-slab" aria-hidden="true" />
        <div className="halftone absolute inset-0 text-white/5" aria-hidden="true" />
        <ul className="relative flex h-full flex-col justify-center gap-3 px-6 pt-16">
          {links.map((link, index) => (
            <li key={link.id} className="mobile-menu-item" style={{ '--i': index }}>
              <button
                type="button"
                onClick={() => handleNavClick(link)}
                aria-current={activeId === link.id ? 'true' : undefined}
                className="mobile-menu-link"
              >
                <span>{link.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
