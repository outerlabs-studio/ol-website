'use client'

import { useRef } from 'react'
import { useWindowSize } from 'react-use'
import { CustomLink, CustomButton } from 'components'
import { Container, breakpoints } from 'styles'
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
import { useGSAP } from '@gsap/react'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const footerTarget = useRef(null)
  const ferrisWheelRef = useRef(null)
  const { width } = useWindowSize()
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()

  if (pathname === '/contact') return null

  useGSAP(() => {
    let radius =
      width > breakpoints.thone ? (30 * width) / 100 : (55 * width) / 100

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
  }, [width])

  return (
    <FooterWrapper ref={footerTarget} id="contact" className="enabled">
      <ContentWrapper>
        <div>
          <div className="overflow">
            <div className="reveal-footer-1">We{`'`}d&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-footer-1">look</div>
          </div>
          <br />
          <div className="overflow">
            <div className="reveal-footer-1">good&nbsp;</div>
          </div>
          <div className="overflow">
            <div className="reveal-footer-1">together</div>
          </div>
        </div>

        <div className="reveal-footer-button">
          <CustomButton to="mailto:hello@outerlabs.studio" target="_blank">
            Let's talk
          </CustomButton>
        </div>
      </ContentWrapper>
      <BottomLine>
        <Container>
          <CustomGridWrapper>
            <div className="overflow item-1">
              <CustomLink
                to="mailto:hello@outerlabs.studio"
                target="_blank"
                $reverse
                className="reveal-footer-1"
              >
                hello@outerlabs.studio
              </CustomLink>
            </div>
            <LinksWrapper className="item-2">
              <div className="overflow">
                <CustomLink
                  to="https://instagram.com/outerlabs"
                  $reverse
                  target="_blank"
                  className="reveal-footer-2"
                >
                  Instagram
                </CustomLink>
              </div>
              <div className="overflow">
                <CustomLink
                  to="https://www.linkedin.com/company/outerlabs"
                  $reverse
                  target="_blank"
                  className="reveal-footer-2"
                >
                  LinkedIn
                </CustomLink>
              </div>
              <div className="overflow">
                <CustomLink
                  to="https://www.dribbble.com/outerlabs"
                  $reverse
                  target="_blank"
                  className="reveal-footer-2"
                >
                  Dribbble
                </CustomLink>
              </div>
              <div className="overflow">
                <CustomLink
                  to="https://www.github.com/outerlabs-studio"
                  $reverse
                  target="_blank"
                  className="reveal-footer-2"
                >
                  GitHub
                </CustomLink>
              </div>
            </LinksWrapper>
            <div className="overflow item-4">
              <div className="reveal-footer-3">{currentYear}</div>
            </div>
          </CustomGridWrapper>
        </Container>
      </BottomLine>

      <WheelWrapper>
        <FerrisWheel ref={ferrisWheelRef}>
          {new Array(8).fill(0).map((_, index) => (
            <ItemWrapper key={index} className="ferris-item">
              <img src="/images/emoji.webp" alt="Heart eyes emoji" />
            </ItemWrapper>
          ))}
        </FerrisWheel>
      </WheelWrapper>
    </FooterWrapper>
  )
}

export default Footer
