'use client'

import { useIsomorphicLayoutEffect } from 'react-use'
import { CustomImage } from 'components'
import { Container } from 'styles'
import { ImageWrapper, SectionWrapper, TitleWrapper } from './styles'
import gsap from 'gsap'

const Hero = () => {
  const titleText = 'TechCodes'

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.from('.reveal-hero-1', {
        yPercent: 100,
        duration: 1,
        stagger: 0.02,
        delay: 0.3,
        ease: 'power3.inOut',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <SectionWrapper>
      <Container>
        <TitleWrapper>
          {titleText.split('').map((letter, index) => (
            <div className="overflow" key={index}>
              <div className="reveal-hero-1">{letter}</div>
            </div>
          ))}
        </TitleWrapper>
        <ImageWrapper>
          <CustomImage src="/techcodes-1.webp" alt="TechCodes" speed={1} />
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default Hero
