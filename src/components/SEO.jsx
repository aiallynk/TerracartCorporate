import { Helmet } from 'react-helmet-async'

const baseTitle = "TerraCart | India's First Inclusive Kiosk"

export default function SEO({ title, description, image = '/logo512.png', canonical = '/' }) {
  const finalTitle = title ? `${title} | TerraCart` : baseTitle
  const finalDescription =
    description ||
    'TerraCart builds inclusive kiosk entrepreneurship models for dignified and scalable livelihoods.'

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}
