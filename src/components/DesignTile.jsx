function DesignTile({ work, onOpen }) {
  return (
    <button type="button" onClick={() => onOpen(work)} className="design-tile" aria-label={`View ${work.title}`}>
      {/* Every tile is the same 3:4 frame; the lightbox shows the full, uncropped piece */}
      <img
        src={work.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="block aspect-[3/4] w-full object-cover"
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
