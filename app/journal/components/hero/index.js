'use client'

import { useRef } from 'react'
import { useIsTouchDevice } from 'hooks'
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
import { animatePageOut } from 'lib'
import { usePathname, useRouter } from 'next/navigation'
import { useGSAP } from '@gsap/react'

const Hero = ({ data }) => {
  const isTouchDevice = useIsTouchDevice()
  const contextContainer = useRef()
  const movingContainerRef = useRef()
  const router = useRouter()
  const pathname = usePathname()

  const { contextSafe } = useGSAP({ scope: contextContainer })

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

  const handleMouseMove = contextSafe((e) => {
    if (isTouchDevice) return

    const bounds = movingContainerRef.current.getBoundingClientRect()
    const centerX = bounds.left + bounds.width / 2
    const distanceX = e.clientX - centerX

    gsap.to(movingContainerRef.current, {
      x: distanceX,
      y: (e.clientY - bounds.top - movingContainerRef.current.clientHeight) / 2,
      scale: 1.1,
      duration: 1,
      ease: 'expo.out',
    })
  })

  const handleMouseExit = contextSafe(() => {
    gsap.to(movingContainerRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'expo.out',
    })
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
                We’re design and develop award-winning digital products;
                specializing in websites, apps, and branding.
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
