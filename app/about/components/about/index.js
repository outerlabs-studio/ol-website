'use client'

import { Label } from 'components'
import { AboutWrapper, InfoWrapper, TextWrapper } from './styles'
import { Container, GridWrapper } from 'styles'
import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const About = () => {
  const sectionTarget = useRef()
  const text = `We get shit done. Picture a small office where creative minds, fueled by an endless supply of coffee, show how to draw squares on a blank canvas. We're not just about coding and design; we're about creating digital magic with a dash of fun and a sprinkle of the`

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
          stagger: 0.02,
          ease: 'power3.inOut',
        },
        0,
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

      gsap.to(gsap.utils.toArray('.reveal-about-4'), {
        fontWeight: 800,
        repeat: -1,
        yoyo: true,
        duration: 0.2,
        stagger: 0.05,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <AboutWrapper ref={sectionTarget}>
      <Container>
        <GridWrapper>
          <div className="overflow">
            <div className="reveal-about-1">
              <Label reverse>About</Label>
            </div>
          </div>
          <TextWrapper>
            {text.split(' ').map((element, index) => (
              <div key={index} className="overflow">
                <div className="reveal-about-1">{element}&nbsp;</div>
              </div>
            ))}
            <div className="overflow">
              <div className="reveal-about-1">
                <div className="reveal-about-4">u</div>
                <div className="reveal-about-4">n</div>
                <div className="reveal-about-4">e</div>
                <div className="reveal-about-4">x</div>
                <div className="reveal-about-4">p</div>
                <div className="reveal-about-4">e</div>
                <div className="reveal-about-4">c</div>
                <div className="reveal-about-4">t</div>
                <div className="reveal-about-4">e</div>
                <div className="reveal-about-4">d</div>.
              </div>
            </div>
          </TextWrapper>
          <InfoWrapper>
            <div className="col">
              <div className="overflow">
                <div className="reveal-about-2">Founded</div>
              </div>
              <div className="overflow">
                <div className="reveal-about-3">2021</div>
              </div>
            </div>
            <div className="col">
              <div className="overflow">
                <div className="reveal-about-2">Client profit</div>
              </div>
              <div className="overflow">
                <div className="reveal-about-3">8 figures</div>
              </div>
            </div>
            <div className="col">
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
