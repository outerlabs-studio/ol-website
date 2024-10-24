'use client'

import { CustomImage } from 'components'
import { Container } from 'styles'
import { ImageWrapper, SectionWrapper, TitleWrapper } from './styles'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = ({ data }) => {
  useGSAP(() => {
    let tl = gsap.timeline()

    tl.from('.reveal-hero-1', {
      yPercent: 100,
      duration: 1,
      stagger: 0.02,
      delay: 0.3,
      ease: 'power3.inOut',
    })
  })

  return (
    <SectionWrapper>
      <Container>
        <TitleWrapper>
          {data?.name?.split('').map((letter, index) => (
            <div className="overflow" key={index}>
              <div className="reveal-hero-1">{letter}</div>
            </div>
          ))}
        </TitleWrapper>
        <ImageWrapper>
          <CustomImage
            src={data?.hero_image?.url}
            alt={data?.hero_image?.alternativeText}
            speed={1}
          />
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default Hero
