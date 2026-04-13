import { A11y, Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Button from '../components/Button'
import SEO from '../components/SEO'

const kioskSlides = [
  {
    src: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052897/kiosk1_rcrsgp.png',
    alt: 'Terra Cart kiosk design view one',
  },
  {
    src: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052898/kiosk02_huxvkk.png',
    alt: 'Terra Cart kiosk design view two',
  },
  {
    src: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052899/kiosk03_sh8jgb.png',
    alt: 'Terra Cart kiosk design view three',
  },
]

export default function Kiosk() {
  return (
    <>
      <SEO
        title="Kiosk Design"
        description="Explore Terra Cart kiosk design with rotating visuals and universal design principles built for dignity and performance."
        canonical="/kiosk"
      />

      <div className="hero-surface">
        <section className="section-shell pb-8">
          <div className="tc-soft-card rounded-3xl p-6 md:p-8">
            <h1 className="section-title !text-[clamp(1.9rem,3.2vw,2.8rem)]">Want to Start a Terra Cart?</h1>
            <p className="mt-4 text-[1rem] leading-[1.85] text-[var(--tc-muted)] md:text-[1.15rem]">
              Designed for dignity, independence, and performance, the Terra Cart kiosk is built using universal design
              principles. Every detail - from height and layout to visibility and flow - is engineered to empower Persons
              with Disabilities (PWDs) while delivering a premium, professional food experience.
            </p>

            <div className="mx-auto mt-7 max-w-[62rem] overflow-hidden rounded-2xl border border-[rgba(167,132,102,0.35)] bg-white/60 p-2">
              <Swiper
                modules={[Autoplay, Pagination, A11y]}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
                pagination={{ clickable: true }}
                className="tc-kiosk-swiper rounded-xl"
              >
                {kioskSlides.map((slide) => (
                  <SwiperSlide key={slide.src}>
                    <img src={slide.src} alt={slide.alt} loading="lazy" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <p className="mx-auto mt-7 max-w-[94rem] text-[1rem] leading-[1.88] text-[var(--tc-muted)] md:text-[1.12rem]">
              Every Terra Cart is a product of deep collaboration with designers, architects, and disability researchers.
              We&apos;ve considered every angle to create a space that is not just accessible, but truly empowering. From the
              first glance to the internal workflow, our design philosophy is built on a seamless integration of welcome,
              empowerment, and experience.
            </p>
          </div>
        </section>

        <section className="section-shell pt-0 pb-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[var(--tc-ink)]">Start Your TerraCart Journey</h2>
            <p className="mx-auto mt-3 max-w-3xl text-base text-[var(--tc-muted)]">
              Ready to launch an inclusive kiosk in your institution or region?
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact">Contact Us</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
