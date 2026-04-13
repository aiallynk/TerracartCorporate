import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gradient-to-r from-[var(--tc-accent)] to-[var(--tc-accent-strong)] text-white shadow-[0_12px_24px_rgba(124,73,37,0.28)] hover:shadow-[0_16px_30px_rgba(124,73,37,0.34)]',
  secondary:
    'bg-white/85 text-[var(--tc-accent-strong)] border border-white/70 hover:bg-white',
  ghost:
    'bg-transparent text-[var(--tc-accent-strong)] border border-[var(--tc-accent-strong)]/30 hover:bg-white/50',
  terracart:
    'bg-[var(--tc-btn-bg)] text-[var(--tc-btn-text)] border border-[var(--tc-btn-border)] shadow-[0_8px_20px_rgba(88,67,51,0.24)] hover:bg-[var(--tc-btn-bg-hover)] hover:text-[var(--tc-ink)]',
  download:
    'bg-[var(--tc-download-bg)] text-[var(--tc-download-text)] border border-[var(--tc-download-border)] shadow-[0_10px_24px_rgba(84,61,45,0.2)] hover:bg-[var(--tc-download-bg-hover)] hover:text-[var(--tc-ink)]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm md:text-base',
  lg: 'px-7 py-3.5 text-base',
  terracart: 'px-10 py-3.5 text-[0.95rem]',
  download: 'px-5 py-2.5 text-[0.72rem] md:text-[0.78rem]',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  external = false,
  icon = null,
  onClick,
  className = '',
}) {
  const isRectButton = variant === 'terracart' || variant === 'download'
  const effectiveSize = size === 'md' && isRectButton ? variant : size
  const roundedClass = isRectButton ? 'rounded-2xl' : 'rounded-full'
  const trackingClass = isRectButton ? 'tracking-[0.16em] uppercase' : 'tracking-wide'
  const classes = `focus-ring inline-flex items-center justify-center gap-2 ${roundedClass} font-semibold transition ${trackingClass} ${variants[variant]} ${sizes[effectiveSize]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
    </>
  )

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, ease: 'easeOut' },
  }

  if (to) {
    const MotionLink = motion(Link)
    return (
      <MotionLink to={to} onClick={onClick} className={classes} {...motionProps}>
        {content}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...motionProps}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" onClick={onClick} className={classes} {...motionProps}>
      {content}
    </motion.button>
  )
}
