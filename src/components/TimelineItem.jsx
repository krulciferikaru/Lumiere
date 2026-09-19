function TimelineItem({ eyebrow, title, subtitle, description }) {
  return (
    <div className="timeline-item relative pl-8">
      <span className="timeline-dot" aria-hidden="true" />
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40">{eyebrow}</p>
      <h3 className="mt-1 font-serif text-xl text-black">{title}</h3>
      {subtitle && <p className="text-sm italic text-black/60">{subtitle}</p>}
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-black/60">{description}</p>
    </div>
  )
}

export default TimelineItem
