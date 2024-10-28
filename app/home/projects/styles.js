'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { NormalText, Z_INDEX, media } from 'styles'

export const ProjectWrapper = styled.section`
  position: relative;
  color: ${({ theme }) => `rgb(${theme.text})`};
  z-index: ${Z_INDEX.projects};
`
export const TopbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 5vw;

  ${media.thone`padding-bottom: 4rem;`}
`
export const ProjectList = styled.div``
export const Project = styled(Link)`
  display: block;
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => `rgb(${theme.accent1})`};

  &:hover {
    img {
      scale: 1.1 !important;
    }
  }
`
export const InnerProjectContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => `rgba(${theme.text}, 0.5)`};
  z-index: ${Z_INDEX.projects + 1};
`
export const CustomTitle = styled(NormalText)`
  font-weight: 600;
  margin-top: 0.5rem;
  margin-left: 2vw;
  color: ${({ theme }) => `rgb(${theme.text})`};
`
export const CustomDescription = styled(NormalText)`
  color: ${({ theme }) => `rgb(${theme.accent2})`};
  margin-left: 2vw;
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
export const MarqueeWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  background-color: ${({ theme }) => `rgb(${theme.body})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  transform: translateY(-50%);
  z-index: 9999;
`
