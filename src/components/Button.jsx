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
  plaque:
    '!text-white bg-[linear-gradient(180deg,#16100c_0%,#241910_100%)] border border-[rgba(232,198,140,0.45)] shadow-[inset_0_1px_0_rgba(255,240,220,0.18),0_14px_36px_rgba(0,0,0,0.28)] hover:border-[rgba(232,198,140,0.7)] hover:!text-[#fff8e8] hover:shadow-[inset_0_1px_0_rgba(255,240,220,0.24),0_18px_40px_rgba(0,0,0,0.34)]',
  plaqueGold:
    'bg-[linear-gradient(180deg,#16100c_0%,#241910_100%)] border border-[rgba(232,198,140,0.55)] text-[#ffdc6e] shadow-[inset_0_1px_0_rgba(255,240,220,0.18),0_14px_36px_rgba(0,0,0,0.28)] [text-shadow:0_0_12px_rgba(255,210,90,0.4)] hover:border-[rgba(255,220,140,0.75)] hover:text-[#fff0a8] hover:[text-shadow:0_0_16px_rgba(255,225,140,0.5)] hover:shadow-[inset_0_1px_0_rgba(255,240,220,0.24),0_18px_40px_rgba(0,0,0,0.34)]',
  plaqueLight:
    '!text-[#16100c] bg-[linear-gradient(165deg,#fff8ee_0%,#f0e0c8_100%)] border border-[rgba(232,198,140,0.55)] shadow-[0_10px_24px_rgba(0,0,0,0.22)] hover:!text-[#0c0806] hover:bg-[linear-gradient(165deg,#fffdf8_0%,#f7ebda_100%)]',
  download:
    'bg-[var(--tc-download-bg)] text-[var(--tc-download-text)] border border-[var(--tc-download-border)] shadow-[0_10px_24px_rgba(84,61,45,0.2)] hover:bg-[var(--tc-download-bg-hover)] hover:text-[var(--tc-ink)]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm md:text-base',
  lg: 'px-7 py-3.5 text-base',
  terracart: 'px-10 py-3.5 text-[0.95rem]',
  plaque: 'px-12 py-4 text-[1.08rem] font-bold md:px-14 md:py-[1.15rem] md:text-[1.22rem]',
  plaqueGold: 'px-12 py-4 text-[1.08rem] font-bold md:px-14 md:py-[1.15rem] md:text-[1.22rem]',
  plaqueLight: 'px-10 py-3.5 text-[0.98rem] font-bold md:px-12 md:py-4 md:text-[1.08rem]',
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
  type = 'button',
  className = '',
}) {
  const isRectButton =
    variant === 'terracart' ||
    variant === 'download' ||
    variant === 'plaque' ||
    variant === 'plaqueGold' ||
    variant === 'plaqueLight'
  const effectiveSize = size === 'md' && isRectButton ? variant : size
  const roundedClass = isRectButton ? 'rounded-2xl' : 'rounded-full'
  const trackingClass =
    variant === 'plaque' || variant === 'plaqueGold' || variant === 'plaqueLight'
      ? 'tracking-[0.14em] uppercase'
      : isRectButton
        ? 'tracking-[0.16em] uppercase'
        : 'tracking-wide'
  const classes = `focus-ring tc-responsive-btn inline-flex items-center justify-center gap-2 ${roundedClass} font-semibold transition ${trackingClass} ${variants[variant]} ${sizes[effectiveSize]} ${className}`

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
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps}>
      {content}
    </motion.button>
  )
}
