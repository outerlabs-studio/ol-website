'use client'

import styled from 'styled-components'
import { wtskrappa } from 'styles'

export const PageWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
`
export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  text-align: center;
`
export const MainText = styled.h1`
  font-family: ${wtskrappa.style.fontFamily};
  font-size: 41.5vw;
`
