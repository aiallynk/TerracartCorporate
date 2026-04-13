import { motion } from 'framer-motion'
import Button from './Button'

export default function Hero({ title, subtitle, description, primaryCta }) {
  return (
    <section className="section-shell pt-8 md:pt-12">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/50 p-8 shadow-xl backdrop-blur-xl md:p-12">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[var(--tc-accent)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-[var(--tc-accent-strong)]/20 blur-3xl" />

        <div className="relative z-10 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--tc-accent-strong)]"
          >
            TerraCart Inclusive Enterprise
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
            className="text-4xl font-bold leading-tight text-[var(--tc-ink)] md:text-6xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.12 }}
            className="mt-4 text-lg font-medium text-[var(--tc-accent-strong)] md:text-xl"
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.18 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--tc-muted)] md:text-lg"
          >
            {description}
          </motion.p>

          {primaryCta ? (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.24 }}
              className="mt-8"
            >
              <Button to={primaryCta.to} href={primaryCta.href} external={primaryCta.external} size="lg">
                {primaryCta.label}
              </Button>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
