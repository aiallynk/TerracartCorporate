import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const imcImages = {
  logo: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052263/image01_khiz5h.png',
  collage: [
    'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052269/image03_fc2dai.jpg',
    'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052273/image05_gzarpu.jpg',
    'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052276/image06_xih3ds.jpg',
    'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052282/image04_tqyl6h.jpg',
  ],
  showcase: [
    'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052286/image09_fk9fjw.jpg',
    'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052292/image30_wfhqnq.jpg',
  ],
  companies: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052594/image27_ofasi0.png',
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

export default function IndiaMilletsCo() {
  return (
    <>
      <SEO
        title="India Millets Co."
        description="India Millets Co. where gourmet gifting meets purpose, nutrition, sustainability, and inclusive growth."
        canonical="/india-millets-co"
      />

      <div className="imc-page-surface">
        <section className="imc-logo-surface section-shell">
          <motion.div
            className="imc-logo-wrap"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <img src={imcImages.logo} alt="India Millets Co logo" loading="lazy" className="imc-logo" />
          </motion.div>
        </section>

        <section className="imc-intro-band section-shell">
          <motion.div
            className="imc-intro-copy"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.42, ease: 'easeOut' }}
          >
            <h1 className="imc-intro-title">Welcome to India Millets co (IMC)</h1>
            <p className="imc-intro-text">
              Rewriting the narrative around one of the world&apos;s most nutritious grains, Dr. Sonam Kapse, co-founder of
              India Millets, is on a mission to bring millets from a healthy food to a tasty, convenient, and exclusive
              one.
            </p>
          </motion.div>
        </section>

        <section className="imc-content-surface section-shell">
          <motion.article
            className="imc-story"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.42, ease: 'easeOut' }}
          >
            <h2 className="imc-story-title">India Millets Co.</h2>
            <p className="imc-story-kicker">Where Gourmet Meets Purpose</p>
            <p>
              India Millets Co. creates premium millet-based corporate gift hampers for Government Organizations,
              Multinationals, and Consulates across India. Designed for global palates, our gourmet selections blend
              nutrition, elegance, and sustainability.
            </p>
            <p>
              Produced in a clean, secure, high-standard facility, each hamper is crafted by skilled Persons with
              Disabilities and supported by women farmers - making every gift a symbol of dignity and inclusive growth.
            </p>
            <p>
              Aligned with the vision of India&apos;s Millet Mission and inspired by the global momentum of the International
              Year of Millets 2023, we position millets as a mark of climate resilience and purposeful enterprise.
            </p>
            <p>More than hampers.</p>
            <p>Impact, nutrition, and national pride - beautifully packaged.</p>
          </motion.article>

          <motion.div
            className="imc-collage-grid"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
          >
            {imcImages.collage.map((src, index) => (
              <figure className="imc-collage-media" key={src}>
                <img src={src} alt={`India Millets collage image ${index + 1}`} loading="lazy" className="imc-collage-image" />
              </figure>
            ))}
          </motion.div>

          <motion.div
            className="imc-breaker"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.75 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            aria-hidden="true"
          />

          <motion.div
            className="imc-showcase-grid"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            {imcImages.showcase.map((src, index) => (
              <figure className="imc-showcase-media" key={src}>
                <img
                  src={src}
                  alt={`India Millets showcase image ${index + 1}`}
                  loading="lazy"
                  className="imc-showcase-image"
                />
              </figure>
            ))}
          </motion.div>

          <motion.div
            className="imc-companies-block"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.42, ease: 'easeOut' }}
          >
            <h3 className="imc-companies-title">Companies We Work With</h3>
            <img src={imcImages.companies} alt="Companies we work with" loading="lazy" className="imc-companies-image" />
          </motion.div>
        </section>
      </div>
    </>
  )
}
