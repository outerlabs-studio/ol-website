'use client'

import { useRef } from 'react'
import { Container, GridWrapper } from 'styles'
import {
  ButtonWrapper,
  ContentWrapper,
  ParagraphWrapper,
  SectionWrapper,
} from './styles'
import { CustomButton } from 'components'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const About = ({ subtitle, paragraphs, live }) => {
  const sectionTarget = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top-=10% bottom',
          toggleActions: 'play none none reset',
        },
      })

      tl.from(
        gsap.utils.toArray('.reveal-about-1'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.02,
          ease: 'power3.inOut',
        },
        0,
      )
        .from(
          gsap.utils.toArray('.reveal-about-2'),
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.005,
            ease: 'power3.inOut',
          },
          '-=1',
        )
        .from(
          '.reveal-about-3',
          {
            scale: 0,
            duration: 0.5,
            ease: 'power3.inOut',
          },
          1,
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <SectionWrapper ref={sectionTarget}>
      <Container>
        <ContentWrapper>
          {subtitle.split(' ').map((word, index) => (
            <div className="overflow" key={index}>
              <div className="reveal-about-1">{word}&nbsp;</div>
            </div>
          ))}
        </ContentWrapper>
        <GridWrapper>
          {paragraphs.map((paragraph, index) => (
            <ParagraphWrapper index={index}>
              {paragraph.split(' ').map((word, i) => (
                <div className="overflow" key={i}>
                  <div className="reveal-about-2">{word}&nbsp;</div>
                </div>
              ))}
            </ParagraphWrapper>
          ))}
          {live && (
            <ButtonWrapper className="reveal-about-3">
              <CustomButton to={live} target="_blank" $reverse>
                Live site
              </CustomButton>
            </ButtonWrapper>
          )}
        </GridWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default About
