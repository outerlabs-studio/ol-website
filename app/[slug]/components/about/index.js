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
          <NormalText className="title">Client</NormalText>
          <NormalText>{data?.content?.client}</NormalText>
        </Item>
        <Item>
          <NormalText className="title">Date</NormalText>
          <NormalText>Astro Studios</NormalText>
        </Item>
        <Item>
          <NormalText className="title">Focus</NormalText>
          {data?.content?.focus?.map((focus, index) => (
            <NormalText key={index}>{focus.text}</NormalText>
          ))}
        </Item>
      </LeftCol>
      <RightCol>
        <NormalText
          dangerouslySetInnerHTML={{
            __html: data.content.description.replace(/\n/g, '<br />'),
          }}
        />
      </RightCol>
    </AboutWrapper>
  )
}

export default About
