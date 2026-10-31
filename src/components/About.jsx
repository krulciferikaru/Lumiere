import { skillGroups } from '../data/skills'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SkillGroup from './SkillGroup'

function About() {
  return (
    <section id="about" className="slant-top-reverse bg-ink px-4 pb-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About Me" title="Who I am" tone="dark" />

        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-white/80 sm:text-lg">
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

          <Reveal delay={120} className="grid grid-cols-2 content-start gap-x-8 gap-y-8">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} title={group.title} skills={group.skills} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
