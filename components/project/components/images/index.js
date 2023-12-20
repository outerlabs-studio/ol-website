'use client'

import { ImageWrapper, SectionWrapper } from './styles'
import { Container } from 'styles'
import Image from 'next/image'
import { blurHashToDataURL } from 'lib'

const Images = ({ images }) => {
  return (
    <SectionWrapper>
      <Container>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              placeholder={image.blur ? 'blur' : 'empty'}
              blurDataURL={image.blur ? blurHashToDataURL(image.blur) : null}
              fill
            />
          </ImageWrapper>
        ))}
      </Container>
    </SectionWrapper>
  )
}

export default Images
