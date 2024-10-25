'use client'

import styled from 'styled-components'
import { media, SectionWrapper, Z_INDEX } from 'styles'

export const ListSectionWrapper = styled(SectionWrapper)`
  padding: 5vw 0;
  z-index: ${Z_INDEX.article};
  background-color: ${({ theme }) => `rgb(${theme.body})`};

  ${media.tablet`padding: 5rem 0;`}
`
export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3vw;

  ${media.tablet`
    gap: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media.thone`grid-template-columns: 1fr;`}
`
export const BlogItem = styled.a`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  height: 40vw;
  color: ${({ theme }) => `rgb(${theme.text})`};

  ${media.tablet`height: 55vh;`}
  ${media.thone`height: 70vh;`}

  &:hover {
    img {
      scale: 1.1 !important;
    }
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    object-fit: cover;
    transition: scale 0.75s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`
