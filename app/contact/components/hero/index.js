'use client'

import React, { useState, useEffect } from 'react'
import { CustomButton, Marquee } from 'components'
import {
  ButtonsRow,
  ButtonWrapper,
  HeroWrapper,
  MarqueeWrapper,
  SocialsContainer,
  TitleWrapper,
} from './styles'
import { DisplayText, MediumText } from 'styles'
import { useLenis } from 'lenis/react'

const Hero = () => {
  const lenis = useLenis()
  const [direction, setDirection] = useState('up')

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0)

      lenis.on('scroll', (e) => {
        if (e.direction === 1) setDirection('down')
        else setDirection('up')
      })
    }
  }, [lenis])

  return (
    <HeroWrapper className="hero">
      <TitleWrapper>
        <DisplayText>Let's talk</DisplayText>
        <DisplayText>about</DisplayText>
        <DisplayText>your</DisplayText>
        <DisplayText>next</DisplayText>
        <DisplayText>project</DisplayText>
      </TitleWrapper>
      <MarqueeWrapper
        href="mailto:hello@outerlabs.studio"
        target="_blank"
        rel="noopener noreferrer"
        style={{ rotate: direction === 'up' ? '5deg' : '-5deg' }}
      >
        <Marquee repeat={3}>
          <div className="overflow">
            <DisplayText>hello@outerlabs.studio</DisplayText>
            <DisplayText $m={'0 5vw'}> ❤ </DisplayText>
          </div>
        </Marquee>
      </MarqueeWrapper>
      <SocialsContainer>
        <MediumText>Follow us</MediumText>
        <ButtonsRow>
          <ButtonWrapper>
            <CustomButton
              to="https://www.instagram.com/outerlabs"
              target="_blank"
            >
              IG
            </CustomButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <CustomButton
              to="https://www.linkedin.com/company/outerlabs/"
              target="_blank"
            >
              IN
            </CustomButton>
          </ButtonWrapper>
        </ButtonsRow>
      </SocialsContainer>
    </HeroWrapper>
  )
}

export default Hero
