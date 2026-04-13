import { lazy, Suspense, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const SocialChampions = lazy(() => import('../pages/SocialChampions'))
const Impact = lazy(() => import('../pages/Impact'))
const Kiosk = lazy(() => import('../pages/Kiosk'))
const Founder = lazy(() => import('../pages/Founder'))
const IndiaMilletsCo = lazy(() => import('../pages/IndiaMilletsCo'))
const Contact = lazy(() => import('../pages/Contact'))
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'))

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function LoadingFallback() {
  return (
    <div className="section-shell">
      <div className="glass p-8 text-center">
        <p className="text-lg font-medium text-[var(--tc-ink)]">Loading TerraCart experience...</p>
      </div>
    </div>
  )
}

export default function AppRoutes() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/social-champions" element={<PageWrapper><SocialChampions /></PageWrapper>} />
            <Route path="/impact" element={<PageWrapper><Impact /></PageWrapper>} />
            <Route path="/kiosk" element={<PageWrapper><Kiosk /></PageWrapper>} />
            <Route path="/founder" element={<PageWrapper><Founder /></PageWrapper>} />
            <Route path="/india-millets-co" element={<PageWrapper><IndiaMilletsCo /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  )
}
