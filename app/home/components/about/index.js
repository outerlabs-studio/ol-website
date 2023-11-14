'use client'

import { useRef } from 'react'
import {
  Container,
  DisplayText,
  GridWrapper,
  HugeText,
  NormalText,
} from 'styles'
import {
  AboutSection,
  ContentWrapper,
  CustomGridWrapper,
  TopImageWrapper,
  BottomImageWrapper,
  BottomMarqueeWrapper,
} from './styles'
import { CustomButton, Label, Marquee, Parallax } from 'components'
import Image from 'next/image'

const About = () => {
  const sectionTarget = useRef()

  return (
    <AboutSection ref={sectionTarget}>
      <GridWrapper>
        <Parallax speed={-1} trigger={sectionTarget}>
          <TopImageWrapper>
            <Image src="/boys.jpg" alt="The team" fill className="ukiyo" />
          </TopImageWrapper>
        </Parallax>
        <Parallax speed={-1} trigger={sectionTarget}>
          <BottomImageWrapper>
            <Image src="/meeting.JPG" alt="The team" fill className="ukiyo" />
          </BottomImageWrapper>
        </Parallax>
      </GridWrapper>
      <Marquee repeat={3}>
        <DisplayText m={'0 6vw 0 0'}>Size doesn{`'`}t matter</DisplayText>
      </Marquee>
      <Container>
        <CustomGridWrapper>
          <Label reverse>Studio</Label>
          <Parallax speed={1.25} trigger={sectionTarget}>
            <ContentWrapper>
              <HugeText>
                Talent beats quantity <br />
                ten out of ten times.
              </HugeText>
              <NormalText>
                Our small studio setting allows for a personalized, hands-on
                approach, ensuring each project receives the utmost attention
                and creative energy. This intimate scale enables us to achieve
                grand results.
              </NormalText>
              <CustomButton href="/about">Meet the team</CustomButton>
            </ContentWrapper>
          </Parallax>
        </CustomGridWrapper>
      </Container>
      <BottomMarqueeWrapper>
        <Marquee repeat={3}>
          <DisplayText m={'0 6vw 0 0'}>Quality {`>`} Quantity</DisplayText>
        </Marquee>
      </BottomMarqueeWrapper>
    </AboutSection>
  )
}

export default About
