'use client'

import { Label } from 'components'
import { AboutWrapper, InfoWrapper, TextWrapper } from './styles'
import { Container, GridWrapper } from 'styles'
import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const About = () => {
  const sectionTarget = useRef()
  const text = `We go beyond the mainstream because we understand that our work is more than a task list; it's a dedication to brilliance. Your projects are not just assignments; they're canvases for us to paint excellence. Every line of code and every pixel is meticulously crafted to surpass expectations.`
  const text2 = `We excel in translating the essence of your brand into dynamic digital solutions, whether it's through cutting-edge crypto apps, engaging e-commerce platforms, or compelling entertainment experiences. Our rapid rise in the digital design realm is a testament to our commitment to innovation and brand-centric strategy. Outer Labs is where brands find their digital voice and shape their future in an ever-evolving digital landscape. Here, every project is an opportunity to explore new horizons and redefine what's possible. Join us in this exciting journey where your brand's potential knows no bounds.`

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
          <TextWrapper>
            {text2.split(' ').map((element, index) => (
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
