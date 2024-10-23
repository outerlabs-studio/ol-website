'use client'

import { useRef } from 'react'
import { Container, DisplayText, GridWrapper } from 'styles'
import {
  AboutSection,
  ContentWrapper,
  CustomGridWrapper,
  TopImageWrapper,
  BottomImageWrapper,
  ParagraphWrapper,
} from './styles'
import { CustomButton, CustomImage, Label, Marquee, Parallax } from 'components'
import { useWindowSize } from 'react-use'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Studio = ({ data }) => {
  const sectionTarget = useRef()
  const { width } = useWindowSize()

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionTarget.current,
        start: 'top bottom',
        toggleActions: 'play none none reset',
      },
    })

    tl.from('.reveal-about-1', {
      yPercent: 100,
      duration: 2,
      stagger: 0.2,
      ease: 'power3.inOut',
    })
      .from(
        '.reveal-about-2',
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.02,
          ease: 'power3.inOut',
        },
        0.75,
      )
      .from(
        '.reveal-about-3',
        {
          yPercent: 100,
          duration: 2,
          stagger: 0.2,
          ease: 'power3.inOut',
        },
        0,
      )
      .fromTo(
        '.reveal-about-button',
        {
          scale: 0,
          transformOrigin: 'left center',
        },
        {
          scale: 1,
          duration: 1,
          ease: 'power3.inOut',
        },
        0.5,
      )

    if (width > 600) {
      gsap.to('.parallax-content', {
        top: '74%',
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top center',
          scrub: true,
        },
      })
    }
  }, [width])

  return (
    <AboutSection ref={sectionTarget}>
      <Marquee repeat={3}>
        <div className="overflow">
          <div className="reveal-about-3">
            <DisplayText $m={'0 6vw 0 0'}>Size doesn{`'`}t matter</DisplayText>
          </div>
        </div>
      </Marquee>
      <GridWrapper className="resize">
        <Parallax speed={-2} trigger={sectionTarget} $toggleMobile>
          <TopImageWrapper>
            <CustomImage
              src={data?.top_image.url}
              alt={data?.top_image.alternativeText}
              speed={1.5}
              blur={`L8C5;hRi02OG00xu~B$216E2=Xxu`}
            />
          </TopImageWrapper>
        </Parallax>
        <Parallax speed={-2} trigger={sectionTarget} $toggleMobile>
          <BottomImageWrapper>
            <CustomImage
              src={data?.bottom_image.url}
              alt={data?.bottom_image.alternativeText}
              speed={1.5}
              blur={`L14_qW#8~oD%g%IqNGMx00O?R5xG`}
            />
          </BottomImageWrapper>
        </Parallax>
      </GridWrapper>
      <Container>
        <CustomGridWrapper className="parallax-content">
          <div className="overflow">
            <div className="reveal-about-1">
              <Label $reverse>Studio</Label>
            </div>
          </div>
          <ContentWrapper>
            <div className="title-row">
              {data?.title.split('\n').map((line, index) => (
                <div className="overflow" key={index}>
                  <div className="reveal-about-1">{line}</div>
                </div>
              ))}
            </div>
            <ParagraphWrapper>
              {data?.description.split(' ').map((element, index) => (
                <div className="overflow" key={index}>
                  <div className="reveal-about-2">{element}&nbsp;</div>
                </div>
              ))}
            </ParagraphWrapper>
            <div className="reveal-about-button">
              <CustomButton href="/about">Meet the team</CustomButton>
            </div>
          </ContentWrapper>
        </CustomGridWrapper>
      </Container>
    </AboutSection>
  )
}

export default Studio
