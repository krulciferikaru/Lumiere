import { experience } from '../data/experience'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Experience() {
  return (
    <section id="experience" className="bg-[#f5f5f7] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Where I've put in the work." />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((item) => (
            <Reveal key={item.role}>
              <article className="experience-card h-full">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-black/40">
                  {item.duration}
                </span>
                <h3 className="mt-2 font-serif text-xl text-black">{item.role}</h3>
                <p className="text-sm italic text-black/60">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-black/60">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
