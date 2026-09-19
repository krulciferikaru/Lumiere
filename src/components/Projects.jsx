import { useMemo, useState } from 'react'
import { categories, projects } from '../data/projects'
import FilterTabs from './FilterTabs'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'all') return projects
    return projects.filter((project) => project.category.includes(activeCategory))
  }, [activeCategory])

  return (
    <section id="projects" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Selected Work" title="Projects & Designs" />
        </Reveal>

        <Reveal delay={100} className="mb-12">
          <FilterTabs categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />
        </Reveal>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 75}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
