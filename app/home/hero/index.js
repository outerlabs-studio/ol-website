'use client'

import { useRef } from 'react'
import { useIsTouchDevice } from 'hooks'
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
import { usePathname, useRouter } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import { animatePageOut } from 'lib'

const Hero = ({ data }) => {
  const isTouchDevice = useIsTouchDevice()
  const contextContainer = useRef()
  const movingContainerRef = useRef()
  const descriptionRef = useRef()
  const titleLineOneRefs = useRef([])
  const titleLineTwoAndRefs = useRef([])
  const titleLineTwoDevRefs = useRef([])
  const router = useRouter()
  const pathname = usePathname()

  const { contextSafe } = useGSAP({ scope: contextContainer })

  useGSAP(() => {
    let tl = gsap.timeline()

    tl.from(
      titleLineOneRefs.current,
      {
        yPercent: 100,
        duration: 1.5,
        stagger: 0.015,
        ease: 'power3.inOut',
      },
      0,
    ).from(
      descriptionRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut',
      },
      0.75,
    )
  })

  const handleMouseMove = contextSafe((e) => {
    if (isTouchDevice) return

    const bounds = movingContainerRef.current.getBoundingClientRect()

    // Calculate the distance from the cursor to the center of the element
    const centerX = bounds.left + bounds.width / 2
    const distanceX = e.clientX - centerX

    let xPosition
    xPosition = distanceX

    // Apply the animation with GSAP
    gsap.to(movingContainerRef.current, {
      x: xPosition,
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

  return (
    <SectionWrapper ref={contextContainer}>
      <Container>
        <ContentWrap>
          <CustomGridWrapper>
            <DescriptionWrapper ref={descriptionRef}>
              <NormalText>{data?.description}</NormalText>
              <CustomButton $reverse href="/contact">
                Get in touch
              </CustomButton>
            </DescriptionWrapper>
          </CustomGridWrapper>
          <TitleWrapper>
            <div>
              <LineOne>
                {`Creative`.split('').map((letter, index) => (
                  <div className="overflow" key={index} ref={(el) => (titleLineOneRefs.current[index] = el)}>
                    <div>{letter}</div>
                  </div>
                ))}
                {`design`.split('').map((letter, index) => (
                  <div className="overflow" key={index} ref={(el) => (titleLineOneRefs.current[index + 8] = el)}>
                    <div>{letter === 'd' ? ' d' : letter}</div>
                  </div>
                ))}
              </LineOne>
              <LineTwo>
                <div>
                  {`and`.split('').map((letter, index) => (
                    <div className="overflow" key={index} ref={(el) => (titleLineTwoAndRefs.current[index] = el)}>
                      <div>{letter}</div>
                    </div>
                  ))}
                </div>
                <div>
                  {`development`.split('').map((letter, index) => (
                    <div className="overflow" key={index} ref={(el) => (titleLineTwoDevRefs.current[index] = el)}>
                      <div>{letter}</div>
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
            <AboutButton ref={movingContainerRef}>Explore our process</AboutButton>
          </AboutButtonWrapper>
          <OverlayWrapper />
          <CustomImage
            src={data?.image.url}
            alt={data?.image.alternativeText}
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
