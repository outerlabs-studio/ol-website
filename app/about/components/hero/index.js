'use client'

import { useRef } from 'react'
import { Container } from 'styles'
import { HeroWrapper, TextWrapper } from './styles'
import { useWindowSize } from 'react-use'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import DVDScreen from './dvd'

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

const Hero = () => {
  const heroRef = useRef()
  const { width } = useWindowSize()

  useGSAP(() => {
    let tl = gsap.timeline({ delay: 1 })

    tl.from(gsap.utils.toArray('.reveal-hero-1'), {
      yPercent: 100,
      duration: 0.5,
      stagger: 0.02,
      ease: 'back.out',
    })
  })

  return (
    <HeroWrapper ref={heroRef}>
      <Container>
        <DVDScreen />
        {/* <BlobWrapper className="grid-container">
          {labels.map((label, index) => (
            <Label
              key={index}
              className={`blob blob-${index + 1}`}
              text={label}
              heroRef={heroRef}
            />
          ))}
        </BlobWrapper> */}

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
