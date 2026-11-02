import { TransitionLink } from './PageTransition'
import ArrowIcon from './ArrowIcon'

function CaseStudyCard({ study }) {
  return (
    <TransitionLink to={`/work/${study.slug}`} label={study.title} className="case-card group">
      <div className="aspect-[16/10] overflow-hidden border-b-3 border-ink bg-paper">
        <img
          src={study.cover}
          alt={study.coverAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="slash-label self-start bg-crimson text-white">
          <span>{study.kind}</span>
        </span>
        <h3 className="display mt-4 text-3xl sm:text-4xl">{study.title}</h3>
        <p className="mt-1 font-serif text-xl italic text-ink/70">{study.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{study.summary}</p>
        <span className="mt-auto flex items-center gap-2 pt-6 font-display text-lg uppercase tracking-wide text-crimson">
          View case study
          <span className="case-card-arrow">
            <ArrowIcon />
          </span>
        </span>
      </div>
    </TransitionLink>
  )
}

export default CaseStudyCard
