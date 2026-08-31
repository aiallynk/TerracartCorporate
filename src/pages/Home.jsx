import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import GlassCard from '../components/GlassCard'
import SEO from '../components/SEO'
import Section from '../components/Section'

const images = {
  landingHero: '/assets/hero-landing.png',
  landingVideo: '/assets/hero-landing.mp4?v=2',
  welcomeVideo: '/assets/welcome-video.mp4',
  heroLogo: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051598/logo_rwoel6.png',
  mission: '/assets/divyang-jan-collage.jpg',
  physicalAbilities: '/assets/physical-abilities.png',
  physicalAbilitiesTwo: '/assets/physical-abilities-2.png',
  vision: '/assets/our-vision-block.png',
  atmanirbhar: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051598/image04_ntmaot.jpg',
  model: '/assets/work-model-founder-employees.jpeg',
  government: '/assets/government-support-photo-top-half.png',
  look: '/assets/how-terracart-looks.png',
  founder: '/assets/brain-behind-terracart.png',
}

const panelClassName = '!rounded-[1.1rem] !border !border-[#d5d1cd] !bg-white !backdrop-blur-0 !shadow-[0_8px_22px_rgba(92,76,64,0.12)]'
const physicalAbilitiesImageCardClass = 'physical-abilities-image-card !rounded-[1.1rem] !border !border-black !bg-black !backdrop-blur-0 !shadow-[0_8px_22px_rgba(92,76,64,0.12)]'
const splitMediaCardClass = `${panelClassName} min-h-[260px] md:min-h-[390px]`
const workModelMediaCardClass = '!rounded-[1.1rem] !border !border-black !bg-black !backdrop-blur-0 !shadow-[0_8px_22px_rgba(92,76,64,0.12)] !p-2 min-h-[260px] md:min-h-[390px]'
const visionMediaCardClass =
  '!rounded-[1.1rem] !border !border-black !bg-black !backdrop-blur-0 !shadow-[0_8px_22px_rgba(92,76,64,0.12)] !p-2'
const menuShowcaseImages = [
  { src: '/assets/terracart-menu-1.jpg?v=20260829b', alt: 'Vada Pav with green chilies at Terra Cart' },
  { src: '/assets/terracart-menu-2.jpg?v=20260829b', alt: 'Bun maska and chai at Terra Cart' },
  { src: '/assets/terracart-menu-3.jpg?v=20260829b', alt: 'Club sandwiches at Terra Cart' },
  { src: '/assets/terracart-menu-4.jpg?v=20260829b', alt: 'Bread pakora at Terra Cart' },
  { src: '/assets/terracart-menu-5.jpg?v=20260829b', alt: 'Misal pav at Terra Cart' },
]

const HERO_PLAYED_KEY = 'tc-hero-played'
const WELCOME_PLAYED_KEY = 'tc-welcome-played'

function freezeVideoAtEnd(video) {
  if (!video) return
  video.pause()
  if (Number.isFinite(video.duration) && video.duration > 0) {
    video.currentTime = Math.max(0, video.duration - 0.05)
  }
}

function usePlayOnceVideo(videoRef, storageKey) {
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const showLastFrame = () => freezeVideoAtEnd(video)

    if (sessionStorage.getItem(storageKey) === '1') {
      video.autoplay = false
      if (video.readyState >= 1) showLastFrame()
      else video.addEventListener('loadedmetadata', showLastFrame, { once: true })
    }

    const onEnded = () => {
      sessionStorage.setItem(storageKey, '1')
      freezeVideoAtEnd(video)
    }

    video.addEventListener('ended', onEnded)
    return () => {
      video.removeEventListener('ended', onEnded)
      video.removeEventListener('loadedmetadata', showLastFrame)
    }
  }, [videoRef, storageKey])
}

export default function Home() {
  const menuPdfPath = '/PDFs/TerraCartMenu.pdf'
  const heroVideoRef = useRef(null)
  const welcomeVideoRef = useRef(null)

  usePlayOnceVideo(heroVideoRef, HERO_PLAYED_KEY)
  usePlayOnceVideo(welcomeVideoRef, WELCOME_PLAYED_KEY)

  return (
    <>
      <SEO
        title="Home"
        description="Terra Cart: Hospitality by Choice, Inclusion by Design. India's inclusive hospitality ecosystem."
        canonical="/"
      />

      <section className="kiosk-hero-surface">
        <video
          ref={heroVideoRef}
          className="kiosk-hero-image"
          autoPlay
          muted
          playsInline
          poster={images.landingHero}
          aria-label="Terra Cart inclusive kiosk"
        >
          <source src={images.landingVideo} type="video/mp4" />
        </video>
      </section>

      <section className="what-is-band" aria-label="What is TerraCart ?">
        <div className="what-is-plaque">
          <p className="what-is-eyebrow">Inclusive entrepreneurship</p>
          <h2 className="what-is-title">What is TerraCart ?</h2>
        </div>
      </section>

      <section className="welcome-video-surface">
        <video
          ref={welcomeVideoRef}
          className="welcome-video"
          autoPlay
          muted
          playsInline
          aria-label="Terra Cart central idea with workers"
        >
          <source src={images.welcomeVideo} type="video/mp4" />
        </video>
      </section>

      <div className="home-panels">
        <Section
          id="mission"
          layout="stack"
          title="Our Mission"
          subtitle="Terra Cart: Hospitality by Choice, Inclusion by Design."
          description={[
            'Our mission is to build Indias most inclusive entrepreneurial ecosystem by creating sustainable livelihood opportunities for Persons with Disabilities and Tribal Women through premium hospitality, millet-based enterprises, accessible technology, and community-driven innovation.',
            'We believe empowerment begins with ownership—not charity.'
          ]}
          textCardClassName="mission-dark-card !rounded-[1.1rem] text-center md:px-12"
          titleClassName="text-center md:text-center !text-[clamp(2rem,3.6vw,3.35rem)] !text-[#f7efe3]"
          subtitleClassName="text-center !text-[1.35rem] md:!text-[1.8rem] !leading-[1.45] !text-[rgba(232,198,140,0.92)]"
          descriptionClassName="text-center !text-[#e8dccf] !text-[1.15rem] md:!text-[1.5rem] !leading-[1.82]"
          className="pt-14 pb-0"
        />

        <div className="physical-abilities-band">
          <section id="physical-abilities" className="section-shell pt-10 pb-10">
            <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
              <div className="space-y-7">
                <GlassCard className="launch-event-plaque !rounded-[1.1rem] text-center md:px-9 md:py-10">
                  <h2 className="launch-event-plaque-title text-center !text-[clamp(2.2rem,3.9vw,3.5rem)]">
                    Physical Abilities
                  </h2>
                  <div className="launch-event-plaque-rule" aria-hidden="true" />
                  <p className="launch-event-plaque-body mt-4 text-center">
                    Terra Cart empowers people with diverse disabilities to participate, earn, and become entrepreneurs through inclusive opportunities built on dignity, equality, independence, and ability—not disability
                  </p>
                </GlassCard>

                <article className={`overflow-hidden p-2 ${physicalAbilitiesImageCardClass}`}>
                  <div className="h-[400px] w-full overflow-y-auto rounded-2xl bg-white md:h-[620px]">
                    <img
                      src={images.physicalAbilitiesTwo}
                      alt="Physical abilities detail"
                      loading="lazy"
                      className="w-full object-contain object-top"
                    />
                  </div>
                </article>
              </div>

              <div className="space-y-7">
                <article className={`overflow-hidden p-2 ${physicalAbilitiesImageCardClass}`}>
                  <div className="h-[400px] w-full overflow-y-auto rounded-2xl bg-white md:h-[620px]">
                    <img
                      src={images.physicalAbilities}
                      alt="Physical abilities"
                      loading="lazy"
                      className="w-full object-contain object-top"
                    />
                  </div>
                </article>

                <GlassCard className="launch-event-plaque !rounded-[1.1rem] text-center md:px-9 md:py-10">
                  <h2 className="launch-event-plaque-title text-center !text-[clamp(2.2rem,3.9vw,3.5rem)]">
                    Sign Language
                  </h2>
                  <div className="launch-event-plaque-rule" aria-hidden="true" />
                  <p className="launch-event-plaque-body mt-4 text-center">
                    At Terra Cart, sign language turns communication into inclusion—helping customers and team members connect, understand, and work together without barriers.
                  </p>
                </GlassCard>
              </div>
            </div>
          </section>
        </div>

        <section className="section-shell py-8">
          <div className="text-center">
            <Button to="/social-champions" variant="plaque" size="plaque" className="min-w-[22rem] md:min-w-[26rem]">
              Join as Social Champion
            </Button>
          </div>
        </section>

        <motion.section
          className="collage-kenburns relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] w-screen overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
        >
          <motion.img
            src={images.mission}
            alt="Divyang jan collage"
            loading="lazy"
            className="block h-auto w-full origin-center will-change-transform"
            variants={{
              hidden: { opacity: 0, scale: 1.08 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
          <motion.div
            aria-hidden="true"
            className="collage-kenburns-vignette pointer-events-none absolute inset-0"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 0,
                transition: { duration: 1.25, ease: 'easeOut', delay: 0.15 },
              },
            }}
          />
        </motion.section>

        <Section
          id="vision"
          compact
          matchMediaHeight
          title="Our Vision"
          subtitle="From Charity to Entrepreneurship."
          description={[
            'We envision an India where every person, regardless of ability or background, has the opportunity to become an entrepreneur.',

            'We are creating a future where:',

            '* Persons with Disabilities become business owners.',

            '* Tribal Women become successful rural entrepreneurs.',

            '* Indigenous products reach premium markets.',

            '* Public spaces become symbols of inclusion.',

            '* Entrepreneurship becomes the foundation of social transformation.',
          ]}
          media={{
            src: images.vision,
            alt: 'Our Vision — Terra Cart inclusive entrepreneurship',
            className: 'bg-white object-cover object-top',
          }}
          textCardClassName="mission-dark-card !rounded-[1.1rem] text-center md:px-9 !py-5 md:!py-6"
          mediaCardClassName={visionMediaCardClass}
          titleClassName="text-center !text-[clamp(2.2rem,3.9vw,3.7rem)] !text-[#f7efe3]"
          subtitleClassName="text-center !text-[1.45rem] md:!text-[1.95rem] !leading-[1.45] !text-[rgba(232,198,140,0.92)]"
          descriptionClassName="text-center !text-[#e8dccf] !text-[1.2rem] md:!text-[1.55rem] !leading-[1.78]"
        />

        <section className="section-shell pt-6">
          <div className="mx-auto max-w-5xl border-t border-[#d0ccc8] pt-10 text-center">
            <h2 className="section-title text-[var(--tc-title-soft)]">Food Menu</h2>
          </div>

          <div className="tc-menu-marquee-wrap mt-6" aria-label="Terra Cart menu gallery">
            <div className="tc-menu-marquee-track">
              {[...menuShowcaseImages, ...menuShowcaseImages].map((item, index) => (
                <article
                  key={`${item.src}-${index}`}
                  className="tc-menu-marquee-item"
                  aria-hidden={index >= menuShowcaseImages.length}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    draggable="false"
                    className="h-full w-full rounded-[1.1rem] object-cover"
                  />
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-5xl text-center">
            <Button href={menuPdfPath} external variant="plaque" size="plaque" className="min-w-[22rem] md:min-w-[26rem]">
              Terra Cart Menu <span aria-hidden="true" className="text-lg">-&gt;</span>
            </Button>
          </div>
        </section>

        <Section
          id="work-model"
          title="How Does Terra Cart Work and Scale with Purpose?"
          description="Terra Cart brings together Social Champions, a zero-rent business model, and a clear growth roadmap to build inclusive enterprises."
          media={{ src: images.model, alt: 'How Terra Cart works', className: 'object-contain bg-white object-center' }}
          reverse
          cta={{
            label: 'Explore Terracart Model',
            to: '/impact',
            variant: 'plaqueLight',
            size: 'plaqueLight',
            className: 'min-w-[18rem]',
            text: 'Own Your Future. Own Your Terra Cart.',
          }}
          textCardClassName="mission-dark-card !rounded-[1.1rem]"
          mediaCardClassName={workModelMediaCardClass}
          titleClassName="!text-[#f7efe3]"
          descriptionClassName="!text-[#e8dccf] text-[1.25rem] leading-[1.8]"
        />

        <Section
          id="gov-support"
          title="Why Governments & Global Institutions Stand With Terra Cart"
          description={[
            'Terra Cart unites public infrastructure, disability rights, and enterprise into one scalable model of ownership. By enabling PwD-led businesses, strengthening RPwD Act compliance, and advancing the UN Sustainable Development Goals, we position India at the forefront of inclusive entrepreneurship worldwide',
          ]}
          media={{ src: images.government, alt: 'Government and global institutions support Terra Cart', className: 'object-cover object-top' }}
          reverse
          cta={{
            label: 'Explore Our Impcat',
            to: '/impact',
            variant: 'plaqueLight',
            size: 'plaqueLight',
            className: 'min-w-[18rem]',
          }}
          textCardClassName="mission-dark-card !rounded-[1.1rem]"
          mediaCardClassName={workModelMediaCardClass}
          titleClassName="!text-[#f7efe3]"
          descriptionClassName="!text-[#e8dccf] text-[1.18rem] leading-[1.85]"
        />

        <Section
          id="how-look"
          title="How Terra Cart looks?"
          description={[
            'Experience how inclusive design meets commercial excellence.',
            'Explore our universally designed kiosks, see how Terra Cart transforms public spaces into human-centered, profitable enterprises.',
          ]}
          media={{ src: images.look, alt: 'How Terra Cart looks image', className: 'object-contain bg-white object-center' }}
          reverse
          cta={{
            label: 'View Kiosk Design',
            to: '/kiosk',
            variant: 'plaqueLight',
            size: 'plaqueLight',
            className: 'min-w-[18rem]',
          }}
          textCardClassName="mission-dark-card !rounded-[1.1rem]"
          mediaCardClassName={workModelMediaCardClass}
          titleClassName="!text-[#f7efe3]"
          descriptionClassName="!text-[#e8dccf] text-[1.18rem] leading-[1.85]"
        />

        <Section
          id="brain-behind"
          title="Brain Behind Terra Cart"
          description={[
            '"Terra Cart: A global platform for inclusion and social empowerment for communities everywhere." - Dr Sonam Kapse',
          ]}
          media={{ src: images.founder, alt: 'Brain behind Terra Cart, Dr Sonam Kapse', className: 'object-contain bg-white object-center' }}
          reverse
          cta={{
            label: 'Meet the Founder',
            to: '/founder',
            variant: 'plaqueLight',
            size: 'plaqueLight',
            className: 'min-w-[18rem]',
          }}
          textCardClassName="mission-dark-card !rounded-[1.1rem]"
          mediaCardClassName={workModelMediaCardClass}
          titleClassName="!text-[#f7efe3]"
          descriptionClassName="!text-[#e8dccf] text-[1.18rem] leading-[1.85]"
        />

        <Section
          id="atmanirbhar"
          title="आत्मनिर्भर और विकसित भारत"
          description={[
            'The "Shree Anna" Innovation Aligned with the Hon’ble Prime Minister’s vision, we bring India’s "Power Grains" to Govt Offices, Airports and Public Spaces to promote health and sustainability',
            'Enterprise: Premium cafes and catering.',
            'Empowerment: PwD teams leading as Baristas and Chefs.',
            'Education: Immersive DEI workshops that go beyond theory.',
            'Drive Change: [ Invite a Cart ] - [ Sponsor a Cart ] - [ Become a Champion ]',
          ]}
          media={{ src: images.atmanirbhar, alt: 'Atmanirbhar and Viksit Bharat section image', className: 'object-contain bg-white object-center' }}
          textCardClassName="mission-dark-card !rounded-[1.1rem] text-center md:px-10 md:flex md:flex-col md:justify-center"
          mediaCardClassName={workModelMediaCardClass}
          titleClassName="text-center !text-[clamp(2rem,3.8vw,3.5rem)] !text-[#f7efe3]"
          descriptionClassName="text-center !text-[#e8dccf] !text-[1.1rem] md:!text-[1.4rem] !leading-[1.82]"
        />
      </div>
    </>
  )
}
