function Footer() {
  return (
    <footer className="border-t-2 border-crimson bg-ink px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} Lumière &middot; Jan Lloyd Nathaniel Francisco. All rights reserved.
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-sm uppercase tracking-[0.12em] text-white/60 hover:text-crimson"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}

export default Footer
