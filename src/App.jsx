import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  const { pathname } = useLocation()
  const isTerraCartAppPage = pathname === '/terra-cart-app'

  return (
    <div className="site-shell">
      <div className="site-glass-backdrop" aria-hidden="true" />
      <Navbar />
      <div className={`site-content-layer text-[var(--tc-ink)] ${isTerraCartAppPage ? '' : 'min-h-screen'}`}>
        <main className="pt-[4.75rem] xl:pt-24">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </div>
  )
}
