'use client'

import { useRef } from 'react'
import { CustomButton, Label } from 'components'
import { Container, GridWrapper, HugeText } from 'styles'
import {
  TextWrapper,
  AboutSection,
  ButtonWrapper,
  InnerWrapper,
} from './styles'
import { useWindowSize } from 'react-use'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = ({ data }) => {
  const sectionTarget = useRef()
  const { width } = useWindowSize()

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=25%',
          end: 'bottom bottom',
          scrub: 1,
        },
      })
      .fromTo(
        gsap.utils.toArray('.words'),
        { opacity: 0.01 },
        { opacity: 1, stagger: 0.05 },
      )
  }, [width])

  return (
    <AboutSection ref={sectionTarget}>
      <InnerWrapper>
        <Container>
          <GridWrapper>
            <Label $reverse className="label enabled">
              About
            </Label>
            <TextWrapper>
              {data?.split(' ').map((element, index) => (
                <HugeText key={index} className="words enabled">
                  {element + ' '}
                </HugeText>
              ))}
            </TextWrapper>
            <ButtonWrapper>
              <CustomButton href="/about" $reverse>
                Learn about our services
              </CustomButton>
            </ButtonWrapper>
          </GridWrapper>
        </Container>
      </InnerWrapper>
    </AboutSection>
  )
}

export default About
