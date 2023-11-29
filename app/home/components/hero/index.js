'use client'

import { Container } from 'styles'
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
import { useIsomorphicLayoutEffect } from 'react-use'
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
        .from(
          gsap.utils.toArray('.reveal-hero-1'),
          {
            yPercent: 100,
            duration: 2,
            stagger: 0.1,
            ease: 'power3.inOut',
          },
          0,
        )
        .from(
          gsap.utils.toArray('.reveal-hero-2'),
          {
            yPercent: 100,
            duration: 2,
            stagger: 0.1,
            ease: 'power3.inOut',
          },
          0,
        )
        .from(
          gsap.utils.toArray('.reveal-hero-3'),
          {
            xPercent: -100,
            duration: 1,
            stagger: 0.03,
            ease: 'power3.inOut',
          },
          0,
        )
        .fromTo(
          '.reveal-button',
          {
            scale: 0,
          },
          { scale: 1, duration: 0.5, ease: 'power3.inOut' },
          1,
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <HeroWrapper ref={trigger}>
      <Container>
        <CustomGridWrapper>
          <LinkWrapper>
            <div className="overflow">
              <div className="reveal-hero-2">
                <CustomLink href="https://instagram.com/outerlabs">
                  Instagram
                </CustomLink>
              </div>
            </div>
            <div className="overflow">
              <div className="reveal-hero-2">
                <CustomLink href="https://www.linkedin.com/company/outerlabs">
                  LinkedIn
                </CustomLink>
              </div>
            </div>
            <div className="overflow">
              <div className="reveal-hero-2">
                <CustomLink href="https://www.dribbble.com/outerlabs">
                  Dribbble
                </CustomLink>
              </div>
            </div>
          </LinkWrapper>
          <DescriptionWrapper>
            <div className="overflow">
              <div className="reveal-hero-1">
                Award winning digital design and development
              </div>
            </div>
            <div className="overflow">
              <div className="reveal-hero-1">
                consultancy specializing in websites, apps, and
              </div>
            </div>
            <div className="overflow">
              <div className="reveal-hero-1">branding.</div>
            </div>
            <div className="reveal-button">
              <CustomButton href="/about">Learn more</CustomButton>
            </div>
          </DescriptionWrapper>
        </CustomGridWrapper>
      </Container>
      <Parallax speed={0.5} trigger={trigger}>
        <ButtonWrapper className="reveal-button">
          <CustomButton href="#contact">Get in touch</CustomButton>
        </ButtonWrapper>
      </Parallax>
      <TitleWrapper>
        <SectionTitle>
          <div className="overflow">
            <div className="reveal-hero-3">O</div>
          </div>
          <Parallax speed={-2} trigger={trigger}>
            <div className="overflow">
              <div className="reveal-hero-3">u</div>
            </div>
          </Parallax>
          <div className="overflow">
            <div className="reveal-hero-3">t</div>
          </div>
          <Parallax speed={-1} trigger={trigger}>
            <div className="overflow">
              <div className="reveal-hero-3">e</div>
            </div>
          </Parallax>
          <div className="overflow">
            <div className="reveal-hero-3">r</div>
          </div>
          <div>&nbsp;</div>
          <Parallax speed={-1.5} trigger={trigger}>
            <div className="overflow">
              <div className="reveal-hero-3">L</div>
            </div>
          </Parallax>
          <div className="overflow">
            <div className="reveal-hero-3">a</div>
          </div>
          <Parallax speed={-0.5} trigger={trigger}>
            <div className="overflow">
              <div className="reveal-hero-3">b</div>
            </div>
          </Parallax>
          <Parallax speed={-3} trigger={trigger}>
            <div className="overflow">
              <div className="reveal-hero-3">s</div>
            </div>
          </Parallax>
        </SectionTitle>
      </TitleWrapper>
    </HeroWrapper>
  )
}

export default Hero
