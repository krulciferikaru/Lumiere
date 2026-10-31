import crimsonWeaveImg from '../assets/img/Crimson Weave.webp'
import spiderverseImg from '../assets/img/Spider-Man Across the Spider-Verse Poster.webp'
import onlyExceptionImg from '../assets/img/You Are My Only Exception.webp'

const collage = [
  { src: onlyExceptionImg, className: 'left-0 top-10 w-[46%] -rotate-6 z-10' },
  { src: spiderverseImg, className: 'left-[30%] top-0 w-[44%] rotate-3 z-20' },
  { src: crimsonWeaveImg, className: 'right-0 top-24 w-[42%] rotate-[8deg] z-10' },
]

function Hero() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative isolate flex min-h-svh items-center overflow-hidden bg-ink px-4 pb-28 pt-28 sm:px-6">
      {/* Red slab cutting in from the right */}
      <div
        className="absolute inset-y-0 right-0 -z-10 w-full bg-crimson [clip-path:polygon(55%_0,100%_0,100%_38%)] lg:[clip-path:polygon(64%_0,100%_0,100%_100%,48%_100%)]"
        aria-hidden="true"
      />
      <div
        className="halftone absolute inset-y-0 right-0 -z-10 hidden w-1/2 lg:block text-black/25 [mask-image:linear-gradient(to_left,black,transparent)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div className="page-enter">
          <p className="slash-label bg-white text-ink">
            <span>Graphic Designer &middot; Aspiring UI/UX Designer &middot; BSIT Student</span>
          </p>

          <h1 className="display mt-6 text-[clamp(3.25rem,6vw,6rem)] text-white">
            Designing with{' '}
            <span className="inline-block -skew-x-12 bg-crimson px-3 lg:bg-white lg:text-ink">
              <span className="inline-block skew-x-12">intent.</span>
            </span>
            <br />
            Building with{' '}
            <span className="inline-block -skew-x-12 bg-white px-3 text-ink lg:bg-crimson lg:text-white">
              <span className="inline-block skew-x-12">passion.</span>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base lg:max-w-md leading-relaxed text-white/75 sm:text-lg">
            I'm Jan Lloyd Nathaniel Francisco, a graphic designer and Information Technology student from Nueva
            Ecija, Philippines. I make posters, banners, and interfaces, and I build some of them in code.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button type="button" onClick={() => scrollTo('works')} className="btn-slab btn-primary">
              <span>Check out my works!</span>
            </button>
            <button type="button" onClick={() => scrollTo('contact')} className="btn-slab btn-secondary">
              <span>Get in touch</span>
            </button>
          </div>
        </div>

        <div className="relative hidden aspect-[5/6] lg:block" aria-hidden="true">
          {collage.map((item) => (
            <img
              key={item.src}
              src={item.src}
              alt=""
              className={`absolute border-4 border-white shadow-[10px_10px_0_#0b0b0b] ${item.className}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
