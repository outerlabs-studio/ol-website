'use client'

import styled from 'styled-components'
import { Z_INDEX, media } from 'styles'

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90svh;
  min-height: 50vh;
  z-index: ${Z_INDEX.projects};
  ${media.desktop`height: 85vh;`}

  img {
    object-fit: cover;
  }
`
export const OverlayWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem 0;
  top: 0;
  left: 0;
  width: 100%;
  height: inherit;
  background-color: ${({ theme }) => `rgba(${theme.text}, 0.75)`};
  color: ${({ theme }) => `rgb(${theme.accent1})`};
  border-radius: inherit;
  z-index: ${Z_INDEX.projects};
`
