import { useState } from 'react'
import { useParams } from 'react-router'
import ArrowIcon from '../components/ArrowIcon'
import ImagePlaceholder from '../components/ImagePlaceholder'
import Lightbox from '../components/Lightbox'
import { TransitionLink } from '../components/PageTransition'
import Reveal from '../components/Reveal'
import { caseStudies } from '../data/caseStudies'
import NotFound from './NotFound'

function Chapter({ number, title, children }) {
  return (
    <Reveal as="section" className="grid gap-6 border-t-3 border-ink py-14 md:grid-cols-[14rem_1fr] md:gap-12">
      <h2 className="flex items-baseline gap-3 font-display uppercase">
        <span className="text-2xl text-crimson">{number}</span>
        <span className="text-3xl leading-none text-ink">{title}</span>
      </h2>
      <div className="min-w-0">{children}</div>
    </Reveal>
  )
}

function MetaList({ label, items }) {
  return (
    <div>
      <h2 className="slash-label bg-ink text-white">
        <span>{label}</span>
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="border-2 border-ink px-3 py-1.5 text-sm font-semibold text-ink">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Pager({ prev, next }) {
  if (!prev && !next) return null

  return (
    <nav aria-label="More case studies" className="grid border-t-2 border-crimson bg-ink sm:grid-cols-2">
      {prev ? (
        <TransitionLink
          to={`/work/${prev.slug}`}
          label={prev.title}
          className="pager-link pager-link-prev flex flex-col gap-1 px-6 py-10 sm:px-10"
        >
          <span className="eyebrow text-white/50">Previous project</span>
          <span className="flex items-center gap-3 font-display text-2xl uppercase text-white sm:text-3xl">
            <span className="pager-arrow">
              <ArrowIcon direction="up-left" />
            </span>
            Previous: {prev.title}
          </span>
        </TransitionLink>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next && (
        <TransitionLink
          to={`/work/${next.slug}`}
          label={next.title}
          className="pager-link flex flex-col items-end gap-1 border-t border-white/10 px-6 py-10 text-right sm:border-l sm:border-t-0 sm:px-10"
        >
          <span className="eyebrow text-white/50">Next project</span>
          <span className="flex items-center gap-3 font-display text-2xl uppercase text-white sm:text-3xl">
            Next: {next.title}
            <span className="pager-arrow">
              <ArrowIcon />
            </span>
          </span>
        </TransitionLink>
      )}
    </nav>
  )
}

function CaseStudy() {
  const { slug } = useParams()
  const [openOutput, setOpenOutput] = useState(null)
  const index = caseStudies.findIndex((study) => study.slug === slug)
  if (index === -1) return <NotFound />

  const study = caseStudies[index]
  const prev = caseStudies[index - 1]
  const next = caseStudies[index + 1]

  return (
    <main key={study.slug}>
      {/* 1. Project type, title, short description */}
      <header className="relative isolate overflow-hidden bg-ink px-4 pb-24 pt-32 sm:px-6">
        <div
          className="stage stage-right absolute inset-y-0 right-0 -z-10 w-full bg-crimson [clip-path:polygon(60%_0,100%_0,100%_35%)] lg:[clip-path:polygon(82%_0,100%_0,100%_100%,62%_100%)]"
          style={{ '--stage': 0 }}
          aria-hidden="true"
        />
        {/* Staged entrance: back link, label, title, subtitle, summary, links, each from its own side */}
        <div className="mx-auto max-w-6xl">
          <TransitionLink
            to="/#works"
            label="Works"
            className="stage stage-left eyebrow inline-flex items-center gap-2 text-white/60 hover:text-white"
            style={{ '--stage': 1 }}
          >
            <ArrowIcon direction="up-left" className="text-sm" />
            All works
          </TransitionLink>
          <p className="stage stage-left mt-8" style={{ '--stage': 1 }}>
            <span className="slash-label bg-crimson text-white">
              <span>{study.kind}</span>
            </span>
          </p>
          <h1 className="display mt-5 text-[clamp(3.5rem,12vw,8rem)] text-white">
            <span className="stage stage-clip" style={{ '--stage': 2 }}>
              {study.title}
            </span>
          </h1>
          <p className="stage stage-right mt-2 font-serif text-2xl italic text-white/80 sm:text-3xl" style={{ '--stage': 3 }}>
            {study.subtitle}
          </p>
          <p className="stage stage-up mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg" style={{ '--stage': 4 }}>
            {study.summary}
          </p>
          {study.links.length > 0 && (
            <div className="stage stage-left mt-8 flex flex-wrap gap-5" style={{ '--stage': 5 }}>
              {study.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="btn-slab btn-secondary">
                  <span className="flex items-center gap-2">
                    {link.label}
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="bg-paper px-4 pb-20 text-ink sm:px-6">
        <div className="mx-auto max-w-6xl">
          {/* 2. Role and tools */}
          <div className="grid gap-10 py-14 sm:grid-cols-2">
            <MetaList label="My role" items={study.role} />
            <MetaList label="Tools used" items={study.tools} />
          </div>

          {/* 3. Main screen */}
          <Reveal as="figure" className="shot-frame mb-20">
            <img src={study.cover} alt={study.coverAlt} className="block h-auto w-full" />
          </Reveal>

          {/* 4. Overview, problem, users, role */}
          <Chapter number="01" title="Overview">
            <p className="max-w-2xl text-lg leading-relaxed text-ink/80">{study.overview}</p>
          </Chapter>

          <Chapter number="02" title="The problem">
            <p className="max-w-2xl text-lg leading-relaxed text-ink/80">{study.problem}</p>
          </Chapter>

          <Chapter number="03" title="The users">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.users.map((user) => (
                <li key={user.name} className="border-3 border-ink bg-white p-5">
                  <h3 className="font-display text-xl uppercase text-crimson">{user.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{user.need}</p>
                </li>
              ))}
            </ul>
          </Chapter>

          <Chapter number="04" title="My role">
            <p className="max-w-2xl text-lg leading-relaxed text-ink/80">{study.contribution.summary}</p>
            <h3 className="mt-8 font-display text-xl uppercase">What I designed</h3>
            <ul className="mt-4 max-w-2xl space-y-3">
              {study.contribution.designed.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-ink/80">
                  <span className="mt-2.5 h-2 w-3 shrink-0 -skew-x-12 bg-crimson" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Chapter>

          {/* 5. Design process */}
          <Chapter number="05" title="Design process">
            <ol className="space-y-8">
              {study.process.map((step, stepIndex) => (
                <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="flex h-12 w-12 -skew-x-12 items-center justify-center bg-ink font-display text-xl text-white">
                    <span className="skew-x-12">{stepIndex + 1}</span>
                  </span>
                  <div>
                    <h3 className="font-display text-xl uppercase">{step.title}</h3>
                    <p className="mt-1 max-w-2xl leading-relaxed text-ink/75">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Chapter>

          {/* 6. Final outputs */}
          <Chapter number="06" title="Final outputs">
            <div className="grid gap-10 lg:grid-cols-2">
              {study.outputs.map((output) => (
                <figure key={output.title}>
                  {output.image ? (
                    // Natural aspect ratio, so the frame fits the screenshot; click to view it larger
                    <button
                      type="button"
                      onClick={() => setOpenOutput({ image: output.image, title: output.title, description: output.caption })}
                      className="output-shot"
                      aria-label={`View ${output.title} larger`}
                    >
                      <img src={output.image} alt={output.title} loading="lazy" className="block h-auto w-full" />
                    </button>
                  ) : (
                    <ImagePlaceholder label="Screenshot coming soon" className="aspect-video w-full" />
                  )}
                  <figcaption className="mt-3">
                    <span className="font-display text-lg uppercase">{output.title}</span>
                    <span className="block text-sm text-ink/70">{output.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Chapter>
        </div>
      </div>

      <Lightbox work={openOutput} onClose={() => setOpenOutput(null)} stacked />

      {/* 7. Previous / next */}
      <Pager prev={prev} next={next} />
    </main>
  )
}

export default CaseStudy
