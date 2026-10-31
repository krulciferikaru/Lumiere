function ImagePlaceholder({ label = 'Image placeholder', className = '' }) {
  return (
    <div className={`placeholder-surface flex items-center justify-center border-3 border-dashed border-ink/30 ${className}`}>
      <div className="flex flex-col items-center gap-2 px-4 text-center text-ink/45">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" />
          <circle cx="8.5" cy="10" r="1.5" />
          <path d="M21 15l-5-5-9 9" />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
      </div>
    </div>
  )
}

export default ImagePlaceholder
