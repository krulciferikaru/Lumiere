import { education } from '../data/education'
import { skillGroups } from '../data/skills'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SkillGroup from './SkillGroup'
import TimelineItem from './TimelineItem'

function About() {
  return (
    <section id="about" className="bg-white px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="About Me" title="Designing with intent, building with passion." />
        </Reveal>

        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <div className="space-y-4 text-base leading-relaxed text-black/70">
              <p>
                Hey there! My name is Jan Lloyd Nathaniel G. Francisco. I'm a graphic designer and
                web UI/UX designer based in Nueva Ecija, Philippines, currently a 4th-year Information
                Technology student at Central Luzon State University, majoring in System
                Development.
              </p>
              <p>
                I began designing in 2023 by creating Discord server banners for friends and my
                community. What started as a fun way to help gradually became a passion for
                creating visuals that speak — designs that not only look good, but communicate
                clearly and mean something.
              </p>
              <p>
                My work ranges from posters and game character banners to lyric and typography
                compositions, and lately, web interfaces and code. I enjoy blending aesthetic design
                with function, experimenting, and connecting with an audience through every project.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {skillGroups.map((group) => (
                <SkillGroup key={group.title} title={group.title} skills={group.skills} />
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <h3 className="mb-10 mt-24 font-serif text-2xl text-black">Education</h3>
          <div className="timeline">
            {education.map((item) => (
              <TimelineItem
                key={item.school + item.period}
                eyebrow={item.period}
                title={item.school}
                subtitle={item.program}
                description={item.description}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
