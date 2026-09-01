import { motion } from 'framer-motion'
import Button from './Button'
import GlassCard from './GlassCard'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
  },
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  media,
  reverse = false,
  layout = 'split',
  cta,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  descriptionClassName = '',
  textCardClassName = '',
  mediaCardClassName = '',
  compact = false,
  matchMediaHeight = false,
}) {
  const textContent = Array.isArray(description) ? description : [description]
  const isStack = layout === 'stack'
  const stretchTextCard = !isStack && !compact
  const stretchMediaCard = !isStack && (!compact || matchMediaHeight)
  const textCardShape = `${textCardClassName} ${stretchTextCard ? 'h-full' : ''}`
  const mediaCardShape = `overflow-hidden p-2 ${mediaCardClassName} ${
    stretchMediaCard
      ? matchMediaHeight
        ? 'relative min-h-[15rem] md:min-h-0 md:h-full'
        : 'flex h-full'
      : ''
  }`
  const mediaImageClass = media?.className || (isStack ? 'aspect-[16/10] object-cover' : 'h-full object-cover')
  const mediaImageLayoutClass =
    matchMediaHeight && !isStack
      ? 'h-auto w-full md:absolute md:inset-0 md:h-full md:w-full'
      : 'h-full w-full'
  const gridAlignClass = compact && !matchMediaHeight ? 'items-start' : 'items-stretch'

  return (
    <section id={id} className={`section-shell ${className}`}>
      <div
        className={
          isStack
            ? 'space-y-7'
            : `grid gap-8 md:grid-cols-2 md:gap-10 ${gridAlignClass} ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`
        }
      >
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={stretchTextCard ? 'h-full' : ''}
        >
          <GlassCard className={textCardShape}>
            <h2 className={`section-title ${titleClassName}`}>{title}</h2>
            {subtitle ? <p className={`mt-3 text-lg font-medium text-[var(--tc-accent-strong)] ${subtitleClassName}`}>{subtitle}</p> : null}
            <div className="mt-4 space-y-3">
              {textContent.filter(Boolean).map((item) => (
                <p className={`text-base leading-relaxed text-[var(--tc-muted)] ${descriptionClassName}`} key={item.slice(0, 30)}>
                  {item}
                </p>
              ))}
            </div>
            {cta ? (
              <div className="mt-6">
                <Button
                  to={cta.to}
                  href={cta.href}
                  external={cta.external}
                  variant={cta.variant || 'primary'}
                  size={cta.size || 'md'}
                  className={cta.className || ''}
                >
                  {cta.label}
                </Button>
                {cta.text ? <p className="section-title mt-4 !text-[#f7efe3]">{cta.text}</p> : null}
              </div>
            ) : null}
          </GlassCard>
        </motion.div>

        {media ? (
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.08 }}
            className={stretchMediaCard ? (matchMediaHeight ? 'md:h-full md:min-h-0' : 'h-full') : ''}
          >
            <GlassCard className={mediaCardShape} hover={false}>
              {media?.src ? (
                <img
                  src={media.src}
                  alt={media.alt || title}
                  loading="lazy"
                  className={`${mediaImageLayoutClass} rounded-2xl ${mediaImageClass}`}
                />
              ) : (
                media
              )}
            </GlassCard>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
