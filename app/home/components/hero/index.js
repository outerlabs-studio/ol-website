'use client'

import { useCallback, useRef } from 'react'
import { useIsTouchDevice } from 'hooks'
import { useIsomorphicLayoutEffect } from 'react-use'
import { CustomButton, CustomImage } from 'components'
import { Container, NormalText } from 'styles'
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
} from './styles'
import gsap from 'gsap'
import { animatePageOut } from 'lib'
import { usePathname, useRouter } from 'next/navigation'

const Hero = () => {
  const isTouchDevice = useIsTouchDevice()
  const movingContainerRef = useRef()
  const router = useRouter()
  const pathname = usePathname()
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.from(
        '.reveal-hero-1',
        {
          yPercent: 100,
          duration: 1.5,
          stagger: 0.015,
          ease: 'power3.inOut',
        },
        0,
      ).from(
        '.reveal-hero-2',
        {
          opacity: 0,
          duration: 1,
          ease: 'power3.inOut',
        },
        0.75,
      )
    })

    return () => ctx.revert()
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice) return

      const bounds = movingContainerRef.current.getBoundingClientRect()

      // Calculate the distance from the cursor to the center of the element
      const centerX = bounds.left + bounds.width / 2
      const distanceX = e.clientX - centerX

      // Determine the magnet effect threshold (e.g., 100 pixels)
      const magnetThreshold = 300

      let xPosition
      if (Math.abs(distanceX) < magnetThreshold) {
        // Apply a magnet effect: the closer to the center, the stronger the pull
        xPosition = distanceX
      } else {
        // If the cursor is outside the magnet threshold, don't apply the magnet effect
        xPosition = bounds.clientWidth
      }

      // Apply the animation with GSAP
      gsap.to(movingContainerRef.current, {
        x: xPosition,
        y:
          (e.clientY - bounds.top - movingContainerRef.current.clientHeight) /
          2,
        scale: 1.1,
        duration: 1,
        ease: 'expo.out',
      })
    },
    [isTouchDevice],
  )
  const handleMouseExit = useCallback(() => {
    gsap.to(movingContainerRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'expo.out',
    })
  }, [])

  return (
    <SectionWrapper>
      <Container>
        <ContentWrap>
          <CustomGridWrapper>
            <DescriptionWrapper className="reveal-hero-2">
              <NormalText>
                We’re design and develop award-winning digital products;
                specializing in websites, apps, and branding.
              </NormalText>
              <CustomButton $reverse href="/contact" className="reveal-hero-3">
                Get in touch
              </CustomButton>
            </DescriptionWrapper>
          </CustomGridWrapper>
          <TitleWrapper>
            <div>
              <LineOne>
                {`Creative`.split('').map((letter, index) => (
                  <div className="overflow" key={index}>
                    <div className="reveal-hero-1">{letter}</div>
                  </div>
                ))}
                {`design`.split('').map((letter, index) => (
                  <div className="overflow" key={index}>
                    <div className="reveal-hero-1">
                      {letter === 'd' ? '\u00A0d' : letter}
                    </div>
                  </div>
                ))}
              </LineOne>
              <LineTwo>
                <div>
                  {`and`.split('').map((letter, index) => (
                    <div className="overflow" key={index}>
                      <div className="reveal-hero-1 and">{letter}</div>
                    </div>
                  ))}
                </div>
                <div>
                  {`development`.split('').map((letter, index) => (
                    <div className="overflow" key={index}>
                      <div className="reveal-hero-1">{letter}</div>
                    </div>
                  ))}
                </div>
              </LineTwo>
            </div>
          </TitleWrapper>
        </ContentWrap>

        <ImageWrapper
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
            src={'/hero.webp'}
            alt={'Outer Labs Studio'}
            speed={1}
            blur={`LJGazlRP~WM{WVxZe.s.-Tt6I;WB`}
            priority={true}
          />
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default Hero
