'use client'

import styled from 'styled-components'
import { SectionWrapper, Z_INDEX, media } from 'styles'

export const ImagesSection = styled(SectionWrapper)`
  position: relative;
  padding: 8vw 0;
  width: 100%;
  z-index: ${Z_INDEX.projects};
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};

  ${media.thone`padding: 4rem 0;`}
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90svh;
  min-height: 50vw;

  img {
    object-fit: cover;
  }

  ${media.thone`height: 20rem;`}

  &:not(:first-child) {
    margin-top: 4vw;

    ${media.desktop`margin-top: 4rem;`}
  }
`
