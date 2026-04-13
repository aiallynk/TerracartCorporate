import { Fragment } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import SEO from '../components/SEO'

const images = {
  image18: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776059661/image18_gro9pb.png',
  image19: 'https://www.terracart.in/assets/images/image19.png?v=0a813c8e',
  image24: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051921/image24_kyd7lx.jpg',
  roadmap: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776082876/Gemini_Generated_Image_uafegsuafegsuafe-removebg-preview_q9dst0.png',
  viability: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051949/image21_us6u1v.png',
  benefits: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051981/image22_z8iefk.png',
}

const dmfDownloads = [
  {
    label: 'DMF International Centre Of Excellence',
    href: '/PDFs/DMFInternationalCentreofExcellence.pdf',
  },
  {
    label: 'Intro - DMF-MoP - PDF',
    href: '/PDFs/intro-DMF-MoP-PDF.pdf',
  },
  {
    label: 'DMF Flyer Corrected',
    href: '/PDFs/DMFflyercorrectedcopy.pdf',
  },
]

const revealGlow = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  },
}

const introPoints = [
  'Vision-aligned impact investors',
  'Ethical corporate partners',
  'Progressive institutions & ecosystems',
  'Leaders who believe inclusion is smart economics',
]

const contentSections = [
  {
    id: 'roadmap',
    title: 'The Terra Cart Roadmap',
    titleBand: 'light',
    background: 'tan',
    description:
      'The Terra Cart Ecosystem is a complete, end-to-end system designed to transform inclusion into ownership. It connects government access, inclusive design, training, technology, and operations so Social Champions can focus on people, service, and growth.',
    imageSrc: images.roadmap,
    imageAlt: 'Terra Cart Roadmap',
    imageVariant: 'transparent',
    maxWidth: '1140px',
  },
  {
    id: 'viability',
    title: 'Built for Impact. Designed for Viability.',
    titleBand: 'light',
    background: 'tan',
    imageSrc: images.viability,
    imageAlt: 'Built for Impact. Designed for Viability.',
    imageVariant: 'transparent',
    maxWidth: '860px',
  },
  {
    id: 'benefits',
    title: 'Who Benefits from This Model?',
    titleBand: 'tan',
    background: 'tan',
    imageSrc: images.benefits,
    imageAlt: 'Who Benefits from This Model',
    imageVariant: 'transparent-compact',
    maxWidth: '740px',
    cta: { label: 'Own a Terra Cart', to: '/contact' },
  },
]

function AnimatedImage({ src, alt, variant = 'framed', maxWidth, className = '' }) {
  const frameClasses = {
    framed: 'social-image-frame p-2',
    transparent: 'social-image-transparent',
    'transparent-compact': 'social-image-transparent social-image-transparent-compact',
  }

  return (
    <motion.figure
      variants={revealGlow}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`mx-auto ${frameClasses[variant] || frameClasses.framed} ${className}`}
      style={maxWidth ? { maxWidth } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-auto w-full object-contain ${variant === 'framed' ? 'rounded-[0.9rem]' : ''}`}
      />
    </motion.figure>
  )
}

export default function SocialChampions() {
  return (
    <>
      <SEO
        title="Social Champions"
        description="Who are Social Champions and how Terra Cart scales inclusion through trust, viability, and ownership."
        canonical="/social-champions"
      />

      <section className="hero-surface">
        <div className="section-shell py-14 md:py-18">
          <motion.div
            variants={revealGlow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mx-auto max-w-[96rem] rounded-[1.3rem] border border-[#e5d3bd]/70 bg-[rgba(236,202,164,0.28)] px-6 py-8 md:px-10 md:py-10"
          >
            <h1 className="section-title text-center !text-[clamp(2.2rem,3.9vw,3.7rem)]">Who Are Social Champions?</h1>
            <div className="mt-8 text-[1.2rem] leading-[1.75] text-[var(--tc-muted)] md:text-[1.6rem]">
              <p className="font-semibold text-[var(--tc-ink)]">Social Champions are more than investors.</p>
              <ul className="mt-5 space-y-2 font-medium">
                {introPoints.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
              <p className="mt-6">
                Together, they help build enterprises where impact and profitability coexist.
              </p>
              <p className="mt-6 font-semibold text-[var(--tc-ink)]">What Do Social Champions Actually Do?</p>
              <p className="mt-2">
                Social Champions enable ownership, not control. They provide capital, access, partnerships, and credibility,
                allowing PwD entrepreneurs to lead, operate, and grow independent businesses.
              </p>
              <p className="mt-6 font-semibold text-[var(--tc-ink)]">Why Social Champions Join Terra Cart?</p>
              <p className="mt-2">
                If you believe inclusion must be economically strong and ethically designed, Terra Cart invites you to
                partner in building the next chapter of inclusive commerce.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="hero-surface">
        <div className="section-shell pt-0 pb-8">
          <AnimatedImage
            src={images.image18}
            alt="Social Champions concept visual"
            variant="transparent"
            maxWidth="1140px"
          />
        </div>
      </section>

      <section className="social-band-light">
        <div className="section-shell py-10 md:py-12">
          <motion.h2
            variants={revealGlow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="section-title text-center text-[var(--tc-ink)]"
          >
            Legacy of Trust - Terra Cart&apos;s 1st Social Champion.
          </motion.h2>

          <div className="mt-8 space-y-8">
            <AnimatedImage
              src={images.image19}
              alt="Legacy of trust social champion profile"
              variant="transparent"
              className="max-w-[14rem] md:max-w-[22rem]"
            />
            <motion.p
              variants={revealGlow}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="text-center text-[1.65rem] font-medium text-[var(--tc-muted)] md:text-[2.05rem]"
            >
              Dr. Dnyaneshwar Mulay
            </motion.p>
            <AnimatedImage
              src={images.image24}
              alt="Social champion credentials and highlights"
              variant="framed"
              maxWidth="930px"
            />
          </div>

          <motion.div
            variants={revealGlow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mx-auto mt-8 max-w-[72rem] text-center text-[1.05rem] leading-[1.9] text-[#637181] md:text-[1.55rem]"
          >
            <p>When a Visionary Leads, Change Follows.</p>
            <p>
              From reforming India&apos;s passport system to championing human rights, Dr. Dnyaneshwar Mulay has dedicated
              his life to serving the people. Today, he brings that same spirit of integrity to Terracart as our first
              Social Champion.
            </p>
          </motion.div>

          <motion.div
            variants={revealGlow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-10"
          >
            <h3 className="text-center text-[0.9rem] font-semibold uppercase tracking-[0.28em] text-[var(--tc-muted)] md:text-[1rem]">
              DMF Downloads
            </h3>
            <div className="tc-download-grid mt-5">
              {dmfDownloads.map((item) => (
                <Button
                  key={item.href}
                  href={item.href}
                  external
                  variant="download"
                  size="download"
                  className="min-w-[14rem] md:min-w-[16.8rem]"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {contentSections.map((block) => (
        <Fragment key={block.id}>
          {block.titleBand === 'light' ? (
            <section className="social-band-light social-band-divider">
              <div className="section-shell py-7 md:py-8">
                <motion.h2
                  variants={revealGlow}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="section-title text-center text-[var(--tc-ink)]"
                >
                  {block.title}
                </motion.h2>
              </div>
            </section>
          ) : null}

          <section className={block.background === 'tan' ? 'hero-surface' : 'social-band-light'}>
            <div className="section-shell py-10 md:py-12">
              {block.titleBand === 'tan' ? (
                <motion.h2
                  variants={revealGlow}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="section-title mb-6 text-center text-[var(--tc-ink)]"
                >
                  {block.title}
                </motion.h2>
              ) : null}

              {block.description ? (
                <motion.p
                  variants={revealGlow}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="mx-auto mb-8 max-w-[94rem] text-left text-[1.18rem] leading-[1.75] text-[var(--tc-hero-text)] md:text-[1.5rem]"
                >
                  {block.description}
                </motion.p>
              ) : null}

              <AnimatedImage
                src={block.imageSrc}
                alt={block.imageAlt}
                variant={block.imageVariant}
                maxWidth={block.maxWidth}
              />

              {block.cta ? (
                <motion.div
                  variants={revealGlow}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="mt-10 text-center"
                >
                  <Button to={block.cta.to} variant="terracart" size="terracart">
                    {block.cta.label}
                  </Button>
                </motion.div>
              ) : null}
            </div>
          </section>
        </Fragment>
      ))}

      <section className="social-band-light social-band-divider">
        <div className="section-shell py-8">
          <motion.div
            variants={revealGlow}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            <Button to="/contact" variant="terracart" size="terracart" className="min-w-[16rem]">
              Contact Us
            </Button>
            <Button to="/privacy-policy" variant="terracart" size="terracart" className="min-w-[16rem]">
              Privacy Policy
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
