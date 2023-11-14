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
import { CustomButton, CustomImage, Label, Marquee, Parallax } from 'components'

const About = () => {
  const sectionTarget = useRef()
  const imageTarget = useRef()

  return (
    <AboutSection ref={sectionTarget}>
      <GridWrapper>
        <Parallax speed={-1.5} trigger={sectionTarget}>
          <TopImageWrapper ref={imageTarget}>
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
        <DisplayText m={'0 6vw 0 0'}>Size doesn{`'`}t matter</DisplayText>
      </Marquee>
      <Container>
        <Parallax speed={1.25} trigger={sectionTarget}>
          <CustomGridWrapper>
            <Label reverse>Studio</Label>
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
          </CustomGridWrapper>
        </Parallax>
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
