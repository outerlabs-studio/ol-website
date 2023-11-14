'use client'

import CustomButton from 'components/button'

import { useEffect, useRef } from 'react'
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
import CustomLink from 'components/link'
import gsap from 'gsap'
import { useIsomorphicLayoutEffect } from 'react-use/lib'

const Footer = () => {
  let footerTarget = useRef(null)
  let ferrisWheelRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(footerTarget.current, {
        yPercent: -50,
        scrollTrigger: {
          trigger: footerTarget.current,
          start: 'top center',
          end: 'bottom-=10px center',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let radius = 500

      let tl = gsap.timeline({
        // scrollTrigger: {
        //   trigger: footerTarget.current,
        //   start: 'top bottom',
        //   end: 'bottom top',
        // },
      })

      const itemTarget = gsap.utils.toArray('.ferris-item')

      itemTarget.forEach((itemAnim, i) => {
        let numItems = itemTarget.length
        let rotation = i * (360 / numItems)
        gsap.set(itemAnim, { left: '50%', top: '50%' })
        gsap.set(itemAnim.querySelector('img'), {
          transformOrigin: '50% 50%',
          x: radius - 40,
          y: -6,
          rotation: -rotation,
        })
        gsap.set(itemAnim, {
          transformOrigin: 'left center',
          rotation: rotation,
          width: radius,
        })
      })

      gsap.set(ferrisWheelRef.current, {
        width: radius * 2.5,
        height: radius * 2.5,
      })

      tl.to(ferrisWheelRef.current, {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: 'none',
      })

      itemTarget.forEach((itemAnim, i) => {
        tl.to(
          itemAnim.querySelector('img'),
          { rotation: '-=360', duration: 15, repeat: -1, ease: 'none' },
          0,
        )
      })
    })

    return () => ctx.revert()
  }, [])

  const currentYear = new Date()

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
              <CustomLink href="https://instagram.com/outerlabs" reverse>
                Instagram
              </CustomLink>
              <CustomLink
                href="https://www.linkedin.com/company/outerlabs"
                reverse
              >
                LinkedIn
              </CustomLink>
              <CustomLink href="https://www.dribbble.com/outerlabs" reverse>
                Dribbble
              </CustomLink>
            </LinksWrapper>
            <NormalText>
              25 Broadway
              <br />
              Floor 10 {`#1034`}
              <br />
              New York, NY 10004
            </NormalText>
            <CustomLink href="mailto@hello@outerlabs.studio" reverse>
              hello@outerlabs.studio
            </CustomLink>
            <NormalText>2023</NormalText>
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
