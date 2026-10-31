const aspectClasses = {
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
}

function DesignTile({ work, onOpen, aspect = 'portrait' }) {
  return (
    <button type="button" onClick={() => onOpen(work)} className="design-tile" aria-label={`View ${work.title}`}>
      {/* Every tile in a group shares one frame; the lightbox shows the full, uncropped piece */}
      <img
        src={work.image}
        alt=""
        loading="lazy"
        decoding="async"
        className={`block w-full object-cover ${aspectClasses[aspect]}`}
        style={{ objectPosition: work.focus }}
      />
      <span className="design-tile-caption">
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-crimson">
          {work.tags.join(' / ')}
        </span>
        <span className="display mt-1 block text-xl">{work.title}</span>
      </span>
    </button>
  )
}

export default DesignTile
