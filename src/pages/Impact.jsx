import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import PopHover from '../components/PopHover'
import SEO from '../components/SEO'

const alignedWithItems = [
  'Rights of Persons with Disabilities (RPwD) Act, 2016',
  'Sugamya Bharat Abhiyan (Accessible India Campaign)',
  'Equal Opportunity Policies across public institutions',
]

const transformationItems = [
  'Accessible, revenue-generating kiosks',
  'Visible inclusion hubs for citizens',
  'Livelihood engines for PWD entrepreneurs',
]

const impactStats = [
  {
    value: '500+',
    title: 'Lives Empowered',
  },
  {
    value: '15+',
    title: 'Disability Categories Supported',
  },
  {
    value: '100+',
    title: 'Tribal Women Entrepreneurs',
  },
  {
    value: '50+',
    title: 'Partner Institutions',
  },
  {
    value: '4',
    title: 'Inclusive Terra Cart Models',
  },
]

const institutionBlocks = [
  {
    title: 'Social Impact',
    description:
      'Zero rent, zero subsidy. Zero government burden — 100% social initiative.',
  },
  {
    title: 'Visible Inclusivity',
    description:
      'Inclusion becomes seen and experienced, not just reported.',
  },
  {
    title: 'Faster Compliance',
    description:
      'Instant alignment with accessibility and equal opportunity mandates.',
  },
]

const companiesWeWorkWith = {
  title: 'Companies We Work With',
  image:
    'https://res.cloudinary.com/dvkyvryei/image/upload/w_2200,q_auto,f_auto/v1776052007/image15_czjtje.png',
  alt: 'Companies We Work With',
}

const proofBlocks = [
  {
    title: 'In the News',
    image: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052001/image25_p8do8e.png',
    alt: 'In the News',
  },
  {
    title: 'Media Coverages',
    image:
      'https://res.cloudinary.com/dvkyvryei/image/upload/w_2200,q_auto,f_auto/v1776052019/image26_enqzqa.png',
    alt: 'Media Coverages',
    featured: true,
  },
]

export default function Impact() {
  return (
    <>
      <SEO
        title="Impact"
        description="Why governments and global institutions stand with Terra Cart and how the model drives inclusive enterprise outcomes."
        canonical="/impact"
      />

      <div className="impact-page-surface nav-island-underlay">

        {/* Companies We Work With */}
        <section className="section-shell impact-companies-section pb-4">
          <PopHover as="article" className="impact-proof-block impact-companies-block">
            <h3 className="impact-proof-heading impact-companies-heading">{companiesWeWorkWith.title}</h3>
            <img
              src={companiesWeWorkWith.image}
              alt={companiesWeWorkWith.alt}
              loading="eager"
              className="impact-inline-image impact-companies-image mt-4"
            />
          </PopHover>
        </section>

        {/* Hero */}
        <section className="section-shell pb-7">
          <div className="impact-plain-content">

            <h1 className="section-title !text-[clamp(2rem,3.5vw,3.1rem)]">
              Why Governments & Global Institutions Stand With Terra Cart
            </h1>

            <p className="impact-intro-lead mt-5">
              Terra Cart is not just a hospitality platform—it is an inclusive
              infrastructure model that aligns public policy, disability rights,
              and economic growth into one scalable ecosystem.
            </p>

            <p className="impact-intro-subhead mt-12">
              Aligned with:
            </p>

            <ul className="impact-intro-list mt-3 space-y-2">
              {alignedWithItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <p className="impact-intro-body mt-6">
              This makes Terra Cart a turnkey compliance solution, not an added
              burden.
            </p>

            <p className="impact-intro-subhead mt-8">
              Terra Cart transforms these spaces into:
            </p>

            <ul className="impact-intro-list mt-3 space-y-2">
              {transformationItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <p className="impact-intro-body mt-6">
              All without requiring new construction, subsidies, or long-term
              leases.
            </p>

          </div>

          
            {/* ===================== */}
            {/* IMPACT STATISTICS */}
            {/* ===================== */}

            <div className="impact-stat-grid mt-12">

              {impactStats.map((item) => (
                <GlassCard
                  key={item.title}
                  className="mission-dark-card impact-stat-card !rounded-[1.15rem]"
                  hover={false}
                >
                  <h2 className="impact-stat-value">{item.value}</h2>

                  <div className="launch-event-plaque-rule impact-stat-rule mt-4" aria-hidden="true" />

                  <p className="impact-stat-label">{item.title}</p>
                </GlassCard>
              ))}

            </div>

            {/* ===================== */}
        </section>

        {/* Institution Image */}

        <section className="section-shell pt-0 pb-8">
          <h2 className="section-title !text-[clamp(1.7rem,2.9vw,2.5rem)]">
            Why This Works for Public Institutions?
          </h2>

          <div className="impact-institution-grid mt-8">
            {institutionBlocks.map((item) => (
              <GlassCard
                key={item.title}
                className="mission-dark-card impact-institution-card !rounded-[1.25rem] text-center"
                hover={false}
              >
                <h3 className="impact-institution-title">{item.title}</h3>
                <div className="launch-event-plaque-rule impact-institution-rule mx-auto" aria-hidden="true" />
                <p className="impact-institution-body">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Proof */}

        <section className="section-shell pt-0 pb-8">
          <div className="space-y-10">

            {proofBlocks.map((item) => (
              <PopHover
                as="article"
                key={item.title}
                className={`impact-proof-block${item.featured ? ' impact-proof-block--featured' : ''}`}
              >
                <h3
                  className={`impact-proof-heading${item.featured ? ' impact-proof-heading--featured' : ''}`}
                >
                  {item.title}
                </h3>

                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className={`impact-inline-image mt-4${item.featured ? ' impact-proof-image--featured' : ''}`}
                />
              </PopHover>
            ))}

          </div>
        </section>

        {/* Buttons */}

        <section className="section-shell pt-0 pb-10">

          <div className="tc-btn-group flex flex-wrap items-center justify-center gap-4">

            <Link to="/contact" className="what-is-plaque-btn focus-ring">
              <span className="what-is-title">Contact Us</span>
            </Link>

            <Link to="/privacy-policy" className="what-is-plaque-btn focus-ring">
              <span className="what-is-title">Privacy Policy</span>
            </Link>

          </div>

        </section>

      </div>
    </>
  )
}