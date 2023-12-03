'use client'

import { useRef } from 'react'
import { CustomButton, Label } from 'components'
import { Container, GridWrapper, HugeText } from 'styles'
import {
  TextWrapper,
  TransitionSection,
  ButtonWrapper,
  InnerWrapper,
} from './styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const Transition = () => {
  const text = `From ideation to production: we create digital products that help successful companies thrive. Our refined process has helped our clients generate more than 6 figures in monthly profit. Our approach begins with understanding your unique business needs and tailoring our strategy to align with your specific goals.`
  const textTarget = useRef()
  const sectionTarget = useRef()
  const innerTarget = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      // text animation
      tl.fromTo(
        gsap.utils.toArray('.words'),
        { opacity: 0.01 },
        {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: textTarget.current,
            start: 'top bottom-=20%',
            end: 'bottom bottom-=20%',
            scrub: true,
          },
        },
        0,
      ).to(
        sectionTarget.current,
        {
          yPercent: 40,
          scrollTrigger: {
            trigger: sectionTarget.current,
            start: 'center center',
            end: 'bottom+=40% top',
            scrub: true,
          },
        },
        0,
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <TransitionSection ref={sectionTarget}>
      <InnerWrapper ref={innerTarget}>
        <Container>
          <GridWrapper>
            <Label className="label">What we do</Label>
            <TextWrapper ref={textTarget}>
              {text.split(' ').map((element, index) => (
                <HugeText key={index} className="words">
                  {element + ' '}
                </HugeText>
              ))}
            </TextWrapper>
            <ButtonWrapper>
              <CustomButton href="/about">
                Learn about our services
              </CustomButton>
            </ButtonWrapper>
          </GridWrapper>
        </Container>
      </InnerWrapper>
    </TransitionSection>
  )
}

export default Transition
