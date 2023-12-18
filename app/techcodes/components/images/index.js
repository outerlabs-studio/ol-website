'use client'

import { ImageWrapper, SectionWrapper } from './styles'
import { Container } from 'styles'
import Image from 'next/image'

const Images = () => {
  return (
    <SectionWrapper>
      <Container>
        <ImageWrapper>
          <Image src="/techcodes-2.webp" alt="TechCodes brochure" fill />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/techcodes-4.webp"
            alt="TechTalks posters and branding"
            fill
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/techcodes-5.webp"
            alt="Code Overflow Figma mockups"
            fill
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image src="/techcodes-6.webp" alt="TechCodes About Page" fill />
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  )
}

export default Images
