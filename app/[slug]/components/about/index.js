'use client'

import { useRef } from 'react'
import { Container, GridWrapper, NormalText } from 'styles'
import { Item, LeftCol, RightCol, AboutWrapper } from './styles'
import { CustomButton } from 'components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const About = ({ data }) => {
  const sectionTarget = useRef()

  useGSAP(() => {
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
  }, [])

  return (
    <AboutWrapper ref={sectionTarget}>
      <LeftCol>
        <Item>
          <div className="overflow">
            <NormalText className="title reveal-about-1">Client</NormalText>
          </div>

          <div className="overflow">
            <NormalText>{data?.content?.client}</NormalText>
          </div>
        </Item>
        <Item>
          <div className="overflow">
            <NormalText className="title reveal-about-1">Date</NormalText>
          </div>

          <div className="overflow">
            <NormalText>Astro Studios</NormalText>
          </div>
        </Item>
        <Item>
          <div className="overflow">
            <NormalText className="title reveal-about-1">Focus</NormalText>
          </div>

          {data?.content?.focus?.map((focus, index) => (
            <div className="overflow">
              <NormalText key={index}>{focus.text}</NormalText>
            </div>
          ))}
        </Item>
      </LeftCol>
      <RightCol>
        <NormalText
          dangerouslySetInnerHTML={{
            __html: data?.content?.description?.replace(/\n/g, '<br />'),
          }}
        />
      </RightCol>
    </AboutWrapper>
  )
}

export default About
