'use client'

import styled from 'styled-components'
import { GridWrapper, Z_INDEX, media } from 'styles'

export const TeamSection = styled.section`
  position: relative;
  width: 100%;
  padding: 5vw 0 10vw 0;
  z-index: ${Z_INDEX.about};
  background-color: ${({ theme }) => `rgb(${theme.body})`};
  overflow-x: hidden;
`
export const CustomGridWrapper = styled(GridWrapper)`
  ${media.thone`gap: 1rem;`}
`
export const LabelWrapper = styled.div`
  position: absolute;

  ${media.desktop`
    position: relative;
    padding-bottom: 5vw;
  `}
  ${media.thone`padding-bottom: 4rem;`}
`
export const TeamMemberItem = styled.div`
  position: relative;
  height: 100vh;

  ${media.thone`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  `}

  &:nth-child(2) {
    .image-wrapper {
      border-radius: 30px 30px 0 0;
    }
  }
  &:last-child {
    .image-wrapper {
      border-radius: 0 0 30px 30px;
    }
  }
`
export const ImageWrapper = styled.div`
  position: absolute;
  grid-column: 2;
  width: 30vw;
  height: 100vh;
  z-index: ${Z_INDEX.about + 1};
  top: 0;

  ${media.desktop`
    grid-column: 1 / 3;
    width: 100%;
  `}
  ${media.thone`
    position: relative;
    grid-column: 1 / span 4;
    width: 100%;
    height: 70vh;
    border-radius: 0!important;
  `}
`
export const MarqueeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  z-index: -1;

  ${media.thone`
    position: relative;
    top: 0;
    transofrm: translateY(0);
    margin-bottom: -1rem;
  `}
`
export const InformationWrapper = styled.div`
  grid-column: 3 / span 3;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${media.thone`
    grid-column: 1 / span 4;
    height: unset;
  `}
`
