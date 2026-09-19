import { useState } from 'react'

const initialForm = { name: '', email: '', message: '' }

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
    setForm(initialForm)
  }

  if (submitted) {
    return (
      <div className="form-surface flex flex-col items-start gap-3">
        <p className="font-serif text-2xl text-white">Thanks for reaching out!</p>
        <p className="text-sm text-white/60">
          This form doesn't send anywhere yet, but I'll be able to reply once it's connected.
        </p>
        <button type="button" className="btn-invert-secondary mt-2" onClick={() => setSubmitted(false)}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="form-surface flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-white/70">
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="form-input"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-white/70">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="form-input"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-white/70">
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="form-input resize-none"
        />
      </label>
      <button type="submit" className="btn-invert-primary self-start">
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
