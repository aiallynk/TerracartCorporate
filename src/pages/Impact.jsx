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

const proofBlocks = [
  {
    title: 'In the News',
    subtitle: 'In the News coverage for Terra Cart',
    image: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052001/image25_p8do8e.png',
    alt: 'In the News coverage for Terra Cart',
  },
  {
    title: 'Media Coverages',
    subtitle: 'Media coverages for Terra Cart',
    image: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052019/image26_enqzqa.png',
    alt: 'Media coverages for Terra Cart',
  },
  {
    title: 'Companies We Work With',
    subtitle: 'Companies working with Terra Cart',
    image: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776052007/image15_czjtje.png',
    alt: 'Companies working with Terra Cart',
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
        <section className="section-shell pb-7">
          <div className="impact-plain-content">
            <h1 className="section-title !text-[clamp(2rem,3.5vw,3.1rem)]">Why Governments &amp; Global Institutions Stand With Terra Cart</h1>
            <p className="mt-5 text-[1rem] leading-[1.85] text-[var(--tc-muted)] md:text-[1.15rem]">
              Terra Cart is not just a hospitality platform - it is an inclusive infrastructure model that aligns public
              policy, disability rights, and economic growth into one scalable ecosystem.
            </p>

            <p className="mt-6 text-[1rem] font-semibold text-[var(--tc-ink)] md:text-[1.1rem]">Aligned with:</p>
            <ul className="mt-3 space-y-2 text-[0.98rem] leading-[1.75] text-[var(--tc-muted)] md:text-[1.08rem]">
              {alignedWithItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>

            <p className="mt-6 text-[1rem] leading-[1.85] text-[var(--tc-muted)] md:text-[1.12rem]">
              This makes Terra Cart a turnkey compliance solution, not an added burden.
            </p>

            <p className="mt-6 text-[1rem] font-semibold text-[var(--tc-ink)] md:text-[1.1rem]">
              Terra Cart transforms these spaces into:
            </p>
            <ul className="mt-3 space-y-2 text-[0.98rem] leading-[1.75] text-[var(--tc-muted)] md:text-[1.08rem]">
              {transformationItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>

            <p className="mt-6 text-[1rem] leading-[1.85] text-[var(--tc-muted)] md:text-[1.12rem]">
              All without requiring new construction, subsidies, or long-term leases.
            </p>
          </div>
        </section>

        <section className="section-shell pt-0 pb-8">
          <h2 className="section-title !text-[clamp(1.7rem,2.9vw,2.5rem)]">Why This Works for Public Institutions?</h2>
          <img
            src="https://www.terracart.in/assets/images/image23.png?v=0a813c8e"
            alt="Why this works for public institutions"
            loading="lazy"
            className="impact-inline-image impact-institution-image mt-6"
          />
        </section>

        <section className="section-shell pt-0 pb-8">
          <div className="space-y-10">
            {proofBlocks.map((item) => (
              <article key={item.title} className="impact-proof-block">
                <h3 className="text-[1.5rem] font-semibold text-[var(--tc-ink)] md:text-[1.8rem]">{item.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-[1.8] text-[var(--tc-muted)] md:text-[1.05rem]">{item.subtitle}</p>
                <img src={item.image} alt={item.alt} loading="lazy" className="impact-inline-image mt-4" />
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell pt-0 pb-10">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Button to="/contact" variant="terracart" size="terracart" className="min-w-[15rem]">
              Contact Us
            </Button>
            <Button to="/privacy-policy" variant="terracart" size="terracart" className="min-w-[15rem]">
              Privacy Policy
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
