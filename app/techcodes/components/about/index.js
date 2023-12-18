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

const About = () => {
  const sectionTarget = useRef()
  const text = `We partnered with TechCodes to promote inclusivity in STEM by making computer science education accessible and fun.`
  const para1 = `TechCodes, initially a high school club, has evolved into a significant force in inspiring the next generation of software engineers. As a student-run nonprofit, TechCodes is dedicated to making computer science education accessible and engaging to students worldwide. They have collaborated with leading companies like Google, Microsoft, and Amazon, emphasizing their commitment to quality and relevance in the tech industry​​.`
  const para2 = `Their approach to teaching is innovative and diverse, focusing on various programs designed to cater to different levels of interest and expertise in computer science. These include annual hackathons, after school workshops, summer programs, and high school events like speaker events and game jams. These initiatives are meticulously crafted to foster creativity, collaboration, and practical skills among students​​.`
  const para3 = `For a brand strategy that aligns with TechCodes' goals and ethos, it was crucial to encapsulate these core values and approaches. Our design emphasizes the organization's commitment to accessible and engaging computer science education, its collaborative and volunteer-driven nature, and its connection with industry leaders. We kept a youthful and dynamic aesthetic while maintaining a professional tone, resonating with both the student community and potential partners in the tech industry. This balance helped solidify TechCodes' position as a significant contributor to STEM education and a hub for future software engineers.`

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=10',
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
          '-=1.5',
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
          {text.split(' ').map((word, index) => (
            <div className="overflow" key={index}>
              <div className="reveal-about-1">{word}&nbsp;</div>
            </div>
          ))}
        </ContentWrapper>
        <GridWrapper>
          <ParagraphWrapper>
            {para1.split(' ').map((word, index) => (
              <div className="overflow" key={index}>
                <div className="reveal-about-2">{word}&nbsp;</div>
              </div>
            ))}
          </ParagraphWrapper>
          <ParagraphWrapper>
            {para2.split(' ').map((word, index) => (
              <div className="overflow" key={index}>
                <div className="reveal-about-2">{word}&nbsp;</div>
              </div>
            ))}
          </ParagraphWrapper>
          <ParagraphWrapper>
            {para3.split(' ').map((word, index) => (
              <div className="overflow" key={index}>
                <div className="reveal-about-2">{word}&nbsp;</div>
              </div>
            ))}
          </ParagraphWrapper>
          <ButtonWrapper className="reveal-about-3">
            <CustomButton
              to="https://techcodes.outerlabs.studio"
              target="_blank"
              $reverse
            >
              Live site
            </CustomButton>
          </ButtonWrapper>
        </GridWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default About
