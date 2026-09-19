function Footer() {
  function scrollToTop() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="section-invert border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} Lumière — Jan Lloyd Nathaniel Francisco. All rights reserved.
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className="text-xs font-medium uppercase tracking-[0.15em] text-white/50 hover:text-white"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}

export default Footer
