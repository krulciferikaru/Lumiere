import { socials } from '../data/socials'
import RansomText from './RansomText'

function Contact() {
  return (
    <section id="contact" className="slant-top-reverse bg-ink px-4 pb-32 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="calling-card p-6 sm:p-10">
          <span className="slash-label bg-ink text-white">
            <span>Contact</span>
          </span>
          <h2 className="on-red mt-5 text-4xl sm:text-5xl">
            <RansomText text="Let's work together" />
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/90">
            Hiring for an internship, have a project in mind, or want a second opinion on a design? Send me a message.
            I'd like to hear from you.
          </p>

          <ul className="mt-8">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span className="w-24 font-display text-lg uppercase tracking-wide text-ink">{social.label}</span>
                  <span className="contact-value min-w-0 break-all font-medium">{social.display ?? social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
