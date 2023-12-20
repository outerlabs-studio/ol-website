'use client'

import styled from 'styled-components'
import { Normal, Z_INDEX, media } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 8vw 0;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  z-index: ${Z_INDEX.projects};

  ${media.thone`padding: 4rem 0;`}
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8vw;

  ${media.desktop`gap: 6rem;`}
`
export const ServicesList = styled.div`
  grid-column: 3 / 4;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .reveal-services-1 {
    ${Normal}
  }

  /* ${media.thone`grid-column: 1;`} */
  ${media.phablet`grid-column: 1 / 4;`}
`
