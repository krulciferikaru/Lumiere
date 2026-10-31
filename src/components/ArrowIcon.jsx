// Diagonal arrow. "up-right" points forward (open, next); "up-left" points back.
function ArrowIcon({ direction = 'up-right', className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      className={`inline-block h-[1em] w-[1em] shrink-0 ${direction === 'up-left' ? '-scale-x-100' : ''} ${className}`}
    >
      <path d="M6 18 18 6" />
      <path d="M8 6h10v10" />
    </svg>
  )
}

export default ArrowIcon
