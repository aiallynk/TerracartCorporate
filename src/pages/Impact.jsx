import Button from '../components/Button'
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

const proofBlocks = [
  {
    title: 'In the News',
    image: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052001/image25_p8do8e.png',
    alt: 'In the News',
  },
  {
    title: 'Media Coverages',
    image: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052019/image26_enqzqa.png',
    alt: 'Media Coverages',
  },
  {
    title: 'Companies We Work With',
    image: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052007/image15_czjtje.png',
    alt: 'Companies We Work With',
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

      <div className="hero-surface">

        {/* Hero */}
        <section className="section-shell pb-7">
          <div className="impact-plain-content">

            <h1 className="section-title !text-[clamp(2rem,3.5vw,3.1rem)]">
              Why Governments & Global Institutions Stand With Terra Cart
            </h1>

            <p className="mt-5 text-[1rem] leading-[1.85] text-[var(--tc-muted)] md:text-[1.15rem]">
              Terra Cart is not just a hospitality platform—it is an inclusive
              infrastructure model that aligns public policy, disability rights,
              and economic growth into one scalable ecosystem.
            </p>

            <p className="mt-12 text-[1rem] font-semibold text-[var(--tc-ink)] md:text-[1.1rem]">
              Aligned with:
            </p>

            <ul className="mt-3 space-y-2 text-[0.98rem] leading-[1.75] text-[var(--tc-muted)] md:text-[1.08rem]">
              {alignedWithItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <p className="mt-6 text-[1rem] leading-[1.85] text-[var(--tc-muted)] md:text-[1.12rem]">
              This makes Terra Cart a turnkey compliance solution, not an added
              burden.
            </p>

            <p className="mt-8 text-[1rem] font-semibold text-[var(--tc-ink)] md:text-[1.1rem]">
              Terra Cart transforms these spaces into:
            </p>

            <ul className="mt-3 space-y-2 text-[0.98rem] leading-[1.75] text-[var(--tc-muted)] md:text-[1.08rem]">
              {transformationItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <p className="mt-6 text-[1rem] leading-[1.85] text-[var(--tc-muted)] md:text-[1.12rem]">
              All without requiring new construction, subsidies, or long-term
              leases.
            </p>

          </div>

          
            {/* ===================== */}
            {/* IMPACT STATISTICS */}
            {/* ===================== */}

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

              {impactStats.map((item) => (

                <div
                  key={item.title}
                  className="rounded-2xl border border-[#e7d5bd] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >

                  <h2 className="text-5xl font-extrabold text-[#b87b00]">
                    {item.value}
                  </h2>

                  <div className="mt-4 h-[2px] w-12 bg-[#b87b00]" />

                  <p className="mt-4 text-base font-semibold leading-6 text-gray-700">
                    {item.title}
                  </p>

                </div>

              ))}

            </div>

            {/* ===================== */}
        </section>

        {/* Institution Image */}

        <section className="section-shell pt-0 pb-8">
          <h2 className="section-title !text-[clamp(1.7rem,2.9vw,2.5rem)]">
            Why This Works for Public Institutions?
          </h2>

          <img
            src="https://res.cloudinary.com/dvkyvryei/image/upload/v1776083210/Gemini_Generated_Image_rrznrerrznrerrzn-removebg-preview_niuwjf.png"
            alt="Why this works for public institutions"
            loading="lazy"
            className="impact-inline-image impact-institution-image mt-6"
          />
        </section>

        {/* Proof */}

        <section className="section-shell pt-0 pb-8">
          <div className="space-y-10">

            {proofBlocks.map((item) => (

              <article key={item.title} className="impact-proof-block">

                <h3 className="text-[1.5rem] font-semibold text-[var(--tc-ink)] md:text-[1.8rem]">
                  {item.title}
                </h3>

                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="impact-inline-image mt-4"
                />

              </article>

            ))}

          </div>
        </section>

        {/* Buttons */}

        <section className="section-shell pt-0 pb-10">

          <div className="flex flex-wrap items-center justify-center gap-4">

            <Button
              to="/contact"
              variant="terracart"
              size="terracart"
              className="min-w-[15rem]"
            >
              Contact Us
            </Button>

            <Button
              to="/privacy-policy"
              variant="terracart"
              size="terracart"
              className="min-w-[15rem]"
            >
              Privacy Policy
            </Button>

          </div>

        </section>

      </div>
    </>
  )
}