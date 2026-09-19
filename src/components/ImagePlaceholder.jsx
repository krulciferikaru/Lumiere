function ImagePlaceholder({ label = 'Image placeholder', shape = 'rect', variant = 'light', className = '' }) {
  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-2xl'
  const variantClass = variant === 'dark' ? 'placeholder-surface-dark border-white/20' : 'placeholder-surface border-black/15'
  const iconClass = variant === 'dark' ? 'text-white/40' : 'text-black/40'

  return (
    <div className={`flex items-center justify-center border ${variantClass} ${shapeClass} ${className}`}>
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={iconClass}
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8.5" cy="10" r="1.5" />
          <path d="M21 15l-5-5-9 9" />
        </svg>
        <span className={`text-xs font-medium uppercase tracking-wider ${iconClass}`}>{label}</span>
      </div>
    </div>
  )
}

export default ImagePlaceholder
