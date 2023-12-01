'use client'

import { useRef } from 'react'
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
  BackgroundBlur,
  WheelWrapper,
} from './styles'
import gsap from 'gsap'

const Footer = () => {
  let footerTarget = useRef(null)
  let ferrisWheelRef = useRef(null)
  const { width } = useWindowSize()
  const currentYear = new Date().getFullYear()

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
      itemTarget.forEach((item, i) => {
        let numItems = itemTarget.length
        let rotation = i * (360 / numItems)
        gsap.set(item, { left: '50%', top: '50%' })
        gsap.set(item.querySelector('img'), {
          transformOrigin: '50% 50%',
          x: radius - 40,
          y: -6,
          rotation: -rotation,
        })
        gsap.set(item, {
          transformOrigin: 'left center',
          rotation: rotation,
          width: radius,
        })
      })

      gsap.set(ferrisWheelRef.current, {
        width: radius * 2,
        height: radius * 2,
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
    <FooterWrapper ref={footerTarget}>
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
            <LinksWrapper>
              <CustomLink href="https://instagram.com/outerlabs" $reverse>
                Instagram
              </CustomLink>
              <CustomLink
                href="https://www.linkedin.com/company/outerlabs"
                $reverse
              >
                LinkedIn
              </CustomLink>
              <CustomLink href="https://www.dribbble.com/outerlabs" $reverse>
                Dribbble
              </CustomLink>
            </LinksWrapper>
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

      <BackgroundBlur />
      <WheelWrapper>
        <FerrisWheel ref={ferrisWheelRef}>
          <ItemWrapper className="ferris-item">
            <img src="/emoji.svg" alt="Heart eyes emoji" />
          </ItemWrapper>
          <ItemWrapper className="ferris-item">
            <img src="/emoji.svg" alt="Heart eyes emoji" />
          </ItemWrapper>
          <ItemWrapper className="ferris-item">
            <img src="/emoji.svg" alt="Heart eyes emoji" />
          </ItemWrapper>
          <ItemWrapper className="ferris-item">
            <img src="/emoji.svg" alt="Heart eyes emoji" />
          </ItemWrapper>
          <ItemWrapper className="ferris-item">
            <img src="/emoji.svg" alt="Heart eyes emoji" />
          </ItemWrapper>
          <ItemWrapper className="ferris-item">
            <img src="/emoji.svg" alt="Heart eyes emoji" />
          </ItemWrapper>
          <ItemWrapper className="ferris-item">
            <img src="/emoji.svg" alt="Heart eyes emoji" />
          </ItemWrapper>
          <ItemWrapper className="ferris-item">
            <img src="/emoji.svg" alt="Heart eyes emoji" />
          </ItemWrapper>
        </FerrisWheel>
      </WheelWrapper>
    </FooterWrapper>
  )
}

export default Footer
