import GlassCard from './GlassCard'
import PopHover from './PopHover'

export const launchSlideShell =
  'mx-auto flex max-w-[120rem] flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-6 xl:gap-8'

export const launchPlaqueClass =
  'launch-event-plaque !rounded-[1.1rem] flex w-full flex-col justify-center text-center md:px-9 md:py-10 lg:w-[22rem] lg:max-w-[22rem] lg:shrink-0 xl:w-[24rem] xl:max-w-[24rem]'

export const launchImageFrame =
  'min-w-0 w-full flex-1 overflow-hidden rounded-[1.1rem] border border-black bg-black p-2 shadow-[0_8px_22px_rgba(0,0,0,0.35)]'

export const launchImageClass = 'aspect-[16/9] w-full rounded-2xl bg-black object-cover object-center'

export default function LaunchSlide({
  eyebrow,
  title,
  body,
  imageSrc,
  imageAlt,
  heading: Heading = 'h2',
  reverse = false,
  imageClassName = launchImageClass,
  imageFrameClassName = launchImageFrame,
  shellClassName = launchSlideShell,
  plaqueClassName = launchPlaqueClass,
}) {
  const textBlock = (
    <GlassCard className={plaqueClassName}>
      <p className="launch-event-plaque-eyebrow">{eyebrow}</p>
      <Heading className="launch-event-plaque-title">{title}</Heading>
      <div className="launch-event-plaque-rule" aria-hidden="true" />
      <p className="launch-event-plaque-body mt-4">{body}</p>
    </GlassCard>
  )

  const imageBlock = (
    <PopHover as="article" className={imageFrameClassName}>
      <img src={imageSrc} alt={imageAlt} loading="lazy" className={imageClassName} />
    </PopHover>
  )

  return (
    <div className={shellClassName}>
      {reverse ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  )
}
