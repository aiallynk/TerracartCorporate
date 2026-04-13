import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Connect with TerraCart to discuss partnerships, social champion roles, and inclusive kiosk implementation."
        canonical="/contact"
      />

      <div className="hero-surface">
        <section className="section-shell contact-heading">
          <div className="text-center">
            <h1 className="section-title">Contact Us</h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[var(--tc-muted)]">
              Share your requirements and we will connect with you shortly.
            </p>
          </div>
        </section>

        <section className="section-shell contact-form-wrap">
          <div className="contact-form-shell">
            <ContactForm mode="page" />
          </div>
        </section>

        <section className="section-shell contact-address">
          <div className="mx-auto max-w-4xl border-t border-[rgba(108,77,58,0.22)] pt-6 text-center">
            <h2 className="text-lg font-semibold text-[var(--tc-ink)] md:text-xl">Home Office Address</h2>
            <p className="mx-auto mt-3 max-w-3xl text-[0.98rem] leading-[1.8] text-[var(--tc-muted)] md:text-[1.08rem]">
              2nd Floor, C Square Complex, Dindori - Mhasrul Rd, Nashik, Maharashtra, India - 422004
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
