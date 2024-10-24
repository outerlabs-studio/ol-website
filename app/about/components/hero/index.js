'use client'

import { useRef } from 'react'
import { AnimWrapper, HeroWrapper, TextWrapper } from './styles'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import DVDScreen from './dvd'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef()

  useGSAP(() => {
    let tl = gsap.timeline({ delay: 1 })

    tl.from(gsap.utils.toArray('.reveal-hero-1'), {
      yPercent: 100,
      duration: 0.5,
      stagger: 0.02,
      ease: 'back.out',
    })

    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: true,
        pin: true,
      },
      scale: 0.95,
    })
  })

  return (
    <HeroWrapper>
      <AnimWrapper ref={heroRef}>
        <DVDScreen />
      </AnimWrapper>

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
    </HeroWrapper>
  )
}

export default Hero
