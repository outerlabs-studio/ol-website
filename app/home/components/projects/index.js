'use client'

import { useEffect, useRef } from 'react'
import { Container, NormalText } from 'styles'
import {
  CustomDescription,
  CustomTitle,
  ImageWrapper,
  Project,
  ProjectList,
  ProjectWrapper,
  TopbarWrapper,
} from './styles'
import { Label } from 'components'
import Image from 'next/image'
import { useIsomorphicLayoutEffect } from 'react-use/lib'
import gsap from 'gsap'

const Projects = () => {
  const sectionTarget = useRef()

  // useIsomorphicLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let tl = gsap.timeline()

  //     tl.from(
  //       sectionTarget.current,
  //       {
  //         scale: 0.8,
  //         scrollTrigger: {
  //           trigger: sectionTarget.current,
  //           start: 'top-=40% bottom',
  //           end: 'top+=30% bottom',
  //           scrub: true,
  //         },
  //       },
  //       0,
  //     )
  //   })

  //   return () => ctx.revert()
  // }, [])

  return (
    <ProjectWrapper ref={sectionTarget}>
      <Container>
        <TopbarWrapper>
          <Label reverse>Selected Work</Label>
          <NormalText>2021-23</NormalText>
        </TopbarWrapper>
        <ProjectList>
          <Project href="/">
            <ImageWrapper>
              <Image
                src="/techcodes.png"
                alt="TechCodes"
                fill
                className="ukiyo"
              />
            </ImageWrapper>
            <CustomTitle>TechCodes</CustomTitle>
            <CustomDescription>Computer science nonprofit</CustomDescription>
          </Project>
          <Project href="/">
            <ImageWrapper>
              <Image
                src="/astro.jpg"
                alt="Astro Studios"
                fill
                className="ukiyo"
              />
            </ImageWrapper>
            <CustomTitle>Astro Studios</CustomTitle>
            <CustomDescription>A podcast company</CustomDescription>
          </Project>
          <Project href="/">
            <ImageWrapper>
              <Image
                src="/stigma.png"
                alt="Stop the Stigma"
                fill
                className="ukiyo"
              />
            </ImageWrapper>
            <CustomTitle>Stop the Stigma</CustomTitle>
            <CustomDescription>
              Raise social awareness about mental health
            </CustomDescription>
          </Project>
          <Project href="/">
            <ImageWrapper>
              <Image
                src="/sarah.png"
                alt="Sarah Khosla"
                fill
                className="ukiyo"
              />
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
