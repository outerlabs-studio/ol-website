'use client'

import { Container, HugeText, NormalText } from 'styles'
import {
  CustomDescription,
  CustomTitle,
  ImageWrapper,
  MarqueeWrapper,
  Project,
  ProjectList,
  ProjectWrapper,
  TopbarWrapper,
} from './styles'
import { CustomImage, Label, Marquee } from 'components'

const Projects = () => {
  return (
    <ProjectWrapper id="projects">
      <Container>
        <TopbarWrapper>
          <Label $reverse>Selected Work</Label>
          <NormalText>2021-23</NormalText>
        </TopbarWrapper>
        <ProjectList>
          <Project href="/">
            <ImageWrapper>
              <MarqueeWrapper>
                <Marquee repeat={3}>
                  <HugeText $m={'0 6vw 0 0'}>Coming&nbsp;&nbsp;Soon</HugeText>
                </Marquee>
              </MarqueeWrapper>
              <CustomImage src="/techcodes.png" alt="TechCodes" speed={0.5} />
            </ImageWrapper>
            <CustomTitle>TechCodes</CustomTitle>
            <CustomDescription>Computer science nonprofit</CustomDescription>
          </Project>
          <Project href="/">
            <ImageWrapper>
              <MarqueeWrapper>
                <Marquee repeat={3}>
                  <HugeText $m={'0 6vw 0 0'}>Coming&nbsp;&nbsp;Soon</HugeText>
                </Marquee>
              </MarqueeWrapper>
              <CustomImage src="/astro.jpg" alt="Astro Studios" speed={0.5} />
            </ImageWrapper>
            <CustomTitle>Astro Studios</CustomTitle>
            <CustomDescription>A podcast company</CustomDescription>
          </Project>
          <Project href="/">
            <ImageWrapper>
              <MarqueeWrapper>
                <Marquee repeat={3}>
                  <HugeText $m={'0 6vw 0 0'}>Coming&nbsp;&nbsp;Soon</HugeText>
                </Marquee>
              </MarqueeWrapper>
              <CustomImage
                src="/stigma.png"
                alt="Stop the Stigma"
                speed={0.5}
              />
            </ImageWrapper>
            <CustomTitle>Stop the Stigma</CustomTitle>
            <CustomDescription>
              Raise social awareness about mental health
            </CustomDescription>
          </Project>
          <Project href="/">
            <ImageWrapper>
              <MarqueeWrapper>
                <Marquee repeat={3}>
                  <HugeText $m={'0 6vw 0 0'}>Coming&nbsp;&nbsp;Soon</HugeText>
                </Marquee>
              </MarqueeWrapper>
              <CustomImage src="/sarah.png" alt="Sarah Khosla" speed={0.5} />
            </ImageWrapper>
            <CustomTitle>Sarah Khosla</CustomTitle>
            <CustomDescription>Portfolio</CustomDescription>
          </Project>
        </ProjectList>
      </Container>
    </ProjectWrapper>
  )
}

export default Projects
