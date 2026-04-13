import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Social Champions', to: '/social-champions' },
  { label: 'Impact', to: '/impact' },
  { label: 'Kiosk', to: '/kiosk' },
  { label: 'Founder', to: '/founder' },
  { label: 'Contact', to: '/contact' },
]

const mobileContainerMotion = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.22,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}

const mobileItemMotion = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18, ease: 'easeOut' } },
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-[rgba(255,255,255,0.2)] bg-[rgba(74,43,27,0.94)] backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_12px_36px_rgba(27,14,7,0.45)]'
          : 'shadow-[0_8px_24px_rgba(27,14,7,0.35)]'
      }`}
    >
      <div
        className={`mx-auto w-full max-w-[130rem] px-4 transition-all duration-300 md:px-7 ${
          scrolled ? 'py-2.5' : 'py-3.5'
        }`}
      >
        <div className="relative flex items-center justify-end md:justify-center">
          <nav className="hidden items-center justify-center md:flex" aria-label="Primary">
            <div className="tc-nav-center">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.to === '/'} className="focus-ring rounded-xl">
                  {({ isActive }) => (
                    <span className={`tc-nav-link ${isActive ? 'is-active' : ''}`}>
                      <span className="relative z-10">{link.label}</span>
                      {isActive ? (
                        <motion.span
                          layoutId="nav-desktop-active-pill"
                          className="tc-nav-active-pill"
                          transition={{ type: 'spring', stiffness: 450, damping: 38 }}
                        />
                      ) : null}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>

          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.32)] bg-[rgba(74,43,27,0.95)] text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="primary-mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <motion.span
              animate={open ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center gap-[4px]"
            >
              <span
                className={`block h-[2px] w-5 bg-current transition-transform duration-200 ${
                  open ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-current transition-opacity duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-current transition-transform duration-200 ${
                  open ? '-translate-y-[6px] -rotate-45' : ''
                }`}
              />
            </motion.span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="primary-mobile-menu"
            key="primary-mobile-menu"
            variants={mobileContainerMotion}
            initial="hidden"
            animate="show"
            exit="exit"
            className="overflow-hidden border-t border-[rgba(255,255,255,0.2)] bg-[rgba(67,38,24,0.99)] md:hidden"
          >
            <motion.nav className="mx-auto flex max-w-[130rem] flex-col gap-2 px-4 py-4" aria-label="Mobile primary">
              {links.map((link) => (
                <motion.div key={link.to} variants={mobileItemMotion}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `focus-ring block rounded-xl px-4 py-3 text-sm font-semibold tracking-[0.06em] transition ${
                        isActive
                          ? 'bg-[rgba(255,255,255,0.16)] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.24)]'
                          : 'text-white hover:bg-[rgba(255,255,255,0.12)]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
