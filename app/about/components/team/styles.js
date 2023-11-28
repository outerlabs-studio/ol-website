'use client'

import styled from 'styled-components'
import { Z_INDEX } from 'styles'

export const TeamSection = styled.section`
  position: relative;
  width: 100%;
  padding: 5vw 0 10vw 0;
  z-index: ${Z_INDEX.about};
  background-color: ${({ theme }) => `rgb(${theme.body})`};
  overflow: hidden;
`
export const LabelWrapper = styled.div`
  position: absolute;
`
export const TeamMemberItem = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;

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

  img {
    position: absolute;
    top: 50%;
    left: 50%;

    border-radius: inherit;
    object-fit: cover;
    overflow: hidden;
  }
`
export const MarqueeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  z-index: -1;
`
export const InformationWrapper = styled.div`
  grid-column: 3 / span 3;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* padding-bottom: 2rem; */
`
// export const PositionWrapper = styled.div`
//   grid-column: 3;
//   display: flex;
//   align-items: flex-end;
//   height: 90vh;
// `
// export const NumberWrapper = styled.div`
//   grid-column: 4;
//   display: flex;
//   align-items: flex-end;
//   height: 90vh;
// `
