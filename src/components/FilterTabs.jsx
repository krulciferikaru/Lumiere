import { useLayoutEffect, useRef, useState } from 'react'

function FilterTabs({ categories, activeCategory, onSelect }) {
  const railRef = useRef(null)
  const buttonRefs = useRef({})
  const [indicator, setIndicator] = useState(null)

  // Measure the active tab so the red slab can slide to it
  useLayoutEffect(() => {
    function measure() {
      const button = buttonRefs.current[activeCategory]
      if (button) setIndicator({ x: button.offsetLeft, width: button.offsetWidth })
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(railRef.current)
    return () => observer.disconnect()
  }, [activeCategory])

  return (
    <div ref={railRef} className="tab-rail">
      {indicator && (
        <span
          className="tab-indicator"
          style={{ width: indicator.width, transform: `translateX(${indicator.x}px)` }}
          aria-hidden="true"
        />
      )}
      {categories.map((category) => {
        const isActive = category.key === activeCategory
        return (
          <button
            key={category.key}
            ref={(el) => {
              buttonRefs.current[category.key] = el
            }}
            type="button"
            onClick={() => onSelect(category.key)}
            aria-pressed={isActive}
            className="tab-button"
          >
            <span>{category.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default FilterTabs
