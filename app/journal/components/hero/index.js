'use client'

import { useRef } from 'react'
import { NormalText } from 'styles'
import {
  ContentWrap,
  DescriptionWrapper,
  LineOne,
  LineTwo,
  HeroSection,
  TitleWrapper,
  CustomGridWrapper,
  CustomContainer,
} from './styles'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = ({ data }) => {
  const contextContainer = useRef()

  useGSAP(() => {
    let tl = gsap.timeline()

    tl.set(contextContainer.current.firstChild, { autoAlpha: 1 })
      .from('.reveal-hero-1', {
        yPercent: 100,
        duration: 1.5,
        stagger: 0.015,
        ease: 'power3.inOut',
      })
      .from(
        '.reveal-hero-2',
        {
          opacity: 0,
          duration: 1,
          ease: 'power3.inOut',
        },
        0.75,
      )
      .from(
        '.hero-image',
        {
          yPercent: 20,
          duration: 1,
          ease: 'power3.out',
        },
        0.5,
      )
  })

  const renderTextWithReveal = (text, className = '') =>
    text.split('').map((letter, index) => (
      <div className="overflow" key={index}>
        <div className={`reveal-hero-1 enabled ${className}`}>
          {letter === 'd' && index === 0 ? '\u00A0d' : letter}
        </div>
      </div>
    ))

  return (
    <HeroSection ref={contextContainer}>
      <CustomContainer>
        <ContentWrap>
          <CustomGridWrapper>
            <DescriptionWrapper className="reveal-hero-2">
              <NormalText className="enabled">
                The space where we share our opinons and research about design,
                code, and creative culture.
              </NormalText>
            </DescriptionWrapper>
          </CustomGridWrapper>
          <TitleWrapper>
            <LineOne>{renderTextWithReveal('Stories')}</LineOne>
            <LineTwo>
              <div>{renderTextWithReveal('&', 'and')}</div>
              <div>{renderTextWithReveal('Insights')}</div>
            </LineTwo>
          </TitleWrapper>
        </ContentWrap>
      </CustomContainer>
    </HeroSection>
  )
}

export default Hero
