import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { useActiveSection } from '../hooks/useActiveSection'

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'

  const ids = useMemo(() => links.map((link) => link.id), [links])
  const activeSection = useActiveSection(ids, isHome)
  // On a case study page, highlight Works since that's where it came from
  const activeId = isHome ? activeSection : 'works'

  function handleNavClick(id) {
    setIsOpen(false)
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <header className="nav-shell fixed inset-x-0 top-0 z-50 border-b-2 border-crimson">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false)
            if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2 font-display text-2xl uppercase tracking-wide text-white"
        >
          <span className="logo-mark" aria-hidden="true" />
          Lumière
        </Link>

        <ul className="isolate hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link.id)}
                aria-current={activeId === link.id ? 'true' : undefined}
                className="nav-link"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`h-0.5 w-6 bg-white transition-transform ${isOpen ? 'translate-y-[4px] rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform ${isOpen ? '-translate-y-[4px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-white/10 px-4 py-4 sm:px-6 md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`w-full py-2 text-left font-display text-xl uppercase tracking-wide ${
                  activeId === link.id ? 'text-crimson' : 'text-white/70'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
