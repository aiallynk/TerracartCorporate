import { motion } from 'framer-motion'
import { popHoverTransition, popHoverWhileHover } from './PopHover'

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <motion.article
      className={`glass rounded-3xl p-6 md:p-8 ${className}`}
      whileHover={hover ? popHoverWhileHover : undefined}
      transition={hover ? popHoverTransition : undefined}
    >
      {children}
    </motion.article>
  )
}
