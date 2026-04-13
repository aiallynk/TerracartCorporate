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
    () => (mode === 'home' ? 'glass rounded-3xl p-6 md:p-8' : 'glass rounded-3xl p-8 md:p-10'),
    [mode]
  )

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
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[var(--tc-ink)]">
          <span>Name</span>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={onChange}
            className="focus-ring w-full rounded-xl border border-white/80 bg-white/80 px-4 py-3 text-[var(--tc-ink)] outline-none"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-[var(--tc-ink)]">
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={onChange}
            className="focus-ring w-full rounded-xl border border-white/80 bg-white/80 px-4 py-3 text-[var(--tc-ink)] outline-none"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2 text-sm font-medium text-[var(--tc-ink)]">
        <span>Organization</span>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={onChange}
          className="focus-ring w-full rounded-xl border border-white/80 bg-white/80 px-4 py-3 text-[var(--tc-ink)] outline-none"
          placeholder="Company / Institution"
        />
      </label>

      <label className="mt-4 block space-y-2 text-sm font-medium text-[var(--tc-ink)]">
        <span>Message</span>
        <textarea
          name="message"
          required
          rows="5"
          value={formData.message}
          onChange={onChange}
          className="focus-ring w-full rounded-xl border border-white/80 bg-white/80 px-4 py-3 text-[var(--tc-ink)] outline-none"
          placeholder="How would you like to collaborate with TerraCart?"
        />
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button>{submitting ? 'Submitting...' : 'Submit'}</Button>
        {status.type === 'success' ? <p className="text-sm font-medium text-emerald-700">{status.message}</p> : null}
        {status.type === 'error' ? <p className="text-sm font-medium text-red-700">{status.message}</p> : null}
      </div>
    </motion.form>
  )
}
