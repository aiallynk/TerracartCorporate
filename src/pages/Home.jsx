import Button from '../components/Button'
import SEO from '../components/SEO'
import Section from '../components/Section'

const images = {
  heroLogo: 'https://www.terracart.in/assets/images/image08.png',
  mission: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051599/image02_zznbs9.jpg',
  vision: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051598/image03_qdajb5.jpg',
  atmanirbhar: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051598/image04_ntmaot.jpg',
  logoOne: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051597/image05_bboq9w.png',
  logoTwo: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051597/image06_y7yfmu.png',
  model: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051598/image07_a9lq4t.jpg',
  government: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051597/image08_endzoq.jpg',
  look: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051597/image09_ltfil6.jpg',
  founder: 'https://res.cloudinary.com/dvkyvryei/image/upload/v1776051598/image10_wyhd8i.jpg',
}

const panelClassName = '!rounded-[1.1rem] !border !border-[#d5d1cd] !bg-white !backdrop-blur-0 !shadow-[0_8px_22px_rgba(92,76,64,0.12)]'
const splitMediaCardClass = `${panelClassName} min-h-[260px] md:min-h-[390px]`
const visionMediaCardClass = `${panelClassName} min-h-[220px] md:min-h-[310px]`

export default function Home() {
  const menuPdfPath = '/PDFs/TerraCartMenu.pdf'

  return (
    <>
      <SEO
        title="Home"
        description="Terra Cart: Hospitality by Choice, Inclusion by Design. India's inclusive hospitality ecosystem."
        canonical="/"
      />

      <section className="hero-surface pt-0">
        <div className="section-shell py-7 md:py-10">
          <div className="mx-auto max-w-[98rem] text-center text-[var(--tc-hero-text)]">
            <img
              src={images.heroLogo}
              alt="Terra Cart logo"
              loading="lazy"
              className="mx-auto mb-5 h-24 w-24 object-contain md:mb-6 md:h-32 md:w-32"
            />

            <h1 className="text-3xl font-normal leading-tight md:text-[3.35rem]">
              Welcome to Terra Cart - India&apos;s First Enterprise for Disabilty
            </h1>

            <p className="mt-7 text-2xl font-medium leading-relaxed md:text-[2.15rem]">
              Dignity cannot be donated. It must be designed.
            </p>

            <p className="mx-auto mt-6 max-w-[88rem] text-xl font-medium leading-relaxed md:text-[1.8rem]">
              Terra Cart is India&apos;s first entrepreneurial ecosystem built to transition Persons with Disabilities not as
              helpers, not as employees but as Owners. We are creating a new age of Indian Inclusivity built on
              strength, scalability, and global social innovation.
            </p>

            <p className="mt-6 text-2xl font-semibold leading-relaxed md:text-[1.75rem]">
              This is <strong>&quot;आत्मनिर्भर और विकसित भारत&quot;</strong>-built on inclusion.
            </p>

            <div className="mt-10">
              <Button to="/social-champions" variant="terracart" size="terracart" className="min-w-[18rem]">
                Join as Social Champion
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="home-panels">
        <Section
          id="mission"
          layout="stack"
          title="Our Mission"
          subtitle="Terra Cart: Hospitality by Choice, Inclusion by Design."
          description={[
            'India\'s premier platform where premium service meets social innovation.',
            'Not beneficiaries. Not charity. But entrepreneurs .',
            'Whether you are a corporate, investor, institution, or changemaker - you can help build India\'s most inclusive hospitality ecosystem.',
          ]}
          media={{ src: images.mission, alt: 'Terra Cart mission image', className: 'aspect-[16/9] object-contain bg-white object-center' }}
          textCardClassName={`${panelClassName} text-center md:px-12`}
          mediaCardClassName={panelClassName}
          titleClassName="text-center md:text-center !text-[clamp(2rem,3.6vw,3.35rem)]"
          subtitleClassName="text-center !text-[1.35rem] md:!text-[1.8rem] !leading-[1.45]"
          descriptionClassName="text-center text-[#5f3b2f] !text-[1.15rem] md:!text-[1.5rem] !leading-[1.82]"
          className="pt-14"
        />

        <Section
          id="vision"
          title="Our Vision"
          subtitle="From Old Charity to New Enterprise"
          description={[
            'At Terra Cart, we are redefining inclusion through four bold shifts:',
            'From gifting wheelchairs to the freedom of business ownership.',
            'From "helping the disabled" to empowering uniquely skilled professionals.',
            'From temporary aid to lasting enterprise.',
            'From silent inclusion to visible leadership.',
            'Inclusion must create independence, not dependency.',
          ]}
          media={{ src: images.vision, alt: 'Terra Cart vision image', className: 'object-contain bg-white object-center' }}
          textCardClassName={`${panelClassName} text-center md:px-9`}
          mediaCardClassName={visionMediaCardClass}
          titleClassName="text-center !text-[clamp(2.2rem,3.9vw,3.7rem)]"
          subtitleClassName="text-center !text-[1.45rem] md:!text-[1.95rem] !leading-[1.45]"
          descriptionClassName="text-[#5f3b2f] text-center !text-[1.2rem] md:!text-[1.55rem] !leading-[1.78]"
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
          textCardClassName={`${panelClassName} text-center md:px-10 md:flex md:flex-col md:justify-center`}
          mediaCardClassName={splitMediaCardClass}
          titleClassName="text-center !text-[clamp(2rem,3.8vw,3.5rem)]"
          descriptionClassName="text-center text-[#5f3b2f] !text-[1.1rem] md:!text-[1.4rem] !leading-[1.82]"
        />

        <section className="section-shell pt-0">
          <div className="grid gap-6 md:grid-cols-2">
            <article className={`overflow-hidden p-2 ${panelClassName}`}>
              <img
                src={images.logoOne}
                alt="Terra Cart supporting logo one"
                loading="lazy"
                className="h-[210px] w-full rounded-[0.9rem] bg-white object-contain p-2 md:h-[250px]"
              />
            </article>
            <article className={`overflow-hidden p-2 ${panelClassName}`}>
              <img
                src={images.logoTwo}
                alt="Terra Cart supporting logo two"
                loading="lazy"
                className="h-[210px] w-full rounded-[0.9rem] bg-white object-contain p-2 md:h-[250px]"
              />
            </article>
          </div>
        </section>

        <section className="section-shell pt-6">
          <div className="mx-auto max-w-5xl border-t border-[#d0ccc8] pt-10 text-center">
            <h2 className="section-title text-[var(--tc-title-soft)]">Food Menu</h2>
            <div className="mt-8">
              <Button href={menuPdfPath} external variant="download" size="download" className="min-w-[18.5rem]">
                Terra Cart Menu <span aria-hidden="true" className="text-lg">-&gt;</span>
              </Button>
            </div>
          </div>
        </section>

        <Section
          id="work-model"
          title="How Does Terra Cart Work and Scale with Purpose?"
          description={[
            'Terra Cart brings together Social Champions,',
            'A zero-rent business model, and a clear',
            'growth roadmap to build inclusive',
            'enterprises.',
          ]}
          media={{ src: images.model, alt: 'How Terra Cart works', className: 'object-contain bg-white object-center' }}
          reverse
          cta={{ label: 'Explore Terracart Model', to: '/impact', variant: 'terracart' }}
          textCardClassName={panelClassName}
          mediaCardClassName={splitMediaCardClass}
          descriptionClassName="text-[#4a2b1f] text-[1.25rem] leading-[1.8]"
        />

        <Section
          id="gov-support"
          title="Why Governments & Global Institutions Stand With Terra Cart"
          description={[
            'Terra Cart unites public infrastructure, disability rights, and enterprise into one scalable model of ownership. By enabling PwD-led businesses, strengthening RPwD Act compliance, and advancing the UN Sustainable Development Goals, we position India at the forefront of inclusive entrepreneurship worldwide',
          ]}
          media={{ src: images.government, alt: 'Government and global institutions support Terra Cart', className: 'object-contain bg-white object-center' }}
          reverse
          cta={{ label: 'Explore Our Impcat', to: '/impact', variant: 'terracart' }}
          textCardClassName={panelClassName}
          mediaCardClassName={splitMediaCardClass}
          descriptionClassName="text-[#4a2b1f] text-[1.18rem] leading-[1.85]"
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
          cta={{ label: 'View Kiosk Design', to: '/kiosk', variant: 'terracart' }}
          textCardClassName={panelClassName}
          mediaCardClassName={splitMediaCardClass}
          descriptionClassName="text-[#4a2b1f] text-[1.15rem] leading-[1.8]"
        />

        <Section
          id="brain-behind"
          title="Brain Behind Terra Cart"
          description={[
            '"Terra Cart: A global platform for inclusion and social empowerment for communities everywhere." - Dr Sonam Kapse',
          ]}
          media={{ src: images.founder, alt: 'Brain behind Terra Cart, Dr Sonam Kapse', className: 'object-contain bg-white object-center' }}
          reverse
          cta={{ label: 'Meet the Founder', to: '/founder', variant: 'terracart' }}
          textCardClassName={panelClassName}
          mediaCardClassName={splitMediaCardClass}
          descriptionClassName="text-[#4a2b1f] text-[1.2rem] leading-[1.8]"
        />
      </div>
    </>
  )
}
