function Hero() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="section-invert flex min-h-screen flex-col justify-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
          Graphic Designer &middot; UI/UX Designer &middot; BSIT Student
        </p>
        <h1 className="max-w-4xl font-serif text-6xl leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Designing with intent.
          <br />
          Building with passion.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          I'm Jan Lloyd Nathaniel Francisco — a graphic designer and an Information Technology student from Nueva Ecija,
          Philippines, crafting posters, banners, interfaces, and code that speak clearly.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button type="button" onClick={() => scrollTo('projects')} className="btn-invert-primary">
            Check out my works!
          </button>
          <button type="button" onClick={() => scrollTo('contact')} className="btn-invert-secondary">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
