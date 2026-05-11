import { cn } from "@/lib/utils"

type ImageEnter = "left" | "right" | "top" | "bottom" | "none"
type CaptionMotion = "left-center" | "right-center" | "left-right" | "right-left"

interface ScrollRevealProps {
  image: React.ReactNode
  caption?: React.ReactNode
  imageEnter?: ImageEnter
  captionMotion?: CaptionMotion
  sceneDuration?: string
  imageHeight?: string
  imageStickTop?: string
  captionDelay?: string
  captionMotionDistance?: string
  sceneExitSpace?: string
  captionMaxWidth?: string
  imageFit?: "cover" | "contain"
  imagePosition?: string
  imageStartScale?: string
  className?: string
}

export function ScrollReveal({
  image,
  caption,
  imageEnter = "bottom",
  captionMotion,
  sceneDuration,
  imageHeight,
  imageStickTop,
  captionDelay,
  captionMotionDistance,
  sceneExitSpace,
  captionMaxWidth,
  imageFit,
  imagePosition,
  imageStartScale,
  className,
}: ScrollRevealProps) {
  const cssVars: Record<string, string> = {}

  if (sceneDuration !== undefined) cssVars["--vss-scene-duration"] = sceneDuration
  if (imageHeight !== undefined) cssVars["--vss-image-height"] = imageHeight
  if (imageStickTop !== undefined) cssVars["--vss-image-stick-top"] = imageStickTop
  if (captionDelay !== undefined) cssVars["--vss-caption-delay"] = captionDelay
  if (captionMotionDistance !== undefined) cssVars["--vss-caption-motion-distance"] = captionMotionDistance
  if (sceneExitSpace !== undefined) cssVars["--vss-scene-exit-space"] = sceneExitSpace
  if (captionMaxWidth !== undefined) cssVars["--vss-caption-max-width"] = captionMaxWidth
  if (imageFit !== undefined) cssVars["--vss-image-fit"] = imageFit
  if (imagePosition !== undefined) cssVars["--vss-image-position"] = imagePosition
  if (imageStartScale !== undefined) cssVars["--vss-image-start-scale"] = imageStartScale

  return (
    <section
      className={cn(
        "vss",
        imageEnter && `vss--image-${imageEnter}`,
        captionMotion && `vss--caption-${captionMotion}`,
        className
      )}
      style={cssVars as unknown as React.CSSProperties}
    >
      <div className="vss__image">{image}</div>
      {caption && <div className="vss__caption">{caption}</div>}
    </section>
  )
}

export default ScrollReveal
