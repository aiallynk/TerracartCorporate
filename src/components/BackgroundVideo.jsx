import { useEffect, useRef, useState } from 'react'

function captureVideoFrame(video) {
  const canvas = document.createElement('canvas')
  canvas.width = video.videoWidth || 1280
  canvas.height = video.videoHeight || 720
  const context = canvas.getContext('2d')
  if (!context) return null
  context.drawImage(video, 0, 0, canvas.width, canvas.height)
  return canvas.toDataURL('image/jpeg', 0.82)
}

function hasStoredPoster(storageKey, posterSrc) {
  if (typeof window === 'undefined') return false
  if (sessionStorage.getItem(storageKey) !== '1') return false
  return Boolean(sessionStorage.getItem(`${storageKey}-frame`) || posterSrc)
}

function readStoredPoster(storageKey, posterSrc) {
  if (typeof window === 'undefined') return posterSrc

  const savedFrame = sessionStorage.getItem(`${storageKey}-frame`)
  if (savedFrame) return savedFrame

  return posterSrc
}

export default function BackgroundVideo({
  videoSrc,
  posterSrc = '',
  storageKey,
  surfaceClassName,
  mediaClassName,
  ariaLabel,
}) {
  const videoRef = useRef(null)
  const frameKey = `${storageKey}-frame`
  const [showPoster, setShowPoster] = useState(() => hasStoredPoster(storageKey, posterSrc))
  const [posterUrl, setPosterUrl] = useState(() => readStoredPoster(storageKey, posterSrc))

  useEffect(() => {
    if (showPoster) return undefined

    const video = videoRef.current
    if (!video) return undefined

    let cancelled = false

    const persistPoster = () => {
      const frame = captureVideoFrame(video)
      if (frame) {
        try {
          sessionStorage.setItem(frameKey, frame)
        } catch {
          // Session storage may be full; still show the captured frame in-memory.
        }
        setPosterUrl(frame)
      } else if (posterSrc) {
        setPosterUrl(posterSrc)
      }
    }

    const finishWithPoster = () => {
      if (cancelled) return
      sessionStorage.setItem(storageKey, '1')
      video.pause()
      persistPoster()
      setShowPoster(true)
    }

    const tryPlay = async () => {
      try {
        video.muted = true
        video.defaultMuted = true
        video.playsInline = true
        video.controls = false
        await video.play()
      } catch {
        finishWithPoster()
      }
    }

    if (video.readyState >= 2) {
      tryPlay()
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true })
    }

    video.addEventListener('ended', finishWithPoster)

    return () => {
      cancelled = true
      video.removeEventListener('loadeddata', tryPlay)
      video.removeEventListener('ended', finishWithPoster)
    }
  }, [frameKey, posterSrc, showPoster, storageKey])

  return (
    <section className={surfaceClassName}>
      {showPoster ? (
        <img
          src={posterUrl || posterSrc}
          alt=""
          aria-hidden="true"
          className={mediaClassName}
          loading="eager"
          decoding="async"
        />
      ) : (
        <video
          ref={videoRef}
          className={mediaClassName}
          autoPlay
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          poster={posterSrc || undefined}
          aria-label={ariaLabel}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="tc-video-touch-blocker" aria-hidden="true" />
    </section>
  )
}
