'use client'

import { useRef } from 'react'
import { Container, GridWrapper } from 'styles'
import { ContentWrapper, SectionWrapper, ServicesList } from './styles'
import { Label } from 'components'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const Services = () => {
  const sectionTarget = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=10',
          toggleActions: 'play none none reset',
        },
      })

      tl.from('.reveal-services-1', {
        y: 100,
        duration: 1,
        stagger: 0.04,
        ease: 'power3.inOut',
      })
    })

    return () => ctx.revert()
  }, [])
  return (
    <SectionWrapper ref={sectionTarget}>
      <Container>
        <ContentWrapper>
          <GridWrapper>
            <div className="overflow">
              <Label $reverse className="reveal-services-1">
                Services
              </Label>
            </div>
            <ServicesList>
              <div className="overflow">
                <div className="reveal-services-1">Web design</div>
              </div>
              <div className="overflow">
                <div className="reveal-services-1">Frontend development</div>
              </div>
              <div className="overflow">
                <div className="reveal-services-1">Content guidelines</div>
              </div>
              <div className="overflow">
                <div className="reveal-services-1">Creative direction</div>
              </div>
              <div className="overflow">
                <div className="reveal-services-1">Branding</div>
              </div>
            </ServicesList>
          </GridWrapper>
          <GridWrapper>
            <div className="overflow">
              <Label $reverse className="reveal-services-1">
                Technology
              </Label>
            </div>
            <ServicesList>
              <div className="overflow">
                <div className="reveal-services-1">React</div>
              </div>
              <div className="overflow">
                <div className="reveal-services-1">NextJS</div>
              </div>
              <div className="overflow">
                <div className="reveal-services-1">Styled components</div>
              </div>
              <div className="overflow">
                <div className="reveal-services-1">Sanity</div>
              </div>
              <div className="overflow">
                <div className="reveal-services-1">Vercel</div>
              </div>
              <div className="overflow">
                <div className="reveal-services-1">GSAP</div>
              </div>
            </ServicesList>
          </GridWrapper>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default Services
