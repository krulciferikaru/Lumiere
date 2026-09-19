import ImagePlaceholder from './ImagePlaceholder'

function ProjectCard({ project }) {
  const hasImage = Boolean(project.image)
  const aspectClass = hasImage
    ? project.orientation === 'landscape'
      ? 'aspect-video'
      : 'aspect-[3/4]'
    : 'aspect-[4/3]'

  return (
    <article className="project-card group">
      {hasImage ? (
        <div className={`w-full overflow-hidden rounded-2xl border border-black/10 ${aspectClass}`}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      ) : (
        <ImagePlaceholder label="Image placeholder" className={`w-full ${aspectClass}`} />
      )}
      <div className="pt-5">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-serif text-xl text-black">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-black/60">{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link mt-3 inline-flex items-center gap-1 text-sm font-medium text-black"
          >
            View on GitHub
            <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
