import { useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false)
  const sectionIds = links.map((link) => link.id)
  const activeId = useActiveSection(sectionIds)

  function handleNavClick(id) {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="font-serif text-xl tracking-tight text-black"
        >
          JL Francisco
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                  activeId === link.id ? 'nav-link-active text-black' : 'text-black/50 hover:text-black'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`h-px w-6 bg-black transition-transform ${isOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-black transition-transform ${isOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-black/10 bg-white px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={`w-full py-2 text-left text-sm font-medium ${
                  activeId === link.id ? 'text-black' : 'text-black/50'
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
