'use client'

import styled from 'styled-components'
import { SectionWrapper, Z_INDEX, media } from 'styles'

export const TeamSection = styled(SectionWrapper)`
  width: 100%;
  padding: 5vw 0 10vw 0;
  z-index: ${Z_INDEX.team};
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  overflow-x: hidden;

  ${media.tablet`
    display: flex;
    flex-direction: column;
    gap: 5rem;
  `}
`
export const LabelWrapper = styled.div`
  position: absolute;

  ${media.tablet`padding-bottom: 4rem;`}
`
export const TeamMemberItem = styled.div`
  position: relative;
  height: 100vh;

  ${media.tablet`height: auto;`}
`
export const ImageWrapper = styled.div`
  position: absolute;
  left: 50%;
  width: 40vw;
  height: 100vh;
  z-index: ${Z_INDEX.about + 1};
  top: 0;
  transform: translateX(-50%);

  ${media.desktop`
    width: 60vw;
  `}
  ${media.tablet`
    position: relative;
    grid-column: 1 / span 4;
    width: 100%;
    height: 70vh;
    border-radius: 0!important;
  `}
`
export const MarqueeWrapper = styled.div`
  position: absolute;
  width: 100%;

  .marquee-top,
  .marquee-top {
    opacity: 0;

    ${media.tablet`opacity: 1;`}
  }

  &.top {
    top: 45%;
    right: 0;
    transform: translateY(-45%);
    z-index: -1;

    ${media.tablet`z-index: ${Z_INDEX.about + 2};`}
  }
  &.bottom {
    top: 65%;
    left: 0;
    transform: translateY(-65%);
    z-index: ${Z_INDEX.about + 2};
  }
`
