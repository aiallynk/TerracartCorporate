import SEO from '../components/SEO'

const appPdfPath = '/PDFs/TerraCartApp.pdf'

export default function TerraCartApp() {
  return (
    <>
      <SEO
        title="TerraCart App"
        description="Explore the TerraCart App overview and features."
        canonical="/terra-cart-app"
      />

      <div className="nav-island-underlay w-full bg-white">
        <iframe
          src={appPdfPath}
          title="TerraCart App PDF"
          className="terra-cart-app-pdf"
          sandbox="allow-same-origin allow-scripts"
        />
      </div>
    </>
  )
}
