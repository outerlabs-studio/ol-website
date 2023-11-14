'use client'

import { Container, NormalText } from 'styles'
import {
  ButtonWrapper,
  CustomGridWrapper,
  DescriptionWrapper,
  HeroWrapper,
  LinkWrapper,
  SectionTitle,
  TitleWrapper,
} from './styles'
import { CustomButton, CustomLink, Parallax } from 'components'
import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use/lib'
import gsap from 'gsap'

const Hero = () => {
  const trigger = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.to(
        trigger.current,
        {
          yPercent: 15,
          scrollTrigger: {
            trigger: trigger.current,
            start: 'center center',
            end: 'bottom+=15% top',
            scrub: true,
          },
        },
        0,
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <HeroWrapper ref={trigger}>
      <Container>
        <CustomGridWrapper>
          <LinkWrapper>
            <CustomLink href="https://instagram.com/outerlabs">
              Instagram
            </CustomLink>
            <CustomLink href="https://www.linkedin.com/company/outerlabs">
              LinkedIn
            </CustomLink>
            <CustomLink href="https://www.dribbble.com/outerlabs">
              Dribbble
            </CustomLink>
          </LinkWrapper>
          <DescriptionWrapper>
            <NormalText>
              Award winning digital design and development consultancy
              specializing in websites, apps, and branding.
            </NormalText>
          </DescriptionWrapper>
        </CustomGridWrapper>
      </Container>
      <Parallax speed={0.5} trigger={trigger}>
        <ButtonWrapper>
          <CustomButton href="#contact">Get in touch</CustomButton>
        </ButtonWrapper>
      </Parallax>
      <TitleWrapper>
        <SectionTitle>
          <div>O</div>
          <Parallax speed={-2} trigger={trigger}>
            <div>u</div>
          </Parallax>
          <div>t</div>
          <Parallax speed={-1} trigger={trigger}>
            <div>e</div>
          </Parallax>
          <div>r</div>
          <div>&nbsp;</div>
          <Parallax speed={-1.5} trigger={trigger}>
            <div>L</div>
          </Parallax>
          <div>a</div>
          <Parallax speed={-0.5} trigger={trigger}>
            <div>b</div>
          </Parallax>
          <Parallax speed={-3} trigger={trigger}>
            <div>s</div>
          </Parallax>
        </SectionTitle>
      </TitleWrapper>
    </HeroWrapper>
  )
}

export default Hero
