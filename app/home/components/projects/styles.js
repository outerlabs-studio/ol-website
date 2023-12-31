'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { NormalText, SmallText, Z_INDEX, media } from 'styles'

export const ProjectWrapper = styled.section`
  position: relative;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  padding: 8vw 0;
  z-index: ${Z_INDEX.projects};
  /* border-radius: 3vw 3vw 0 0; */

  ${media.thone`padding: 4rem 0;`}
`
export const TopbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 5vw;

  ${media.thone`padding-bottom: 4rem;`}
`
export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 3vw;
  column-gap: 1.5vw;

  ${media.thone`
    grid-template-columns: 1fr;
    gap: 2rem;
  `}
`
export const Project = styled(Link)`
  text-decoration: none;

  &:hover {
    img {
      scale: 1.1 !important;
    }
  }
`
export const CustomTitle = styled(NormalText)`
  font-weight: 600;
  margin-top: 0.5rem;
  margin-left: 2vw;
  color: ${({ theme }) => `rgb(${theme.text})`};
`
export const CustomDescription = styled(SmallText)`
  color: ${({ theme }) => `rgb(${theme.accent2})`};
  margin-left: 2vw;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30vw;
  border-radius: 2vw;
  overflow: hidden;

  ${media.thone`height: 80vw;`}

  img {
    border-radius: inherit;
    object-fit: cover;
    transition: scale 0.75s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`
export const MarqueeWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  background-color: ${({ theme }) => `rgb(${theme.body})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  transform: translateY(-50%);
  z-index: 9999;
`
