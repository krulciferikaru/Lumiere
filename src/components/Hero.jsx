import { useRef, useState } from 'react'
import spiderverseImg from '../assets/img/Spider-Man Across the Spider-Verse Poster.webp'
import naioReiPosterImg from '../assets/img/Naoi Rei Poster.webp'
import likeARockstarImg from '../assets/img/Like a Rockstar.webp'
import { useTransitionNavigate } from '../hooks/useTransitionNavigate'

const collage = [likeARockstarImg, naioReiPosterImg, spiderverseImg]

// `--stage` sets the order each piece enters in; see .stage in index.css
const order = (n) => ({ '--stage': n })

const MAX_TILT_DEG = 12

// A poster that leans toward the mouse: the side under the cursor dips, like pressing on a card.
// Three layers: the outer div plays the entrance, the slot div moves between carousel spots
// (see .poster-slot), and the image tilts.
function TiltPoster({ src, slot, stage, onClick }) {
  const imgRef = useRef(null)

  function handleMove(event) {
    if (event.pointerType !== 'mouse') return
    const img = imgRef.current
    const box = img.getBoundingClientRect()
    const x = (event.clientX - box.left) / box.width - 0.5
    const y = (event.clientY - box.top) / box.height - 0.5
    img.style.setProperty('--tilt-x', `${(-y * MAX_TILT_DEG).toFixed(2)}deg`)
    img.style.setProperty('--tilt-y', `${(x * MAX_TILT_DEG).toFixed(2)}deg`)
  }

  function handleLeave() {
    imgRef.current.style.removeProperty('--tilt-x')
    imgRef.current.style.removeProperty('--tilt-y')
  }

  return (
    // Depth (z-index) lives on this outer layer: its entrance animation makes it a stacking context
    <div className="poster-layer stage stage-fly pointer-events-none absolute inset-0" style={order(stage)} data-slot={slot}>
      <div
        className="hero-poster poster-slot pointer-events-auto absolute left-0 top-0 w-[44%] cursor-pointer"
        data-slot={slot}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        onClick={onClick}
      >
        <img ref={imgRef} src={src} alt="" className="poster-tilt block w-full border-4 border-white" />
      </div>
    </div>
  )
}

function Hero() {
  const go = useTransitionNavigate()
  // Clicking any poster turns the carousel one step: left -> front -> right -> left
  const [turn, setTurn] = useState(0)

  return (
    <section id="home" className="relative isolate flex min-h-svh items-center overflow-hidden bg-ink px-4 pb-28 pt-28 sm:px-6">
      {/* Red slab cutting in from the right */}
      <div
        className="stage stage-right absolute inset-y-0 right-0 -z-10 w-full bg-crimson [clip-path:polygon(55%_0,100%_0,100%_38%)] lg:[clip-path:polygon(64%_0,100%_0,100%_100%,48%_100%)]"
        style={order(0)}
        aria-hidden="true"
      />
      {/* Slow background drift: halftone and two thin slashes */}
      <div
        className="ambient-drift halftone absolute -inset-y-10 -right-10 -z-10 hidden w-[55%] text-black/25 lg:block [mask-image:linear-gradient(to_left,black,transparent)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <span className="ambient-drift-slow absolute -left-1/4 top-[18%] h-px w-[150%] -rotate-[18deg] bg-white/10" />
        <span className="ambient-drift absolute -left-1/4 top-[72%] h-0.5 w-[150%] -rotate-[18deg] bg-crimson/40" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="stage stage-left slash-label bg-white text-ink" style={order(1)}>
            <span>Graphic Designer &middot; Aspiring UI/UX Designer &middot; BSIT Student</span>
          </p>

          <h1 className="display mt-6 text-[clamp(3.25rem,6vw,6rem)] text-white">
            <span className="stage stage-clip" style={order(2)}>
              Designing with{' '}
              <span className="inline-block -skew-x-12 bg-crimson px-3 lg:bg-white lg:text-ink">
                <span className="inline-block skew-x-12">intent.</span>
              </span>
            </span>
            <span className="stage stage-clip" style={order(3)}>
              Building with{' '}
              <span className="inline-block -skew-x-12 bg-white px-3 text-ink lg:bg-crimson lg:text-white">
                <span className="inline-block skew-x-12">passion.</span>
              </span>
            </span>
          </h1>

          <p className="stage stage-up mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:max-w-md" style={order(4)}>
            I'm Jan Lloyd Nathaniel Francisco, a graphic designer and Information Technology student from Nueva
            Ecija, Philippines. I make posters, banners, and interfaces, and I build some of them in code.
          </p>

          <div className="stage stage-left mt-10 flex flex-wrap gap-5" style={order(5)}>
            <button type="button" onClick={() => go('#works', 'Works')} className="btn-slab btn-primary">
              <span>Check out my works!</span>
            </button>
            <button type="button" onClick={() => go('#contact', 'Contact')} className="btn-slab btn-secondary">
              <span>Get in touch</span>
            </button>
          </div>
        </div>

        <div className="relative hidden aspect-[5/6] lg:block" aria-hidden="true">
          {collage.map((src, index) => (
            <TiltPoster
              key={src}
              src={src}
              slot={(index + turn) % collage.length}
              stage={5 + index}
              onClick={() => setTurn((current) => current + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
