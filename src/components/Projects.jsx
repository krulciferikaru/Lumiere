import { useState } from 'react'
import { categories, projects } from '../data/projects'
import FilterTabs from './FilterTabs'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const visibleProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory))

  return (
    <section id="projects" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected Work" title="Projects & Designs" />

        <div className="mb-12">
          <FilterTabs categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />
        </div>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
