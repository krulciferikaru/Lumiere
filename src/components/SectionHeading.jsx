function SectionHeading({ eyebrow, title, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`mb-12 flex flex-col ${alignClass}`}>
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-black/40">{eyebrow}</span>
      <h2 className="mt-2 font-serif text-4xl tracking-tight text-black sm:text-5xl">{title}</h2>
    </div>
  )
}

export default SectionHeading
