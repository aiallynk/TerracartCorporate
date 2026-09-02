import { motion } from 'framer-motion'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'
import LaunchSlide, { launchImageClass, launchImageFrame } from '../components/LaunchSlide'
import PopHover from '../components/PopHover'
import SEO from '../components/SEO'

const images = {
  image18: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776059661/image18_gro9pb.png',
  image19: 'https://www.terracart.in/assets/images/image19.png?v=0a813c8e',
  championPortrait: '/assets/dr-dnyaneshwar-mulay.png',
  image24: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051921/image24_kyd7lx.jpg',
  roadmap: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776082876/Gemini_Generated_Image_uafegsuafegsuafe-removebg-preview_q9dst0.png',
  viability: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051949/image21_us6u1v.png',
  benefits: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051981/image22_z8iefk.png',
}

const legacyPlaqueClass =
  'mission-dark-card sc-legacy-plaque !rounded-[1.1rem] flex w-full flex-col justify-center text-center md:px-9 md:py-10 lg:w-[22rem] lg:max-w-[22rem] lg:shrink-0 xl:w-[24rem] xl:max-w-[24rem]'

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

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const championArchetypes = [
  {
    title: 'Impact Investors',
    line: 'Vision-aligned capital for scalable inclusion.',
    icon: (
      <path d="M12 3 3 8.5 12 14l9-5.5L12 3Zm0 3.2 5.6 3.4L12 13 6.4 9.6 12 6.2ZM5 11.2v4.3c0 .8 3.1 2.5 7 2.5s7-1.7 7-2.5v-4.3l-2.2 1.3c-1.3.8-3 1.2-4.8 1.2s-3.5-.4-4.8-1.2L5 11.2Z" />
    ),
  },
  {
    title: 'Corporate Partners',
    line: 'Ethical enterprises building with purpose.',
    icon: (
      <path d="M4 20V8.5L12 4l8 4.5V20h-5v-6H9v6H4Zm2-9.8V18h1v-5h10v-5H6Z" />
    ),
  },
  {
    title: 'Institutions',
    line: 'Progressive ecosystems driving change.',
    icon: (
      <path d="M3 20V9l9-5 9 5v11h-6v-6H9v6H3Zm2-8.2 7-3.9 7 3.9V18h-2v-4h-6v4H5v-6.2Z" />
    ),
  },
  {
    title: 'Purpose Leaders',
    line: 'Inclusion as smart economics.',
    icon: (
      <path d="M12 2a7 7 0 0 1 7 7c0 4.2-3.4 7.8-7 10-3.6-2.2-7-5.8-7-10a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 2.8 2.2 5.6 5 7.4 2.8-1.8 5-4.6 5-7.4a5 5 0 0 0-5-5Zm0 2.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Z" />
    ),
  },
]

const championChips = ['Capital', 'Access', 'Credibility']

const roadmapSteps = [
  'Training',
  'Skill Development',
  'Business Incubation',
  'Terra Cart Setup',
  'Digital Marketing',
  'Market Access',
  'Sustainable Income',
  'Financial Independence',
]

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ChampionIcon({ children }) {
  return (
    <span className="sc-archetype-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{children}</svg>
    </span>
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

      {/* Hero */}
      <section className="social-band-light nav-island-underlay">
        <div className="section-shell sc-hero-shell">
          <div className="sc-hero-grid">
            <Reveal>
              <div className="sc-hero-copy">
                <p className="sc-eyebrow">Terra Cart Partners</p>
                <h1 className="section-title sc-hero-title">Who Are Social Champions?</h1>
                <p className="sc-hero-lead">
                  Social Champions are partners who turn inclusion into ownership — not charity, but scalable
                  enterprise where impact and profitability coexist.
                </p>
                <div className="mt-8">
                  <Button
                    to="/contact"
                    variant="plaqueGold"
                    size="plaque"
                    className="sc-resource-btn min-w-[22rem] md:min-w-[26rem] text-center"
                  >
                    Join as Social Champion
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <PopHover as="figure" className="sc-hero-visual">
                <img
                  src={images.image18}
                  alt="Social Champions concept visual"
                  loading="eager"
                  className="sc-hero-visual-img"
                />
              </PopHover>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Archetype cards */}
      <section className="social-band-light">
        <div className="section-shell py-10 md:py-12">
          <Reveal>
            <p className="sc-section-eyebrow text-center">More than investors</p>
            <h2 className="section-title sc-section-heading text-center">Champions Who Build With Us</h2>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="sc-archetype-grid mt-8 md:mt-10"
          >
            {championArchetypes.map((item) => (
              <motion.div key={item.title} variants={reveal}>
                <GlassCard className="mission-dark-card sc-archetype-card !rounded-[1.15rem] !p-6 md:!p-8">
                  <ChampionIcon>{item.icon}</ChampionIcon>
                  <h3 className="sc-archetype-title">{item.title}</h3>
                  <p className="sc-archetype-line">{item.line}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dark dual tiles */}
      <section className="social-band-light social-band-divider">
        <div className="section-shell pb-10 md:pb-14">
          <div className="sc-dual-grid">
            <Reveal>
              <GlassCard className="mission-dark-card sc-dual-card !rounded-[1.1rem]">
                <h2 className="sc-dual-title">What Social Champions Do</h2>
                <div className="launch-event-plaque-rule sc-dual-rule" aria-hidden="true" />
                <p className="sc-dual-body">
                  They enable ownership, not control — empowering PwD entrepreneurs to lead, operate, and grow
                  independent businesses.
                </p>
                <div className="sc-chip-row">
                  {championChips.map((chip) => (
                    <span key={chip} className="sc-chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.06}>
              <GlassCard className="mission-dark-card sc-dual-card !rounded-[1.1rem]">
                <h2 className="sc-dual-title">Why They Join Terra Cart</h2>
                <div className="launch-event-plaque-rule sc-dual-rule" aria-hidden="true" />
                <p className="sc-dual-body">
                  For leaders who believe inclusion must be economically strong and ethically designed — building the
                  next chapter of inclusive commerce.
                </p>
                <div className="mt-6">
                  <Button to="/contact" variant="plaqueLight" size="plaqueLight" className="min-w-[14rem]">
                    Partner With Us
                  </Button>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Legacy spotlight — Launch Event slide layout */}
      <section className="social-band-light social-band-divider">
        <div className="section-shell py-8 md:py-10">
          <Reveal>
            <LaunchSlide
              eyebrow="Legacy of Trust"
              title="Dr. Dnyaneshwar Mulay"
              body="When a Visionary Leads, Change Follows. He brings integrity to Terra Cart as our first Social Champion."
              imageSrc={images.championPortrait}
              imageAlt="Dr. Dnyaneshwar Mulay, Terra Cart's first Social Champion"
              imageClassName={`${launchImageClass} object-top`}
              plaqueClassName={legacyPlaqueClass}
              reverse
            />
          </Reveal>

          <Reveal className="mt-8 md:mt-10">
            <PopHover as="article" className={`${launchImageFrame} mx-auto max-w-[72rem]`}>
              <img
                src={images.image24}
                alt="Social champion credentials and highlights"
                loading="lazy"
                className="h-auto w-full rounded-2xl bg-black object-contain"
              />
            </PopHover>
          </Reveal>

          <Reveal className="mt-8">
            <p className="sc-section-eyebrow text-center">Resources</p>
            <div className="tc-download-grid tc-btn-group mt-4">
              {dmfDownloads.map((item) => (
                <Button
                  key={item.href}
                  href={item.href}
                  external
                  variant="plaqueGold"
                  size="plaqueLight"
                  className="sc-resource-btn min-w-[14rem] md:min-w-[16.8rem] text-center"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Roadmap */}
      <section className="hero-surface">
        <div className="section-shell py-10 md:py-14">
          <Reveal>
            <p className="sc-section-eyebrow text-center">The Ecosystem</p>
            <h2 className="section-title sc-section-heading text-center">The Terra Cart Roadmap</h2>
            <p className="sc-roadmap-lead mx-auto mt-4 max-w-[48rem] text-center">
              A complete system connecting access, design, training, and operations — so Champions focus on people,
              service, and growth.
            </p>
          </Reveal>

          <Reveal className="mt-8 md:mt-10">
            <div className="sc-roadmap-track" aria-label="Terra Cart roadmap steps">
              {roadmapSteps.map((step, index) => (
                <div key={step} className="sc-roadmap-step">
                  <span className="sc-roadmap-step-num">{index + 1}</span>
                  <span className="sc-roadmap-step-label">{step}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-8 md:mt-10">
            <PopHover as="figure" className="mx-auto max-w-[72rem]">
              <img src={images.roadmap} alt="Terra Cart Roadmap infographic" loading="lazy" className="h-auto w-full object-contain" />
            </PopHover>
          </Reveal>
        </div>
      </section>

      {/* Bento: viability + benefits */}
      <section className="social-band-light">
        <div className="section-shell py-10 md:py-14">
          <div className="sc-bento-grid">
            <Reveal className="sc-bento-viability">
              <GlassCard className="sc-bento-card !rounded-[1.1rem] !p-4 md:!p-5">
                <h2 className="section-title sc-bento-title mb-4 text-center md:text-left">
                  Built for Impact. Designed for Viability.
                </h2>
                <PopHover as="figure" className="sc-bento-image-wrap">
                  <img
                    src={images.viability}
                    alt="Built for Impact. Designed for Viability."
                    loading="lazy"
                    className="h-auto w-full object-contain"
                  />
                </PopHover>
              </GlassCard>
            </Reveal>
            <Reveal delay={0.06} className="sc-bento-benefits">
              <GlassCard
                className="sc-bento-card sc-bento-card-accent sc-bento-benefits-card !rounded-[1.1rem] !p-4 md:!p-5"
              >
                <h2 className="section-title sc-bento-title mb-4 text-center md:text-left">
                  Who Benefits from This Model?
                </h2>
                <PopHover as="figure" className="sc-bento-image-wrap sc-bento-benefits-image-wrap">
                  <img
                    src={images.benefits}
                    alt="Who Benefits from This Model"
                    loading="lazy"
                    className="sc-bento-benefits-image"
                  />
                </PopHover>
                <div className="sc-bento-benefits-cta text-center md:text-left">
                  <Button
                    to="/contact"
                    variant="plaqueGold"
                    size="plaqueLight"
                    className="sc-resource-btn min-w-[16rem] text-center"
                  >
                    Own a Terra Cart
                  </Button>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="social-band-light social-band-divider">
        <div className="section-shell py-10 md:pb-14">
          <Reveal>
            <GlassCard className="mission-dark-card sc-dual-card sc-closing-cta !rounded-[1.1rem]">
              <h2 className="sc-dual-title text-center">Partner With Terra Cart</h2>
              <div className="launch-event-plaque-rule sc-dual-rule mx-auto" aria-hidden="true" />
              <p className="sc-dual-body mx-auto mt-4 max-w-[36rem] text-center">
                Build enterprises where dignity, ownership, and measurable impact grow together.
              </p>
              <div className="tc-btn-group mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <Button to="/contact" variant="plaqueLight" size="plaqueLight" className="min-w-[16rem]">
                  Contact Us
                </Button>
                <Button to="/privacy-policy" variant="plaqueLight" size="plaqueLight" className="min-w-[16rem]">
                  Privacy Policy
                </Button>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  )
}
