import Button from '../components/Button'
import SEO from '../components/SEO'

const founderImages = {
  hero: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052180/image14_zycbz1.jpg',
  noteLeft: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776082242/image17_ecdxkl-removebg-preview_mksjll.png',
  noteRight: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052187/image31_ikrijj.jpg',
  sectionWide: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052236/image20_vzz6j5.png',
  closingWide: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052238/image32_s08m35.jpg',
}

const founderIntroLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dr-sonam-kapse-8a68b817b',
    icon: 'linkedin',
  },
  {
    label: 'drskapse@gmail.com',
    href: 'mailto:drskapse@gmail.com',
    icon: 'email',
  },
]

function FounderConnectIcon({ icon }) {
  if (icon === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="founder-connect-icon">
        <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96ZM3 9.25h3.96V21H3V9.25Zm7.04 0H13.8v1.6h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.6 4.69 5.98V21h-3.95v-5.44c0-1.3-.02-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.88V21h-3.94V9.25Z" />
      </svg>
    )
  }

  if (icon === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="founder-connect-icon">
        <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.3.5L12 11.06 18.7 6H5.3Zm13.2 2.47-6.02 4.55a.8.8 0 0 1-.96 0L5.5 8.47V18h13V8.47Z" />
      </svg>
    )
  }

  if (icon === 'location') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="founder-connect-icon">
        <path d="M12 2.75a7 7 0 0 1 7 7c0 4.67-4.94 9.72-6.42 11.12a.83.83 0 0 1-1.16 0C9.94 19.47 5 14.42 5 9.75a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 2.93 2.96 6.61 5 8.76 2.04-2.15 5-5.83 5-8.76a5 5 0 0 0-5-5Zm0 2.3a2.7 2.7 0 1 1 0 5.4 2.7 2.7 0 0 1 0-5.4Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="founder-connect-icon">
      <path d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 1.8a7.2 7.2 0 0 0-7.2 7.2h2.6a12.45 12.45 0 0 1 .87-4.46A5.38 5.38 0 0 0 4.8 12Zm4.99-1.24A10.34 10.34 0 0 1 18.6 12h2.6a7.2 7.2 0 0 0-4.21-6.44ZM9.72 12c0 1.28.2 2.47.56 3.5h3.44c.36-1.03.56-2.22.56-3.5 0-1.28-.2-2.47-.56-3.5h-3.44c-.36 1.03-.56 2.22-.56 3.5Zm1.04-5.3h2.48a7.95 7.95 0 0 0-1.24-2.43A7.95 7.95 0 0 0 10.76 6.7Zm-2.55.86A12.45 12.45 0 0 0 7.34 12H4.8a5.38 5.38 0 0 1 3.41-4.44ZM4.8 13.8h2.54c.11 1.56.42 3.07.87 4.44A5.38 5.38 0 0 1 4.8 13.8Zm5.96 5.5h2.48A7.95 7.95 0 0 1 12 21.73a7.95 7.95 0 0 1-1.24-2.43Zm3.93-1.06c.45-1.37.76-2.88.87-4.44h2.54a5.38 5.38 0 0 1-3.41 4.44Zm.87-6.24c-.11-1.56-.42-3.07-.87-4.44A5.38 5.38 0 0 1 18.6 12h-2.54Z" />
    </svg>
  )
}

function FounderConnectItem({ item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="founder-connect-item focus-ring"
      aria-label={item.label}
    >
      <FounderConnectIcon icon={item.icon} />
      <span>{item.label}</span>
    </a>
  )
}

export default function Founder() {
  return (
    <>
      <SEO
        title="Founder"
        description="Meet Dr. Sonam Kapse, Founder of Terra Cart and architect of inclusion built on measurable competency."
        canonical="/founder"
      />

      <div className="founder-surface">
        <section className="section-shell pb-8">
          <div className="founder-intro-grid">
            <article className="founder-copy">
              <h1 className="section-title !text-[clamp(2rem,3.5vw,3.35rem)] !uppercase">Dr. Sonam Kapse</h1>
              <p className="mt-6 text-[1.1rem] leading-[1.85] text-[var(--tc-muted)] md:text-[1.18rem]">
                Dr. Sonam Kapse is a Cancer Genetics Specialist turned Social Innovation Expert, who treats inclusion as a
                science, not a checkbox. As the founder of The K Methodology (TM), she bridges the gap between medical
                precision and corporate strategy. With extensive experience across healthcare, R&amp;D, and the
                rehabilitation of vulnerable communities, Dr. Kapse helps multinationals move beyond "awareness" toward
                measurable competency. A TEDx speaker and recipient of multiple national and international awards, she
                doesn&apos;t just advocate for change - she builds the infrastructure for it.
              </p>

              <div className="founder-connect-wrap">
                {founderIntroLinks.map((item) => (
                  <FounderConnectItem key={item.label} item={item} />
                ))}
              </div>
            </article>

            <figure className="founder-media">
              <img
                src={founderImages.hero}
                alt="Dr Sonam Kapse addressing an audience"
                loading="lazy"
                className="founder-full-image founder-hero-image"
              />
            </figure>
          </div>
        </section>

        <section className="section-shell pt-0 pb-8">
          <div className="founder-note-grid">
            <figure className="founder-note-media">
              <img
                src={founderImages.noteLeft}
                alt="Founder's note visual"
                loading="lazy"
                className="founder-note-image"
              />
            </figure>
            <figure className="founder-note-media">
              <img
                src={founderImages.noteRight}
                alt="Founder community collaboration visual"
                loading="lazy"
                className="founder-note-image"
              />
            </figure>
          </div>
        </section>

        <section className="section-shell pt-0 pb-6">
          <figure className="founder-wide">
            <img
              src={founderImages.sectionWide}
              alt="Founder leadership banner"
              loading="lazy"
              className="founder-wide-image founder-wide-image-flat"
            />
          </figure>
        </section>

        <section className="section-shell pt-0 pb-5">
          <p className="founder-quote-line">
            "Building a platform that aligns social initiatives with trust, accountability, and growth."
          </p>
        </section>

        <section className="section-shell pt-0 pb-7">
          <figure className="founder-wide">
            <img src={founderImages.closingWide} alt="Founder partnership moments" loading="lazy" className="founder-wide-image" />
          </figure>
        </section>

        <section className="section-shell pt-0 pb-10">
          <div className="text-center">
            <Button variant="terracart" size="terracart" className="min-w-[21rem]" to="/india-millets-co">
              Explore India Millets Co.
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
