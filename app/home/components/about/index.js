'use client'

import { useRef } from 'react'
import { Container, DisplayText, GridWrapper } from 'styles'
import {
  AboutSection,
  ContentWrapper,
  CustomGridWrapper,
  TopImageWrapper,
  BottomImageWrapper,
  BottomMarqueeWrapper,
} from './styles'
import { CustomButton, CustomImage, Label, Marquee, Parallax } from 'components'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const About = () => {
  const sectionTarget = useRef()
  const text = `Our small studio setting allows for a personalized, hands-on approach, ensuring each project receives the utmost attention and creative energy. This intimate scale enables us to achieve grand results.`

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom',
          toggleActions: 'play none none reset',
        },
      })

      tl.from(
        gsap.utils.toArray('.reveal-about-1'),
        {
          yPercent: 100,
          duration: 2,
          stagger: 0.2,
          ease: 'power3.inOut',
        },
        0,
      )
        .from(
          gsap.utils.toArray('.reveal-about-2'),
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.02,
            ease: 'power3.inOut',
          },
          0.75,
        )
        .from(
          gsap.utils.toArray('.reveal-about-3'),
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
          { scale: 1, duration: 1, ease: 'power3.inOut' },
          0.5,
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <AboutSection ref={sectionTarget}>
      <GridWrapper>
        <Parallax speed={-1.5} trigger={sectionTarget}>
          <TopImageWrapper>
            <CustomImage src="/boys.jpg" alt="The team" />
          </TopImageWrapper>
        </Parallax>
        <Parallax speed={-1.5} trigger={sectionTarget}>
          <BottomImageWrapper>
            <CustomImage src="/meeting.JPG" alt="The team" />
          </BottomImageWrapper>
        </Parallax>
      </GridWrapper>
      <Marquee repeat={3}>
        <div className="overflow">
          <div className="reveal-about-3">
            <DisplayText $m={'0 6vw 0 0'}>Size doesn{`'`}t matter</DisplayText>
          </div>
        </div>
      </Marquee>
      <Container>
        <Parallax speed={3.1} trigger={sectionTarget}>
          <CustomGridWrapper>
            <div className="overflow">
              <div className="reveal-about-1">
                <Label $reverse>Studio</Label>
              </div>
            </div>
            <ContentWrapper>
              <div>
                <div className="overflow">
                  <div className="reveal-about-1">Talent beats quantity</div>
                </div>
                <div className="overflow">
                  <div className="reveal-about-1">ten times out of ten</div>
                </div>
              </div>
              <div>
                {text.split(' ').map((element, index) => (
                  <div className="overflow" key={index}>
                    <div className="reveal-about-2">{element}&nbsp;</div>
                  </div>
                ))}
              </div>
              <div className="reveal-about-button">
                <CustomButton href="/about">Meet the team</CustomButton>
              </div>
            </ContentWrapper>
          </CustomGridWrapper>
        </Parallax>
      </Container>
      <BottomMarqueeWrapper>
        <Marquee repeat={3} inverted>
          <DisplayText $m={'0 6vw 0 0'}>Quality {`>`} Quantity</DisplayText>
        </Marquee>
      </BottomMarqueeWrapper>
    </AboutSection>
  )
}

export default About
