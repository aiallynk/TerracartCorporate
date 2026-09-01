import { Helmet } from 'react-helmet-async'

const baseTitle = "TerraCart | India's First Inclusive Kiosk"
const siteUrl = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')

function toAbsoluteUrl(path) {
  if (!path) return siteUrl || path
  if (/^https?:\/\//i.test(path)) return path
  if (!siteUrl) return path
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export default function SEO({ title, description, image = '/logo512.png', canonical = '/' }) {
  const finalTitle = title ? `${title} | TerraCart` : baseTitle
  const finalDescription =
    description ||
    'TerraCart builds inclusive kiosk entrepreneurship models for dignified and scalable livelihoods.'
  const absoluteImage = toAbsoluteUrl(image)
  const absoluteCanonical = toAbsoluteUrl(canonical)

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      {siteUrl ? <meta property="og:url" content={absoluteCanonical} /> : null}
      <meta property="og:image" content={absoluteImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={absoluteImage} />
      <link rel="canonical" href={absoluteCanonical} />
    </Helmet>
  )
}
