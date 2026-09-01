import { motion } from 'framer-motion'

export const popHoverWhileHover = { y: -4, scale: 1.01, zIndex: 2 }

export const popHoverTransition = { duration: 0.25, ease: 'easeOut' }

export default function PopHover({ as = 'div', children, className = '', ...props }) {
  const Component = motion[as] ?? motion.div

  return (
    <Component
      className={`tc-pop-hover ${className}`.trim()}
      whileHover={popHoverWhileHover}
      transition={popHoverTransition}
      {...props}
    >
      {children}
    </Component>
  )
}
