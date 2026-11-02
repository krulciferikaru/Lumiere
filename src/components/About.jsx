import { skillGroups } from '../data/skills'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SkillGroup from './SkillGroup'

// Profile facts, all taken from the bio below
const dossier = [
  { label: 'Name', value: 'Jan Lloyd Nathaniel G. Francisco' },
  { label: 'Role', value: 'Graphic Designer · Aspiring UI/UX Designer' },
  { label: 'Based in', value: 'Nueva Ecija, Philippines' },
  { label: 'School', value: 'Central Luzon State University' },
  { label: 'Program', value: 'BS Information Technology, System Development (4th year)' },
  { label: 'Designing since', value: '2023' },
  { label: 'Status', value: 'Open to internships', highlight: true },
]

function About() {
  return (
    <section id="about" className="slant-top-reverse bg-ink px-4 pb-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About Me" title="Who I am" tone="dark" />

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Dossier card: the quick facts, rows filing in one by one */}
          <Reveal className="dossier">
            <div className="dossier-head">
              <span className="font-display text-lg uppercase tracking-wide">Profile</span>
              <span className="logo-mark" aria-hidden="true" />
            </div>
            <dl>
              {dossier.map((row, index) => (
                <Reveal key={row.label} delay={150 + index * 55} className="dossier-row">
                  <dt>{row.label}</dt>
                  <dd className={row.highlight ? 'text-crimson' : undefined}>{row.value}</dd>
                </Reveal>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
            <p>
              Hey there! I'm Jan Lloyd Nathaniel G. Francisco, a graphic designer and aspiring UI/UX designer from
              Nueva Ecija, Philippines. I'm a 4th-year Information Technology student at Central Luzon State
              University, majoring in System Development.
            </p>
            <p>
              I started designing in 2023, making Discord server banners for friends and my community. It began as a
              fun way to help out and slowly turned into something I care about: visuals that look good, say something
              clearly, and mean something.
            </p>
            <p>
              Most of my work so far is posters, game character banners, and lyric and typography pieces. Lately I've
              been doing more UI/UX work. I plan and design interfaces in Figma, then build them in React, like the
              staff dashboard for SWIFT, our capstone billing system.
            </p>
            <p className="border-l-4 border-crimson pl-5 text-white">
              I'm currently looking for an internship in UI/UX design, graphic design, frontend development, or a
              related field. I want somewhere I can put my skills to work, get hands-on experience, and keep learning
              and growing as both a developer and a designer.
            </p>
          </Reveal>
        </div>

        {/* Skills as plain groups of tools, each group entering in turn */}
        <h3 className="mt-20 mb-8 flex items-center gap-4 font-display text-2xl uppercase tracking-wide text-white">
          Tools &amp; skills
          <span className="h-0.5 flex-1 bg-white/20" aria-hidden="true" />
        </h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <SkillGroup title={group.title} skills={group.skills} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
