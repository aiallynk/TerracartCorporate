import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Impact', to: '/impact' },
  { label: 'Kiosk', to: '/kiosk' },
  { label: 'Founder', to: '/founder' },
  { label: 'India Millets Co.', to: '/india-millets-co' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t border-white/50 bg-white/55 px-4 py-10 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-[var(--tc-ink)]">TerraCart</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--tc-muted)]">
            India&apos;s inclusive kiosk ecosystem designed for dignity, ownership, and scalable impact.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--tc-ink)]/80">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link className="text-sm text-[var(--tc-muted)] transition hover:text-[var(--tc-accent-strong)]" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--tc-ink)]/80">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-[var(--tc-muted)]">
            <li>Nashik, Maharashtra, India</li>
            <li>support@terracart.in</li>
            <li>+91 90000 00000</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-white/40 pt-5 text-center text-sm text-[var(--tc-muted)]">
        <p>© {year} TerraCart. All rights reserved.</p>
      </div>
    </footer>
  )
}
