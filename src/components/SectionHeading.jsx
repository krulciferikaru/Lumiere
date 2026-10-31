import RansomText from './RansomText'

function SectionHeading({ eyebrow, title, tone = 'light' }) {
  const eyebrowClass = tone === 'dark' ? 'bg-crimson text-white' : 'bg-ink text-white'
  const surfaceClass = { light: 'on-light', dark: 'on-dark', red: 'on-red' }[tone]

  return (
    <div className={`mb-12 flex flex-col items-start gap-4 ${surfaceClass}`}>
      <span className={`slash-label ${eyebrowClass}`}>
        <span>{eyebrow}</span>
      </span>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl">
        <RansomText text={title} />
      </h2>
    </div>
  )
}

export default SectionHeading
