'use client'

import React, { useState, useEffect, useRef } from 'react'
import { CustomButton, Marquee } from 'components'
import { ButtonWrapper, HeroWrapper, MarqueeWrapper } from './styles'
import { useWindowSize } from 'react-use'
import { use100vh } from 'react-div-100vh'

const Hero = () => {
  const [marqueeCount, setMarqueeCount] = useState(0)
  const initialMarqueeRef = useRef(null)
  const height = use100vh()
  const { width } = useWindowSize()

  useEffect(() => {
    const marqueeHeight = initialMarqueeRef.current.offsetHeight
    const count = Math.floor(height / marqueeHeight) + 1
    setMarqueeCount(count)
  }, [height, width])

  const marquees = []
  for (let i = 0; i < marqueeCount - 2; i++) {
    marquees.push(
      <MarqueeWrapper key={i} i={i + 1 * 100}>
        <Marquee
          repeat={3}
          duration={15}
          $inverted={i % 2 === 0}
          offset={[30, 70, 10, 25, 50][Math.floor(Math.random() * 3)]}
        >
          <div className="overflow first">
            <div className="reveal-text-1">We{"'"}d&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-text-1">look&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-text-1">good&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-text-1">together</div>
          </div>
        </Marquee>
      </MarqueeWrapper>,
    )
  }

  return (
    <HeroWrapper className="hero">
      <ButtonWrapper>
        <CustomButton href="mailto:hello@outerlabs.studio">
          Let's chat
        </CustomButton>
      </ButtonWrapper>
      <MarqueeWrapper ref={initialMarqueeRef}>
        <Marquee repeat={3} duration={15} offset={15}>
          <div className="overflow first">
            <div className="reveal-text-1">We{"'"}d&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-text-1">look&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-text-1">good&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-text-1">together</div>
          </div>
        </Marquee>
      </MarqueeWrapper>
      {marquees}
    </HeroWrapper>
  )
}

export default Hero
