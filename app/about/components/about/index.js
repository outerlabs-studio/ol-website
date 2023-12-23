'use client'

import { Label } from 'components'
import { AboutWrapper, InfoWrapper, TextWrapper } from './styles'
import { Container, GridWrapper } from 'styles'
import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const About = () => {
  const sectionTarget = useRef()
  const text = `We are a boutique studio with a team of four dedicated leads. Our size is our strength - it fosters a close-knit environment where collaboration and creativity thrive. The passion for what we do isn't just about achieving results; it's about relishing the process that leads us there.`
  const text2 = `Our team structure is intentionally lean, allowing us to maintain a streamlined and efficient workflow. Having a small team eliminates the complexities often found in larger groups. This simplicity in our structure enables us to rapidly exchange ideas, leading to a development process that is not only faster but also more refined. Our intimate setting encourages open dialogue and a seamless exchange of creative thoughts, ensuring that every project benefits from the collective wisdom and expertise of our entire team.`
  const text3 = `We understand that great design and smart development are key to creating user experiences that not only engage but also drive our clients' goals forward. In a world where digital is the norm, we ensure that our clients stand out with websites and apps that are not only visually striking but also highly functional and user-friendly. In short, at Outer Labs Studio, we combine our small team's agility with our big passion for digital excellence. The result? Tailored digital solutions that deliver results and drive profitability.`

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=10',
          toggleActions: 'play none none reset',
        },
      })

      tl.from(
        gsap.utils.toArray('.reveal-about-1'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.01,
          ease: 'power3.inOut',
        },
        0,
      )
        .from(
          gsap.utils.toArray('.reveal-about-4'),
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.005,
            ease: 'power3.inOut',
          },
          0.5,
        )
        .from(
          gsap.utils.toArray('.reveal-about-2'),
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.02,
            ease: 'power3.inOut',
          },
          0.75,
        )
        .from(
          gsap.utils.toArray('.reveal-about-3'),
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.02,
            ease: 'power3.inOut',
          },
          0.75,
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <AboutWrapper ref={sectionTarget}>
      <Container>
        <GridWrapper>
          <div className="overflow">
            <div className="reveal-about-1">
              <Label $reverse>Our Brand</Label>
            </div>
          </div>
          <TextWrapper>
            {text.split(' ').map((element, index) => (
              <div key={index} className="overflow">
                <div className="reveal-about-1">{element}&nbsp;</div>
              </div>
            ))}
          </TextWrapper>
          <TextWrapper className="max-width">
            {text2.split(' ').map((element, index) => (
              <div key={index} className="overflow">
                <div className="reveal-about-4">{element}&nbsp;</div>
              </div>
            ))}
          </TextWrapper>
          <TextWrapper className="max-width">
            {text3.split(' ').map((element, index) => (
              <div key={index} className="overflow">
                <div className="reveal-about-4">{element}&nbsp;</div>
              </div>
            ))}
          </TextWrapper>
          <InfoWrapper>
            <div className="col col-1">
              <div className="overflow">
                <div className="reveal-about-2">Founded</div>
              </div>
              <div className="overflow">
                <div className="reveal-about-3">2021</div>
              </div>
            </div>
            <div className="col col-2">
              <div className="overflow">
                <div className="reveal-about-2">Client profit</div>
              </div>
              <div className="overflow">
                <div className="reveal-about-3">6 figures</div>
              </div>
            </div>
            <div className="col col-3">
              <div className="overflow">
                <div className="reveal-about-2">Size</div>
              </div>
              <div className="overflow">
                <div className="reveal-about-3">4 members</div>
              </div>
            </div>
          </InfoWrapper>
        </GridWrapper>
      </Container>
    </AboutWrapper>
  )
}

export default About
