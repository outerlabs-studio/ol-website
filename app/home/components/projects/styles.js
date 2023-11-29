'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { NormalText, SmallText, Z_INDEX } from 'styles'

export const ProjectWrapper = styled.section`
  position: relative;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  padding: 8vw 0;
  z-index: ${Z_INDEX.projects};
  border-radius: 50px 50px 0 0;
`
export const TopbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 5vw;
`
export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5vw;
`
export const Project = styled(Link)`
  text-decoration: none;
`
export const CustomTitle = styled(NormalText)`
  font-weight: 600;
  margin-top: 0.5rem;
  color: ${({ theme }) => `rgb(${theme.text})`};
`
export const CustomDescription = styled(SmallText)`
  color: ${({ theme }) => `rgb(${theme.accent2})`};
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30vw;
  border-radius: 40px;
  overflow: hidden;

  :hover {
    img {
      scale: 1.1;
    }
  }

  img {
    transition: scale 0.2s ease-in-out;
    border-radius: inherit;
    object-fit: cover;
    filter: blur(10px);
  }
`
export const MarqueeWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  transform: translateY(-50%);
  z-index: 9999;
`
