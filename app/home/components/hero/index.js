'use client'

import { useRef } from 'react'
import { useIsomorphicLayoutEffect, useWindowSize } from 'react-use'
import { useLenis } from '@studio-freight/react-lenis'
import { Container, sizes } from 'styles'
import {
  ButtonWrapper,
  CustomGridWrapper,
  DescriptionWrapper,
  HeroWrapper,
  LinkWrapper,
  TitleWrapper,
} from './styles'
import gsap from 'gsap'
import { CustomButton, CustomLink, Parallax } from 'components'

const Hero = () => {
  const trigger = useRef()
  const lenis = useLenis()
  const { width } = useWindowSize()
  const text = `Award winning digital design and development consultancy specializing in websites, apps, and branding.`

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()
      tl.from(
        gsap.utils.toArray('.reveal-hero-1'),
        {
          yPercent: 100,
          duration: 2,
          stagger: 0.02,
          ease: 'power3.inOut',
        },
        0,
      )
        .from(
          gsap.utils.toArray('.reveal-hero-2'),
          {
            yPercent: 100,
            duration: 2,
            stagger: 0.2,
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

      if (width >= sizes.thone) {
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
      }
    })

    return () => ctx.revert()
  }, [width])

  return (
    <HeroWrapper ref={trigger}>
      <div className="content-wrap">
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
              {text.split(' ').map((word, index) => (
                <div key={index} className="overflow">
                  <div className="reveal-hero-1">{word}&nbsp;</div>
                </div>
              ))}
              <div className="link-wrapper">
                <CustomButton href="/about" className="reveal-button">
                  Learn more
                </CustomButton>
                {width <= 600 && (
                  <CustomButton
                    href="/"
                    className="reveal-button"
                    $reverse
                    onClick={() => {
                      lenis.scrollTo('#contact', { offset: 800 })
                    }}
                  >
                    Get in touch
                  </CustomButton>
                )}
              </div>
            </DescriptionWrapper>
          </CustomGridWrapper>
        </Container>
        {width > 600 && (
          <ButtonWrapper>
            <Parallax speed={1} trigger={trigger}>
              <CustomButton
                className="reveal-button"
                href="/"
                onClick={() => {
                  lenis.scrollTo('#contact', { offset: 800 })
                }}
              >
                Get in touch
              </CustomButton>
            </Parallax>
          </ButtonWrapper>
        )}
        <TitleWrapper>
          <div className="overflow">
            <div className="reveal-hero-3">O</div>
          </div>
          <Parallax speed={-2} trigger={trigger} $toggleMobile>
            <div className="overflow">
              <div className="reveal-hero-3">u</div>
            </div>
          </Parallax>
          <div className="overflow">
            <div className="reveal-hero-3">t</div>
          </div>
          <Parallax speed={-1} trigger={trigger} $toggleMobile>
            <div className="overflow">
              <div className="reveal-hero-3">e</div>
            </div>
          </Parallax>
          <div className="overflow">
            <div className="reveal-hero-3">r&nbsp;</div>
          </div>
          <Parallax speed={-1.5} trigger={trigger} $toggleMobile>
            <div className="overflow">
              <div className="reveal-hero-3">L</div>
            </div>
          </Parallax>
          <div className="overflow">
            <div className="reveal-hero-3">a</div>
          </div>
          <Parallax speed={-0.5} trigger={trigger} $toggleMobile>
            <div className="overflow">
              <div className="reveal-hero-3">b</div>
            </div>
          </Parallax>
          <Parallax speed={-3} trigger={trigger} $toggleMobile>
            <div className="overflow">
              <div className="reveal-hero-3">s</div>
            </div>
          </Parallax>
        </TitleWrapper>
      </div>
    </HeroWrapper>
  )
}

export default Hero
