import LaunchSlide from '../components/LaunchSlide'
import SEO from '../components/SEO'

const launchHero = '/assets/launch-event-hero.jpg?v=3'
const launchSecond = '/assets/launch-event-2.jpg?v=3'
const launchThird = '/assets/launch-event-3.jpg?v=3'
const launchFourth = '/assets/launch-event-4.jpg?v=3'
const launchFifth = '/assets/launch-event-5.jpg?v=3'

export default function LaunchEvent() {
  return (
    <>
      <SEO
        title="Launch Event"
        description="Terra Cart launch event — details coming soon."
        canonical="/launch-event"
      />

      <div className="contact-page-surface nav-island-underlay">
        <section className="w-full space-y-10 px-3 pb-10 pt-10 sm:px-4 md:px-5">
          <LaunchSlide
            eyebrow="Nashik · Maharashtra"
            title="Launch Event"
            body="First Terracart Launch Event at Nashik Muncipal Corporation, Nashik"
            imageSrc={launchHero}
            imageAlt="Terra Cart launch event"
            heading="h1"
          />

          <LaunchSlide
            eyebrow="Nashik · Maharashtra"
            title="Felicitation Ceremony"
            body="Inauguration of Terra Cart in the presence of Passport Man of India, Founder of Terra Cart and the Secretary of MVP"
            imageSrc={launchSecond}
            imageAlt="Terra Cart launch event moment"
            reverse
          />

          <LaunchSlide
            eyebrow="Nashik · Maharashtra"
            title="Our Team"
            body="Founder and the team behind the success of Terra Cart"
            imageSrc={launchThird}
            imageAlt="Terra Cart launch event gathering"
          />

          <LaunchSlide
            eyebrow="Nashik · Maharashtra"
            title="First Social Champion"
            body="The first Terra Cart was franchised by Mr. Dnyaneshwar Mulay, the Passport Man of India."
            imageSrc={launchFourth}
            imageAlt="Terra Cart launch event highlight"
            reverse
          />

          <LaunchSlide
            eyebrow="Nashik · Maharashtra"
            title="Purpose behind Terra Cart"
            body="The Faces for whom the Terracart is always ready."
            imageSrc={launchFifth}
            imageAlt="Terra Cart launch event photo"
          />
        </section>
      </div>
    </>
  )
}
