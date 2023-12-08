'use client'

import { useRef } from 'react'
import { Container } from 'styles'
import {
  BlobWrapper,
  HeroWrapper,
  LabelBlob,
  LabelWrapper,
  TextWrapper,
} from './styles'
import { useIsomorphicLayoutEffect, useWindowSize } from 'react-use'
import gsap from 'gsap'
import { Parallax } from 'components'

const labels = [
  'Apps',
  'Design',
  'Cloud infrastructure',
  'Branding',
  'Animation',
  'SEO',
  'Social media',
  'Websites',
  'UI',
  'UX',
  'Developing',
  'Messaging',
  'Motion',
  'Print',
  'Wireframing',
  'Discovery',
  'Ecommerce',
]

const Label = ({ className, text, heroRef }) => {
  const padding = `${Math.floor(Math.random() * 16) + 1}px`
  const rotation =
    (Math.random() * 2 + 3) *
    (Math.random() < 0.5 ? 1 : -1) *
    (Math.random() < 0.5 ? 1 : -1)

  return (
    <LabelWrapper
      className={className}
      style={{ padding, transform: `rotate(${rotation}deg)` }}
    >
      <Parallax trigger={heroRef} speed={-1} $togglemobile>
        <LabelBlob className={`inner-blob ${className}`}>{text}</LabelBlob>
      </Parallax>
    </LabelWrapper>
  )
}

const Hero = () => {
  const heroRef = useRef()
  const { width } = useWindowSize()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom-=10',
          toggleActions: 'play reset resume reset',
        },
      })

      tl.from(
        gsap.utils.toArray('.blob').sort(() => 0.5 - Math.random()),
        {
          duration: 1,
          scale: 0,
          stagger: 0.02,
          ease: 'elastic(2, 1)',
        },
        0,
      ).addLabel('loaded', 1.5)

      const radius = Math.min(width, window.outerHeight) / 3.5
      const centerX = width / 2
      const centerY = window.outerHeight / 2

      gsap.utils.toArray('.blob').forEach((blob, i) => {
        // for the first animation
        const angle = ((Math.PI * 2) / gsap.utils.toArray('.blob').length) * i
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        // for the second animation
        const extendedRadius = radius + 100
        const endX = centerX + Math.cos(angle) * extendedRadius
        const endY = centerY + Math.sin(angle) * extendedRadius

        tl.to(
          blob,
          {
            duration: 0.5,
            x: x - width / 2,
            y: y - window.outerHeight / 2,
            rotation: -30 + Math.random() * 60,
            ease: 'expo.out',
          },
          1.5,
        )
          .add('explosion', 2)
          .to(
            blob,
            {
              duration: 40,
              x: endX - width / 2,
              y: endY - window.outerHeight / 2,
              rotation: -30 + Math.random() * 100,
              onComplete: () => {
                tl.timeScale(70)
                tl.tweenTo('explosion').then(() => {
                  tl.timeScale(1)
                  tl.tweenTo('loaded').then(() => {
                    setTimeout(() => {
                      tl.play('loaded')
                    }, 500)
                  })
                })
              },
            },
            2,
          )
      })

      tl.from(
        gsap.utils.toArray('.reveal-hero-1'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.inOut',
        },
        1.5,
      )
    })

    return () => ctx.revert()
  }, [width])

  return (
    <HeroWrapper ref={heroRef}>
      <Container>
        <BlobWrapper className="grid-container">
          {labels.map((label, index) => (
            <Label
              key={index}
              className={`blob blob-${index + 1}`}
              text={label}
              heroRef={heroRef}
            />
          ))}
        </BlobWrapper>

        <TextWrapper>
          <div className="overflow">
            <div className="reveal-hero-1">We&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-hero-1">get&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-hero-1">shit&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-hero-1">done.</div>
          </div>
        </TextWrapper>
      </Container>
    </HeroWrapper>
  )
}

export default Hero
