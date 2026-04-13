import SEO from '../components/SEO'
import GlassCard from '../components/GlassCard'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Terra Cart privacy policy detailing collection, usage, sharing, security, and your rights."
        canonical="/privacy-policy"
      />

      <section className="section-shell pt-28">
        <GlassCard className="!rounded-[1.1rem] !border !border-[#d5d1cd] !bg-white !backdrop-blur-0 !shadow-[0_8px_22px_rgba(92,76,64,0.12)] p-6 md:p-10">
          <h1 className="section-title text-[var(--tc-title-soft)]">Privacy Policy</h1>
          <p className="mt-4 text-base font-medium text-[var(--tc-ink)]">Effective Date: 01-Jun-2025</p>

          <div className="mt-7 space-y-5 text-[1.04rem] leading-[1.8] text-[#5d473b]">
            <p>
              Terra Cart (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) respects your privacy and is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website terracart.in, including any other media form, media channel, mobile website,
              or mobile application related or connected thereto (collectively, the &quot;Site&quot;). Please read this Privacy
              Policy carefully.
            </p>

            <h2 className="pt-2 text-2xl font-semibold text-[var(--tc-ink)]">Information We Collect</h2>
            <p>We may collect personal information such as:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Name and Contact Information (email, phone number, address).</li>
              <li>Educational and Professional Background.</li>
              <li>Payment Information (if applicable).</li>
              <li>User-generated content or feedback.</li>
            </ul>

            <h2 className="pt-2 text-2xl font-semibold text-[var(--tc-ink)]">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide and manage services.</li>
              <li>Improve our products, services, and user experience.</li>
              <li>Communicate with you regarding updates, events, and opportunities.</li>
              <li>Facilitate transactions and process payments.</li>
              <li>Ensure security and prevent fraud.</li>
            </ul>

            <h2 className="pt-2 text-2xl font-semibold text-[var(--tc-ink)]">Information Sharing</h2>
            <p>We may share your information:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                With trusted third-party service providers who assist us in operating our Site, conducting our business,
                or servicing users.
              </li>
              <li>To comply with applicable laws, regulations, or legal processes.</li>
              <li>To protect against fraud, security breaches, or legal claims.</li>
            </ul>

            <h2 className="pt-2 text-2xl font-semibold text-[var(--tc-ink)]">Data Security</h2>
            <p>
              We implement industry-standard security measures designed to protect your information from unauthorized
              access, disclosure, alteration, or destruction.
            </p>

            <h2 className="pt-2 text-2xl font-semibold text-[var(--tc-ink)]">Cookies and Tracking Technologies</h2>
            <p>
              Our Site may use cookies and similar technologies to enhance your browsing experience and for analytical
              purposes. You may disable cookies through your browser settings, though this may impact functionality.
            </p>

            <h2 className="pt-2 text-2xl font-semibold text-[var(--tc-ink)]">Third-Party Websites</h2>
            <p>
              Our Site may contain links to third-party websites. We are not responsible for the privacy practices of
              these external sites.
            </p>

            <h2 className="pt-2 text-2xl font-semibold text-[var(--tc-ink)]">Your Rights</h2>
            <p>You may access, correct, or delete your personal information by contacting us at operations@aially.in.</p>

            <h2 className="pt-2 text-2xl font-semibold text-[var(--tc-ink)]">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated
              revision date.
            </p>

            <h2 className="pt-2 text-2xl font-semibold text-[var(--tc-ink)]">Contact Us</h2>
            <p>If you have questions or concerns regarding this Privacy Policy, please contact us:</p>
            <p className="leading-[1.9]">
              Terra Cart (HQ)
              <br />
              2nd floor, C Square Complex.
              <br />
              OPP. Akash Petrol Pump, Dindori - Mhasrul Rd, Nashik, Maharashtra, India -422004
              <br />
              operations@aially.in
            </p>
          </div>
        </GlassCard>
      </section>
    </>
  )
}
