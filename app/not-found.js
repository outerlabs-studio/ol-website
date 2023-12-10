'use client'

import { Container, Huge, media } from 'styles'
import styled from 'styled-components'
import { wtskrappa } from 'styles'
import { CustomButton } from 'components'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

export const PageWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
`
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .reveal-404-1 {
    font-family: ${wtskrappa.style.fontFamily};
    font-size: 27.2vw;
    font-weight: normal;
    line-height: 90%;
    color: ${({ theme }) => `rgb(${theme.text})`};
    -webkit-font-smoothing: antialiased;
    white-space: nowrap;

    ${media.thone`font-size: 26.4vw;`}
    ${media.phablet`font-size: 25.6vw;`}
  }
  .top-line {
    display: flex;
    justify-content: space-between;
  }
  .bottom-line {
    margin-top: -3vw;
    margin-bottom: -3vw;
  }
`
export const ButtonWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 60%;
  transform: translate(-60%, -40%);

  ${media.thone`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}

  a {
    padding: 0.75vw 5vw;
    border-radius: 80vw;

    ${media.desktop`border-radius: 80px;`}

    div {
      ${Huge}
    }
  }
`

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFoundPage() {
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.from(gsap.utils.toArray('.reveal-404-1'), {
        yPercent: 100,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.inOut',
      }).fromTo(
        '.reveal-404-2',
        {
          scale: 0,
        },
        { scale: 1, duration: 1, ease: 'power3.inOut' },
        0.25,
      )
    })

    return () => ctx.revert()
  }, [])
  return (
    <PageWrapper>
      <Container>
        <ButtonWrapper>
          <CustomButton href="/" className="reveal-404-2" $reverse>
            Return home
          </CustomButton>
        </ButtonWrapper>
        <ContentWrapper>
          <div className="top-line">
            <div className="overflow">
              <div className="reveal-404-1">ERROR&nbsp;</div>
            </div>
            <div className="overflow">
              <div className="reveal-404-1">404</div>
            </div>
          </div>
          <div className="bottom-line">
            <div className="overflow">
              <div className="reveal-404-1">PAGE&nbsp;</div>
            </div>
            <div className="overflow">
              <div className="reveal-404-1">NOT&nbsp;</div>
            </div>
            <div className="overflow">
              <div className="reveal-404-1">FOUND</div>
            </div>
          </div>
        </ContentWrapper>
      </Container>
    </PageWrapper>
  )
}
