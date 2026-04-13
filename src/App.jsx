import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <div className="min-h-screen bg-site text-[var(--tc-ink)]">
      <Navbar />
      <main className="pt-24">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
