import { experience } from '../data/experience'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Experience() {
  return (
    <section id="experience" className="slant-top relative isolate bg-crimson px-4 pb-28 sm:px-6">
      <div className="halftone absolute inset-0 -z-10 text-black/15 [mask-image:linear-gradient(to_bottom,transparent,black)]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Where I've put in the work" tone="red" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((item, index) => (
            <Reveal key={item.org} as="article" delay={index * 100} className="h-full border-3 border-ink bg-ink p-6 shadow-[8px_8px_0_#fff]">
              <span className="slash-label bg-crimson text-white">
                <span>{item.duration}</span>
              </span>
              <h3 className="display mt-4 text-2xl">{item.role}</h3>
              <p className="mt-1 font-serif text-lg italic text-white/70">{item.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
