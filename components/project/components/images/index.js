'use client'

import { ImageWrapper, SectionWrapper } from './styles'
import { Container } from 'styles'
import Image from 'next/image'

const Images = ({ images }) => {
  return (
    <SectionWrapper>
      <Container>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <Image src={image.src} alt={image.alt} fill />
          </ImageWrapper>
        ))}
      </Container>
    </SectionWrapper>
  )
}

export default Images
