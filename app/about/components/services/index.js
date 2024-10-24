'use client'

import { useRef } from 'react'
import { Container, GridWrapper } from 'styles'
import { ServicesCol, ServicesWrapper, TextWrapper } from './styles'
import { CustomButton, Label } from 'components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = ({ data }) => {
  const sectionTarget = useRef()

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionTarget.current,
        start: 'top-=20% bottom',
        toggleActions: 'play none none reset',
      },
    })

    tl.from(
      gsap.utils.toArray('.reveal-services-1'),
      {
        yPercent: 100,
        duration: 1,
        stagger: 0.02,
        ease: 'power3.inOut',
      },
      0,
    )
      .from(
        gsap.utils.toArray('.reveal-services-2'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.02,
          ease: 'power3.inOut',
        },
        0.5,
      )
      .from(
        gsap.utils.toArray('.reveal-services-3'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.02,
          ease: 'power3.inOut',
        },
        0.5,
      )
      .fromTo(
        '.reveal-services-button',
        {
          scale: 0,
          transformOrigin: 'left center',
        },
        { scale: 1, duration: 1, ease: 'power3.inOut' },
        0.5,
      )
  })

  return (
    <ServicesWrapper ref={sectionTarget}>
      <Container>
        <GridWrapper>
          <div className="overflow">
            <div className="reveal-services-1">
              <Label $reverse>Services</Label>
            </div>
          </div>
          <TextWrapper>
            {data?.services?.text?.split(' ').map((element, index) => (
              <div className="overflow" key={index}>
                <div className="reveal-services-2">{element}&nbsp;</div>
              </div>
            ))}
          </TextWrapper>
          <CustomButton
            $reverse
            href="/contact"
            className="reveal-services-button"
          >
            Request custom service
          </CustomButton>
          <ServicesCol>
            <div className="overflow">
              <div className="reveal-services-3">Branding and development</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">Strategy</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">Identity</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">Design systems</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">Guidelines</div>
            </div>
          </ServicesCol>
          <ServicesCol className="right">
            <div className="overflow">
              <div className="reveal-services-3">Web Design</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">Frontend Development</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">Backend Development</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">CMS Implementation</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">Web Applications</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">Ecommerce</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">Cloud Infastructure</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">SEO Optimization</div>
            </div>
          </ServicesCol>
          <ServicesCol className="bottom">
            <div className="overflow">
              <div className="reveal-services-3">Illustration</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">User Experience</div>
            </div>
            <div className="overflow">
              <div className="reveal-services-3">Content Strategy</div>
            </div>
          </ServicesCol>
        </GridWrapper>
      </Container>
    </ServicesWrapper>
  )
}

export default Services
