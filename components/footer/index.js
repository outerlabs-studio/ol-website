'use client'

import { useRef, useMemo } from 'react'
import { useIsomorphicLayoutEffect, useWindowSize } from 'react-use'
import { CustomLink, CustomButton } from 'components'
import { Container, DisplayText, NormalText } from 'styles'
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
      gsap.from(footerTarget.current, {
        yPercent: -50,
        scrollTrigger: {
          trigger: footerTarget.current,
          start: 'top bottom',
          end: 'bottom+=45% bottom',
          scrub: true,
        },
      })

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
        <DisplayText>
          We{`'`}d {`<`}3 to
          <br />
          work with you
        </DisplayText>
        <CustomButton href="mailto:hello@outerlabs.studio">
          Let's talk
        </CustomButton>
      </ContentWrapper>
      <BottomLine>
        <Container>
          <CustomGridWrapper>
            <LinksWrapper>{/* Links here */}</LinksWrapper>
            <NormalText>
              25 Broadway
              <br />
              New York, NY 10004
            </NormalText>
            <CustomLink href="mailto@hello@outerlabs.studio" $reverse>
              hello@outerlabs.studio
            </CustomLink>
            <NormalText>{currentYear}</NormalText>
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
