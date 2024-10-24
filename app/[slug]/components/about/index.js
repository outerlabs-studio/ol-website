'use client'

import { useRef } from 'react'
import {  NormalText } from 'styles'
import { Item, LeftCol, RightCol, AboutWrapper } from './styles'
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
        stagger: 0.02,
        ease: 'power3.inOut',
      },
      0,
    ).from(
      gsap.utils.toArray('.reveal-about-2'),
      {
        yPercent: 100,
        duration: 1,
        stagger: 0.001,
        ease: 'power3.inOut',
      },
      '-=1',
    )
  }, [])

  return (
    <AboutWrapper ref={sectionTarget}>
      <LeftCol>
        <Item>
          <div className="overflow">
            <NormalText className="title reveal-about-1">Client</NormalText>
          </div>

          <div className="overflow">
            <NormalText className="reveal-about-1">
              {data?.content?.client}
            </NormalText>
          </div>
        </Item>
        <Item>
          <div className="overflow">
            <NormalText className="title reveal-about-1">Date</NormalText>
          </div>

          <div className="overflow">
            <NormalText className="reveal-about-1">Astro Studios</NormalText>
          </div>
        </Item>
        <Item>
          <div className="overflow">
            <NormalText className="title reveal-about-1">Focus</NormalText>
          </div>

          {data?.content?.focus?.map((focus, index) => (
            <div className="overflow">
              <NormalText className="reveal-about-1" key={index}>
                {focus.text}
              </NormalText>
            </div>
          ))}
        </Item>
      </LeftCol>
      <RightCol>
        {data?.content?.description?.split('\n').map((paragraph, index) => (
          <div>
            {paragraph.split(' ').map((element, index) => (
              <div key={index} className="overflow">
                <NormalText className="reveal-about-2">
                  {element}&nbsp;
                </NormalText>
              </div>
            ))}
          </div>
        ))}
      </RightCol>
    </AboutWrapper>
  )
}

export default About
