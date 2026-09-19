function FilterTabs({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = category.key === activeCategory
        return (
          <button
            key={category.key}
            type="button"
            onClick={() => onSelect(category.key)}
            aria-pressed={isActive}
            className={`filter-tab ${isActive ? 'filter-tab-active' : ''}`}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}

export default FilterTabs
