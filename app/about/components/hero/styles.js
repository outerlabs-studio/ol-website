'use client'

import styled from 'styled-components'
import { Container, MediumText } from 'styles'

export const HeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
`
export const CustomContainer = styled(Container)`
  width: 100%;
  height: 100%;
`
export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const LabelBlob = styled(MediumText)`
  width: fit-content;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  border-radius: 60px;
`
