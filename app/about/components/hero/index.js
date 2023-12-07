'use client'

import { useRef } from 'react'
import { Container } from 'styles'
import {
  BlobWrapper,
  HeroWrapper,
  LabelBlob,
  LabelWrapper,
  TextWrapper,
} from './styles'
import { useIsomorphicLayoutEffect, useWindowSize } from 'react-use'
import gsap from 'gsap'
import { Parallax } from 'components'

const Hero = () => {
  const heroRef = useRef()
  const { width, height } = useWindowSize()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom-=10',
          toggleActions: 'play reset resume reset',
        },
      })

      tl.from(
        gsap.utils.toArray('.blob').sort(() => 0.5 - Math.random()),
        {
          duration: 1,
          scale: 0,
          stagger: 0.05,
          ease: 'elastic(2, 1)',
        },
        0,
      ).addLabel('loaded', 1.5)

      const radius = Math.min(width, height) / 2
      const centerX = width / 2
      const centerY = height / 2

      gsap.utils.toArray('.blob').forEach((blob, i) => {
        // for the first animation
        const angle = ((Math.PI * 2) / gsap.utils.toArray('.blob').length) * i
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius

        // for the second animation
        const extendedRadius = radius + 200
        const endX = centerX + Math.cos(angle) * extendedRadius
        const endY = centerY + Math.sin(angle) * extendedRadius

        tl.to(
          blob,
          {
            duration: 0.5,
            x: x - width / 2,
            y: y - height / 2,
            rotation: -30 + Math.random() * 60,
            ease: 'expo.out',
          },
          1.5,
        )
          .add('explosion', 2)
          .to(
            blob,
            {
              duration: 40,
              x: endX - width / 2,
              y: endY - height / 2,
              rotation: -50 + Math.random() * 100,
              onComplete: () => {
                tl.timeScale(70)
                tl.tweenTo('explosion').then(() => {
                  tl.timeScale(1)
                  tl.tweenTo('loaded').then(() => {
                    setTimeout(() => {
                      tl.play('loaded')
                    }, 500)
                  })
                })
              },
            },
            2,
          )
      })

      tl.from(
        gsap.utils.toArray('.reveal-hero-1'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.inOut',
        },
        1.5,
      )
    })

    return () => ctx.revert()
  }, [width])

  return (
    <HeroWrapper ref={heroRef}>
      <Container>
        <BlobWrapper className="grid-container">
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-1">Apps</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-2">Design</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-3">
                Cloud infrastructure
              </LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-4">Branding</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-5">Animation</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-6">SEO</LabelBlob>
            </Parallax>
          </LabelWrapper>

          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-7">Social media</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob blob-special-1"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-8">Websites</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-9">UI</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-10">UX</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob blob-special-2"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-11">Developing</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-12">Messaging</LabelBlob>
            </Parallax>
          </LabelWrapper>

          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-13">Motion</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-14">Print</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-15">Wireframing</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-17">Discovery</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-16">Ecommerce</LabelBlob>
            </Parallax>
          </LabelWrapper>
          <LabelWrapper
            className="blob"
            style={{
              padding: `${Math.floor(Math.random() * 16) + 1}px`,
              transform: `rotate(${
                (Math.random() * 2 + 3) *
                (Math.random() < 0.5 ? 1 : -1) *
                (Math.random() < 0.5 ? 1 : -1)
              }deg)`,
            }}
          >
            <Parallax trigger={heroRef} speed={-1}>
              <LabelBlob className="inner-blob blob-18">Print</LabelBlob>
            </Parallax>
          </LabelWrapper>
        </BlobWrapper>

        <TextWrapper>
          <div className="overflow">
            <div className="reveal-hero-1">We&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-hero-1">get&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-hero-1">shit&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-hero-1">done.</div>
          </div>
        </TextWrapper>
      </Container>
    </HeroWrapper>
  )
}

export default Hero
