import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const FIELD_LIMITS = {
  name: 120,
  email: 254,
  organization: 200,
  message: 5000,
}

const initialState = {
  name: '',
  email: '',
  organization: '',
  message: '',
}

export default function ContactForm({ mode = 'home' }) {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  const [formData, setFormData] = useState(initialState)
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const submittingRef = useRef(false)

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

    if (submittingRef.current) return

    if (honeypot) {
      setStatus({
        type: 'success',
        message: 'Thank you. Your message has been sent. We will reach out shortly.',
      })
      return
    }

    if (!endpoint) {
      setStatus({
        type: 'error',
        message: 'Could not submit right now. Please email us at operations@aially.in or try again later.',
      })
      return
    }

    const name = formData.name.trim()
    const email = formData.email.trim()
    const organization = formData.organization.trim()
    const message = formData.message.trim()

    if (!name || !email || !message) {
      setStatus({
        type: 'error',
        message: 'Please fill in your name, email, and message before submitting.',
      })
      return
    }

    submittingRef.current = true
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
          name,
          email,
          organization,
          message,
          source: mode === 'home' ? 'home-form' : 'contact-page-form',
          _gotcha: honeypot,
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
      setHoneypot('')
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not submit right now. Please try again in a moment.',
      })
    } finally {
      submittingRef.current = false
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
      <input
        type="text"
        name="_gotcha"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="tc-honeypot"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <label className={labelClass}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            required
            maxLength={FIELD_LIMITS.name}
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
            maxLength={FIELD_LIMITS.email}
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
          maxLength={FIELD_LIMITS.organization}
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
          maxLength={FIELD_LIMITS.message}
          rows={mode === 'page' ? 7 : 5}
          value={formData.message}
          onChange={onChange}
          className={fieldClass}
          placeholder="How would you like to collaborate with TerraCart?"
        />
      </label>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" size={mode === 'page' ? 'lg' : 'md'}>
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
