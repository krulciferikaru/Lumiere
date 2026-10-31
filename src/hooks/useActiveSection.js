import { useEffect, useState } from 'react'

// Scroll-spy: returns the id of the section currently crossing the upper third of the viewport
export function useActiveSection(ids, enabled = true) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    if (!enabled) return

    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -65% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids, enabled])

  return activeId
}
