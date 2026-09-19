import { socials } from '../data/socials'
import ContactForm from './ContactForm'
import Reveal from './Reveal'

function Contact() {
  return (
    <section id="contact" className="section-invert px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Contact
          </span>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-white sm:text-5xl">
            Let's work together.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
            Have a project in mind, a design that needs a second opinion, or just want to say hi?
            I'd love to hear from you.
          </p>

          <ul className="mt-10 space-y-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="contact-link">
                  <span className="w-24 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                    {social.label}
                  </span>
                  <span>{social.display ?? social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
