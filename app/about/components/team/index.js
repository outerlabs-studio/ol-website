'use client'

import {
  breakpoints,
  Container,
  DisplayText,
  MediumText,
} from 'styles'
import { CustomImage, Label, Marquee } from 'components'
import {
  TeamSection,
  ImageWrapper,
  MarqueeWrapper,
  TeamMemberItem,
  LabelWrapper,
} from './styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Member = ({ image, name, pos, num }) => {
  return (
    <TeamMemberItem className="team-wrapper">
      <Container>
        <ImageWrapper className={`image-wrapper image-wrapper-${num}`}>
          <CustomImage
            speed={0}
            src={image?.url}
            alt={image?.alternativeText}
            sizes={`(min-width: 1020px) 30vw, (min-width: 620px) 52.11vw, calc(100vw - 32px)`}
          />
        </ImageWrapper>
      </Container>
      <MarqueeWrapper className="top">
        <div className={`marquee-top marquee-top-${num}`}>
          <Marquee repeat={2} duration={4}>
            <DisplayText $m={'0 0 0 70vw'}>{name.split(' ')[1]}</DisplayText>
          </Marquee>
        </div>
      </MarqueeWrapper>
      <MarqueeWrapper className="bottom">
        <div className={`marquee-bottom marquee-bottom-${num}`}>
          <Marquee $inverted repeat={2} duration={5}>
            <MediumText $m={'0 5vw 0 0'} className={`pos-${num}`}>
              {pos}
            </MediumText>
            <DisplayText $m={'0 90vw 0 0'}>{name.split(' ')[0]}</DisplayText>
          </Marquee>
        </div>
      </MarqueeWrapper>
    </TeamMemberItem>
  )
}

const Team = ({ data }) => {
  useGSAP(() => {
    let mm = gsap.matchMedia()

    mm.add(`(min-width: ${breakpoints.tablet}px)`, () => {
      gsap.utils.toArray('.team-wrapper').forEach((el, index) => {
        gsap.set(`.marquee-top-1`, { opacity: 1 })
        gsap.set(`.marquee-bottom-1`, { opacity: 1 })

        if (index !== 3) {
          gsap.timeline({
            scrollTrigger: {
              trigger: `.image-wrapper-${index + 1}`,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
              pin: true,
              pinSpacer: false,
              onUpdate: (self) => {
                if (self.progress > 0.6) {
                  gsap.to(`.marquee-top-${index + 1}`, { opacity: 0 })
                  gsap.to(`.marquee-bottom-${index + 1}`, { opacity: 0 })

                  gsap.to(`.marquee-top-${index + 2}`, { opacity: 1 })
                  gsap.to(`.marquee-bottom-${index + 2}`, { opacity: 1 })
                } else {
                  gsap.to(`.marquee-top-${index + 1}`, { opacity: 1 })
                  gsap.to(`.marquee-bottom-${index + 1}`, { opacity: 1 })

                  gsap.to(`.marquee-top-${index + 2}`, { opacity: 0 })
                  gsap.to(`.marquee-bottom-${index + 2}`, { opacity: 0 })
                }
              },
            },
          })
        }
      })
    })
  })

  return (
    <TeamSection>
      <Container>
        <LabelWrapper>
          <Label $reverse>Leadership</Label>
        </LabelWrapper>
      </Container>
      {data?.team?.map((member, index) => (
        <Member
          key={index}
          name={member.name}
          image={member.image}
          pos={member.position}
          num={index + 1}
        />
      ))}
    </TeamSection>
  )
}
export default Team
