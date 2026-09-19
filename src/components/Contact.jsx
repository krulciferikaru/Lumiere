import { socials } from '../data/socials'

function Contact() {
  return (
    <section id="contact" className="section-invert px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">Contact</span>
        <h2 className="mt-2 font-serif text-4xl tracking-tight text-white sm:text-5xl">
          Let's work together.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/60">
          Have a project in mind, a design that needs a second opinion, or just want to say hi?
          I'd love to hear from you.
        </p>

        <ul className="mt-10 flex flex-col items-center gap-3">
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
      </div>
    </section>
  )
}

export default Contact
