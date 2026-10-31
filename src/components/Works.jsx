import { useRef, useState } from 'react'
import { caseStudies } from '../data/caseStudies'
import { categories, designWorks } from '../data/projects'
import CaseStudyCard from './CaseStudyCard'
import DesignTile from './DesignTile'
import FilterTabs from './FilterTabs'
import Lightbox from './Lightbox'
import SectionHeading from './SectionHeading'

// How many items each group shows in the All tab
const PREVIEW_COUNT = 3

function GroupLabel({ children }) {
  return (
    <h3 className="mb-6 flex items-center gap-4 font-display text-2xl uppercase tracking-wide text-ink">
      {children}
      <span className="h-0.5 flex-1 bg-ink" aria-hidden="true" />
    </h3>
  )
}

function ViewAllButton({ count, onClick }) {
  return (
    <div className="mt-10 flex justify-center">
      <button type="button" onClick={onClick} className="btn-slab btn-primary">
        <span>View all ({count})</span>
      </button>
    </div>
  )
}

function Works() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openWork, setOpenWork] = useState(null)
  const tabsRef = useRef(null)

  const isAll = activeCategory === 'all'
  const showUiux = activeCategory !== 'design'
  const showDesign = activeCategory !== 'uiux'
  const visibleStudies = isAll ? caseStudies.slice(0, PREVIEW_COUNT) : caseStudies
  const visibleWorks = isAll ? designWorks.slice(0, PREVIEW_COUNT) : designWorks

  // "View all" opens that group's tab and brings the tabs back into view
  function viewAll(key) {
    setActiveCategory(key)
    tabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="works" className="slant-top relative isolate bg-paper px-4 pb-28 text-ink sm:px-6">
      <div className="halftone absolute right-0 top-0 -z-10 h-80 w-80 text-crimson/30 [mask-image:radial-gradient(circle_at_top_right,black,transparent_70%)]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected Works" title="Projects & Designs" />

        <div ref={tabsRef} className="mb-12 scroll-mt-24 pl-2">
          <FilterTabs categories={categories} activeCategory={activeCategory} onSelect={setActiveCategory} />
        </div>

        <div key={activeCategory} className="tab-panel space-y-16">
          {showUiux && (
            <div>
              {isAll && <GroupLabel>UI/UX Design</GroupLabel>}
              <div className={`grid gap-8 md:grid-cols-2 ${visibleStudies.length >= 3 ? 'lg:grid-cols-3' : ''}`}>
                {visibleStudies.map((study) => (
                  <CaseStudyCard key={study.slug} study={study} />
                ))}
              </div>
              {isAll && caseStudies.length > PREVIEW_COUNT && (
                <ViewAllButton count={caseStudies.length} onClick={() => viewAll('uiux')} />
              )}
            </div>
          )}

          {showDesign && (
            <div>
              {isAll && <GroupLabel>Graphic Design</GroupLabel>}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visibleWorks.map((work) => (
                  <DesignTile key={work.id} work={work} onOpen={setOpenWork} />
                ))}
              </div>
              {isAll && designWorks.length > PREVIEW_COUNT && (
                <ViewAllButton count={designWorks.length} onClick={() => viewAll('design')} />
              )}
            </div>
          )}
        </div>
      </div>

      <Lightbox work={openWork} onClose={() => setOpenWork(null)} />
    </section>
  )
}

export default Works
