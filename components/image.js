'use client'

import Image from 'next/image'
import styled from 'styled-components'
import { useIsomorphicLayoutEffect, useWindowSize } from 'react-use'
import gsap from 'gsap'
import { useRef } from 'react'
import { blurHashToDataURL } from 'lib'

const ParallaxWrapper = styled.div`
  position: absolute;
  height: inherit;
  width: inherit;
  min-height: inherit;
  overflow: hidden;
  border-radius: inherit;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: inherit;
    object-fit: cover;
    overflow: hidden;
  }
`

const CustomImage = ({
  src,
  alt,
  sizes,
  blur,
  speed = 1,
  priority = false,
}) => {
  const target = useRef()

  const { height: windowWidth } = useWindowSize()
  const y = windowWidth * speed * 0.1

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia()
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: target.current,
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
        },
      })

      tl.fromTo(target.current, { y: -y }, { y: y, ease: 'none' })

      mm.add(
        {
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { reduceMotion } = context.conditions

          if (reduceMotion) {
            timeline?.current?.from(target.current, { y: 0 })
            timeline?.current?.kill()
          }
        },
      )
    })

    return () => ctx.revert()
  }, [windowWidth, target])

  return (
    <ParallaxWrapper>
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        placeholder={blur ? 'blur' : 'empty'}
        blurDataURL={blur ? blurHashToDataURL(blur) : null}
        fill
        style={{ transform: 'scale(1.2)' }}
        quality={100}
        ref={target}
        priority={priority}
      />
    </ParallaxWrapper>
  )
}

export default CustomImage
