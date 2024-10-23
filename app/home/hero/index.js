'use client'

import { useRef } from 'react'
import { useIsTouchDevice } from 'hooks'
import { CustomButton, CustomImage } from 'components'
import { NormalText } from 'styles'
import {
  ContentWrap,
  DescriptionWrapper,
  ImageWrapper,
  LineOne,
  LineTwo,
  SectionWrapper,
  TitleWrapper,
  CustomGridWrapper,
  AboutButton,
  AboutButtonWrapper,
  OverlayWrapper,
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
        <div className={`reveal-hero-1 ${className}`}>
          {letter === 'd' ? '\u00A0d' : letter}
        </div>
      </div>
    ))

  return (
    <SectionWrapper ref={contextContainer}>
      <CustomContainer>
        <ContentWrap>
          <CustomGridWrapper>
            <DescriptionWrapper className="reveal-hero-2">
              <NormalText>{data?.description}</NormalText>
              <CustomButton $reverse href="/contact" className="reveal-hero-3">
                Get in touch
              </CustomButton>
            </DescriptionWrapper>
          </CustomGridWrapper>
          <TitleWrapper>
              <LineOne>
                {renderTextWithReveal('Creative')}
                {renderTextWithReveal('design')}
              </LineOne>
              <LineTwo>
                <div>{renderTextWithReveal('and', 'and')}</div>
                <div>{renderTextWithReveal('development')}</div>
              </LineTwo>
          </TitleWrapper>
        </ContentWrap>

        <ImageWrapper
          className="hero-image"
          href="/about"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseExit}
          onClick={(e) => {
            e.preventDefault()
            animatePageOut('/about', router, pathname)
          }}
        >
          <AboutButtonWrapper>
            <AboutButton ref={movingContainerRef}>
              Explore our process
            </AboutButton>
          </AboutButtonWrapper>
          <OverlayWrapper />
          <CustomImage
            src={data?.image.url}
            alt={data?.image.alternativeText}
            speed={1}
            blur="LJGazlRP~WM{WVxZe.s.-Tt6I;WB"
            priority
          />
        </ImageWrapper>
      </CustomContainer>
    </SectionWrapper>
  )
}

export default Hero
