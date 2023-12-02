'use client'

import { useRef, useMemo } from 'react'
import { useIsomorphicLayoutEffect, useWindowSize } from 'react-use'
import { CustomLink, CustomButton } from 'components'
import { Container } from 'styles'
import {
  FooterWrapper,
  ContentWrapper,
  LinksWrapper,
  BottomLine,
  CustomGridWrapper,
  FerrisWheel,
  ItemWrapper,
  WheelWrapper,
} from './styles'
import gsap from 'gsap'

const currentYear = new Date().getFullYear()

const Footer = () => {
  const footerTarget = useRef(null)
  const ferrisWheelRef = useRef(null)
  const { width } = useWindowSize()

  const ferrisWheelItems = useMemo(
    () => new Array(width < 500 ? 4 : 8).fill(0),
    [],
  )

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: footerTarget.current,
          start: 'top+=100% bottom',
          toggleActions: 'play none none reset',
        },
      })
      gsap.from(footerTarget.current, {
        yPercent: -100,
        scrollTrigger: {
          trigger: footerTarget.current,
          start: 'top bottom',
          end: 'bottom+=100% bottom',
          scrub: true,
        },
      })

      revealTl
        .from(
          gsap.utils.toArray('.reveal-footer-1'),
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.05,
            ease: 'power3.out',
          },
          0,
        )
        .from(
          gsap.utils.toArray('.reveal-footer-2'),
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.05,
            ease: 'power3.out',
          },
          0.5,
        )
        .from(
          gsap.utils.toArray('.reveal-footer-3'),
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.05,
            ease: 'power3.out',
          },
          0.5,
        )
        .from(
          gsap.utils.toArray('.reveal-footer-4'),
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.05,
            ease: 'power3.out',
          },
          0.5,
        )
        .fromTo(
          '.reveal-footer-button',
          {
            scale: 0,
            transformOrigin: 'center center',
          },
          { scale: 1, duration: 1, ease: 'power3.inOut' },
          0.25,
        )

      let radius = (30 * width) / 100

      const itemTarget = gsap.utils.toArray('.ferris-item')
      itemTarget.forEach((item, i, arr) => {
        let rotation = i * (360 / arr.length)
        gsap.set(item, {
          left: '50%',
          top: '50%',
          transformOrigin: 'left center',
          rotation: rotation,
          width: radius,
        })
        gsap.set(item.querySelector('img'), {
          transformOrigin: '50% 50%',
          x: radius - 40,
          y: -6,
          rotation: -rotation,
        })
      })

      gsap.set(ferrisWheelRef.current, {
        width: radius * 2,
        height: radius * 2,
        rotation: 0,
        repeat: -1,
        ease: 'none',
      })
      gsap.to(ferrisWheelRef.current, {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: 'none',
      })

      itemTarget.forEach((item) => {
        gsap.to(item.querySelector('img'), {
          rotation: '-=360',
          duration: 7 + Math.random() * 7,
          repeat: -1,
          ease: 'none',
        })
      })
    })

    return () => ctx.revert()
  }, [width])

  return (
    <FooterWrapper ref={footerTarget} id="contact">
      <ContentWrapper>
        <div>
          <div className="overflow">
            <div className="reveal-footer-1">We{`'`}d&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-footer-1">{`<`}3&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-footer-1">to</div>
          </div>
          <br />
          <div className="overflow">
            <div className="reveal-footer-1">work&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-footer-1">with&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-footer-1">you</div>
          </div>
        </div>

        <div className="reveal-footer-button">
          <CustomButton href="mailto:hello@outerlabs.studio">
            Let's talk
          </CustomButton>
        </div>
      </ContentWrapper>
      <BottomLine>
        <Container>
          <CustomGridWrapper>
            <LinksWrapper>
              <div className="overflow">
                <CustomLink
                  href="https://instagram.com/outerlabs"
                  $reverse
                  className="reveal-footer-2"
                >
                  Instagram
                </CustomLink>
              </div>
              <div className="overflow">
                <CustomLink
                  href="https://www.linkedin.com/company/outerlabs"
                  $reverse
                  className="reveal-footer-2"
                >
                  LinkedIn
                </CustomLink>
              </div>
              <div className="overflow">
                <CustomLink
                  href="https://www.dribbble.com/outerlabs"
                  $reverse
                  className="reveal-footer-2"
                >
                  Dribbble
                </CustomLink>
              </div>
            </LinksWrapper>
            <div>
              <div className="overflow">
                <div className="reveal-footer-3">25 Broadway</div>
              </div>
              <br />
              <div className="overflow">
                <div className="reveal-footer-3">New York, NY 10004</div>
              </div>
            </div>
            <div className="overflow">
              <CustomLink
                href="mailto@hello@outerlabs.studio"
                $reverse
                className="reveal-footer-4"
              >
                hello@outerlabs.studio
              </CustomLink>
            </div>
            <div className="overflow">
              <div className="reveal-footer-3">{currentYear}</div>
            </div>
          </CustomGridWrapper>
        </Container>
      </BottomLine>

      <WheelWrapper>
        <FerrisWheel ref={ferrisWheelRef}>
          {ferrisWheelItems.map((_, index) => (
            <ItemWrapper key={index} className="ferris-item">
              <img src="/emoji.svg" alt="Heart eyes emoji" />
            </ItemWrapper>
          ))}
        </FerrisWheel>
      </WheelWrapper>
    </FooterWrapper>
  )
}

export default Footer
