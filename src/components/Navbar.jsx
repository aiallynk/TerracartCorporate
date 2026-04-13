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
  hidden: { opacity: 0, y: -14, scale: 0.98, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.985,
    filter: 'blur(8px)',
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
}

const mobileItemMotion = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } },
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
        <div className="relative flex items-center justify-start md:justify-center">
          <button
            type="button"
            className={`focus-ring inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.34)] text-white shadow-[0_12px_28px_rgba(26,13,6,0.34)] backdrop-blur-2xl transition-all duration-300 md:hidden ${
              open
                ? 'bg-[linear-gradient(150deg,rgba(255,255,255,0.32),rgba(255,255,255,0.1))]'
                : 'bg-[linear-gradient(150deg,rgba(255,255,255,0.24),rgba(255,255,255,0.06))]'
            }`}
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="primary-mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="relative h-[18px] w-5">
              <motion.span
                animate={open ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 block h-[2px] w-5 rounded-full bg-current"
              />
              <motion.span
                animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="absolute left-0 top-[8px] block h-[2px] w-5 rounded-full bg-current"
              />
              <motion.span
                animate={open ? { y: -8, rotate: -45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-[16px] block h-[2px] w-5 rounded-full bg-current"
              />
            </span>
          </button>

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
            className="overflow-hidden border-t border-[rgba(255,255,255,0.2)] bg-[rgba(67,38,24,0.88)] px-3 pb-3 pt-2 md:hidden"
          >
            <motion.div className="mx-auto max-w-[130rem] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.35)] bg-[linear-gradient(145deg,rgba(255,255,255,0.2),rgba(255,255,255,0.06))] shadow-[0_18px_40px_rgba(20,10,4,0.42)] backdrop-blur-2xl">
              <motion.nav className="flex flex-col gap-1.5 p-3" aria-label="Mobile primary">
                {links.map((link) => (
                  <motion.div key={link.to} variants={mobileItemMotion}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `focus-ring block rounded-xl px-4 py-3 text-sm font-semibold tracking-[0.06em] transition-all duration-200 ${
                          isActive
                            ? 'bg-[rgba(255,255,255,0.2)] text-white shadow-[0_10px_24px_rgba(24,12,5,0.26)] ring-1 ring-[rgba(255,255,255,0.42)]'
                            : 'text-white/95 hover:bg-[rgba(255,255,255,0.14)]'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
