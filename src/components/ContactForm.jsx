import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const initialState = {
  name: '',
  email: '',
  organization: '',
  message: '',
}

export default function ContactForm({ mode = 'home' }) {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const wrapperClass = useMemo(
    () =>
      mode === 'home'
        ? 'glass rounded-3xl p-6 md:p-8'
        : 'contact-form-card rounded-[1.1rem] p-9 md:p-12',
    [mode]
  )

  const labelClass =
    mode === 'home'
      ? 'space-y-2 text-sm font-medium text-[var(--tc-ink)]'
      : 'space-y-2.5 text-lg font-semibold text-[var(--tc-ink)]'

  const fieldClass =
    mode === 'home'
      ? 'focus-ring w-full rounded-xl border border-white/80 bg-white/80 px-4 py-3 text-[var(--tc-ink)] outline-none'
      : 'contact-form-field focus-ring w-full rounded-xl px-5 py-4 text-lg text-[var(--tc-ink)] outline-none placeholder:text-base'

  const onChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    if (!endpoint) {
      setStatus({
        type: 'error',
        message: 'Missing VITE_FORMSPREE_ENDPOINT. Add it in your .env file to enable submissions.',
      })
      return
    }

    setSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          source: mode === 'home' ? 'home-form' : 'contact-page-form',
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setStatus({
        type: 'success',
        message: 'Thank you. Your message has been sent. We will reach out shortly.',
      })
      setFormData(initialState)
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not submit right now. Please try again in a moment.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className={wrapperClass}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      aria-label="Contact form"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className={labelClass}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={onChange}
            className={fieldClass}
            placeholder="Your name"
          />
        </label>

        <label className={labelClass}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={onChange}
            className={fieldClass}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className={`mt-5 block ${labelClass}`}>
        <span>Organization</span>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={onChange}
          className={fieldClass}
          placeholder="Company / Institution"
        />
      </label>

      <label className={`mt-5 block ${labelClass}`}>
        <span>Message</span>
        <textarea
          name="message"
          required
          rows={mode === 'page' ? 7 : 5}
          value={formData.message}
          onChange={onChange}
          className={fieldClass}
          placeholder="How would you like to collaborate with TerraCart?"
        />
      </label>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button size={mode === 'page' ? 'lg' : 'md'}>
          {submitting ? 'Submitting...' : 'Submit'}
        </Button>
        {status.type === 'success' ? (
          <p className={`font-medium text-emerald-700 ${mode === 'page' ? 'text-base' : 'text-sm'}`}>
            {status.message}
          </p>
        ) : null}
        {status.type === 'error' ? (
          <p className={`font-medium text-red-700 ${mode === 'page' ? 'text-base' : 'text-sm'}`}>
            {status.message}
          </p>
        ) : null}
      </div>
    </motion.form>
  )
}
