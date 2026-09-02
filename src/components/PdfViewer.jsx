import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

export default function PdfViewer({ src, title = 'PDF document' }) {
  const containerRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    let cancelled = false

    const renderPdf = async () => {
      setLoading(true)
      setError(false)
      container.replaceChildren()

      try {
        const pdf = await pdfjsLib.getDocument(src).promise

        for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
          if (cancelled) return

          const page = await pdf.getPage(pageNumber)
          const baseViewport = page.getViewport({ scale: 1 })
          const containerWidth = container.clientWidth || window.innerWidth
          const scale = containerWidth / baseViewport.width
          const viewport = page.getViewport({ scale })

          const canvas = document.createElement('canvas')
          canvas.width = viewport.width
          canvas.height = viewport.height
          canvas.className = 'terra-cart-app-pdf-page'
          canvas.setAttribute('role', 'img')
          canvas.setAttribute('aria-label', `${title} page ${pageNumber}`)

          const context = canvas.getContext('2d')
          if (!context) throw new Error('Canvas unavailable')

          await page.render({ canvasContext: context, viewport, canvas }).promise
          container.appendChild(canvas)
        }

        if (!cancelled) setLoading(false)
      } catch {
        if (!cancelled) {
          setError(true)
          setLoading(false)
        }
      }
    }

    renderPdf()

    const onResize = () => {
      renderPdf()
    }

    window.addEventListener('resize', onResize)

    return () => {
      cancelled = true
      window.removeEventListener('resize', onResize)
    }
  }, [src, title])

  if (error) {
    return (
      <div className="terra-cart-app-pdf-fallback">
        <p>Unable to display this PDF in your browser.</p>
        <a href={src} target="_blank" rel="noopener noreferrer" className="terra-cart-app-pdf-open-link">
          Open PDF
        </a>
      </div>
    )
  }

  return (
    <div className="terra-cart-app-pdf-shell">
      {loading ? <p className="terra-cart-app-pdf-loading">Loading PDF…</p> : null}
      <div ref={containerRef} className="terra-cart-app-pdf-pages" aria-busy={loading} />
    </div>
  )
}
