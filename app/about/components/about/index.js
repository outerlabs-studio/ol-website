'use client'

import { useRef } from 'react'
import { Label } from 'components'
import { AboutWrapper, InfoWrapper, TextWrapper } from './styles'
import { Container, GridWrapper } from 'styles'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = ({ data }) => {
  const sectionTarget = useRef()

  useGSAP(() => {
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
        duration: 1,
        stagger: 0.01,
        ease: 'power3.inOut',
      },
      0,
    )
      .from(
        gsap.utils.toArray('.reveal-about-4'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.005,
          ease: 'power3.inOut',
        },
        0.5,
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
          duration: 1,
          stagger: 0.02,
          ease: 'power3.inOut',
        },
        0.75,
      )
  })

  return (
    <AboutWrapper ref={sectionTarget}>
      <Container>
        <GridWrapper>
          <div className="overflow">
            <div className="reveal-about-1">
              <Label $reverse>Our Brand</Label>
            </div>
          </div>
          <TextWrapper>
            {data?.large_description?.split(' ').map((element, index) => (
              <div key={index} className="overflow">
                <div className="reveal-about-1">{element}&nbsp;</div>
              </div>
            ))}
          </TextWrapper>
          {data?.short_description?.split('\n').map((paragraph, index) => (
            <TextWrapper key={index} className="max-width">
              {paragraph.split(' ').map((element, index) => (
                <div key={index} className="overflow">
                  <div className="reveal-about-4">{element}&nbsp;</div>
                </div>
              ))}
            </TextWrapper>
          ))}
          <InfoWrapper>
            <div className="col col-1">
              <div className="overflow">
                <div className="reveal-about-2">Founded</div>
              </div>
              <div className="overflow">
                <div className="reveal-about-3">2021</div>
              </div>
            </div>
            <div className="col col-2">
              <div className="overflow">
                <div className="reveal-about-2">Client profit</div>
              </div>
              <div className="overflow">
                <div className="reveal-about-3">6 figures</div>
              </div>
            </div>
            <div className="col col-3">
              <div className="overflow">
                <div className="reveal-about-2">Awards</div>
              </div>
              <div className="overflow">
                <div className="reveal-about-3">9 awards</div>
              </div>
            </div>
          </InfoWrapper>
        </GridWrapper>
      </Container>
    </AboutWrapper>
  )
}

export default About
