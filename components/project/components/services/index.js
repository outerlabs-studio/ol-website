'use client'

import { useRef } from 'react'
import { Container, GridWrapper } from 'styles'
import { ContentWrapper, SectionWrapper, ServicesList } from './styles'
import { Label } from 'components'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const Services = ({ services }) => {
  const sectionTarget = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top-=40% bottom',
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
          {services.map((service, index) => (
            <GridWrapper key={index}>
              <div className="overflow">
                <Label $reverse className="reveal-services-1">
                  {service.type}
                </Label>
              </div>
              <ServicesList>
                {service.list.map((listItem, i) => (
                  <div className="overflow" key={i}>
                    <div className="reveal-services-1">{listItem}</div>
                  </div>
                ))}
              </ServicesList>
            </GridWrapper>
          ))}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default Services
