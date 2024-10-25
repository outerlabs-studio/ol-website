'use client'

import { Container, NormalText } from 'styles'
import {
  BlogItem,
  ImageWrapper,
  ListSectionWrapper,
  ListWrapper,
} from './styles'
import { CustomImage } from 'components'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from 'lib'

const List = ({ data }) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <ListSectionWrapper>
      <Container>
        <ListWrapper>
          {data?.map((blog, index) => (
            <BlogItem
              key={index}
              href={`/journal/${blog.slug}`}
              onClick={(e) => {
                e.preventDefault()
                animatePageOut(`/journal/${blog.slug}`, router, pathname)
              }}
            >
              <ImageWrapper>
                <Image
                  src={blog.hero_image.url}
                  alt={blog.hero_image.alternativeText}
                  fill
                />
              </ImageWrapper>
              <NormalText>{blog.title}</NormalText>
            </BlogItem>
          ))}
        </ListWrapper>
      </Container>
    </ListSectionWrapper>
  )
}

export default List
