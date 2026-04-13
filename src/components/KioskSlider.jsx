import { motion } from 'framer-motion'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function KioskSlider({ slides, autoplay = true, loop = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="glass overflow-hidden rounded-3xl p-2"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, A11y]}
        loop={loop}
        autoplay={autoplay ? { delay: 2600, disableOnInteraction: false } : false}
        pagination={{ clickable: true }}
        navigation
        className="rounded-2xl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.alt}>
            <img src={slide.src} alt={slide.alt} loading="lazy" className="aspect-[16/9] w-full object-cover" />
            {slide.caption ? (
              <div className="border-t border-white/40 bg-white/80 px-4 py-3 text-sm font-medium text-[var(--tc-ink)]">
                {slide.caption}
              </div>
            ) : null}
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}
