import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <motion.article
      className={`glass rounded-3xl p-6 md:p-8 ${className}`}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.article>
  )
}
