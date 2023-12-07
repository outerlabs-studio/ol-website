'use client'

import { Container, HugeText, NormalText } from 'styles'
import {
  CustomDescription,
  CustomTitle,
  ImageWrapper,
  MarqueeWrapper,
  Project,
  ProjectList,
  ProjectWrapper,
  TopbarWrapper,
} from './styles'
import { CustomImage, Label, Marquee } from 'components'

const Projects = () => {
  return (
    <ProjectWrapper id="projects">
      <Container>
        <TopbarWrapper>
          <Label $reverse>Selected Work</Label>
          <NormalText>2021-23</NormalText>
        </TopbarWrapper>
        <ProjectList>
          <Project href="/">
            <ImageWrapper>
              <MarqueeWrapper>
                <Marquee repeat={3}>
                  <HugeText $m={'0 6vw 0 0'}>Coming&nbsp;&nbsp;Soon</HugeText>
                </Marquee>
              </MarqueeWrapper>
              <CustomImage
                src={
                  'data:image/webp;base64,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'
                }
                alt="TechCodes"
                speed={0.5}
              />
            </ImageWrapper>
            <CustomTitle>TechCodes</CustomTitle>
            <CustomDescription>Computer science nonprofit</CustomDescription>
          </Project>
          <Project href="/">
            <ImageWrapper>
              <MarqueeWrapper>
                <Marquee repeat={3}>
                  <HugeText $m={'0 6vw 0 0'}>Coming&nbsp;&nbsp;Soon</HugeText>
                </Marquee>
              </MarqueeWrapper>
              <CustomImage
                src={
                  'data:image/webp;base64,UklGRl4CAABXRUJQVlA4WAoAAAAgAAAAJQAAJQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggcAAAADAHAJ0BKiYAJgA+5VqmTakko6I1WqgBIByJYwDPoB4IC+vT5qEFU3Wa6yoRrrOZwtsQ2+bzfntNlWZuw8T5LAukAAD+8drRcsqNsMA9Eoz2uJpaBtPfPiG3ja0rhx9mOU2tz7PQd5mRXkiB8bq4AAA='
                }
                alt="Astro Studios"
                speed={0.5}
              />
            </ImageWrapper>
            <CustomTitle>Astro Studios</CustomTitle>
            <CustomDescription>A podcast company</CustomDescription>
          </Project>
          <Project href="/">
            <ImageWrapper>
              <MarqueeWrapper>
                <Marquee repeat={3}>
                  <HugeText $m={'0 6vw 0 0'}>Coming&nbsp;&nbsp;Soon</HugeText>
                </Marquee>
              </MarqueeWrapper>
              <CustomImage
                src={
                  'data:image/webp;base64,UklGRvYDAABXRUJQVlA4WAoAAAAgAAAAQgEAvgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggCAIAANAXAJ0BKkMBvwA+nU6fTaWkIqIgKUiwE4lpbt1+/xDugox0u8AUCOpOQWo+q4aZ8kL2ek8sOpOWgDqYBErVTFU6Oq2NQxYgyUIlaqY1zVOl/3iIlsGgvz836fhWUoUhov3aqXOf1nNPSw1uN563GuWc/pX3WVC9oQyfEyL8nRuS5e5CkdF7qAzenwKoyL+f9wFDrQpyV2KMp027XuPBWVODAQoiVmm9ZKJD7i1xarhpnwy+QVOdDTPhl8gqc6GmfDL5BU50KAAA/u/e3+R1MKCHP8G6+76lX/MMQ1iFbiwZaNMs7WgvDRyrUS4LtVHL8meAdM/Uw3BuoX7TtoGeSWLuzCP3aKQGd1GTclDQ4RK3hIsxnL2/UQQbbVyKBiFhfH2ohoJyATNY9f/s2d8B0YyIV+Pvsf22lXw9/PjnXyW81Wz0Pg1Oji7Dil5gh19CuL/pbgiug0Lynovffjw8vFwD+OHIIXg0F9MKYH7KyviabX6a3tap75YFVmqrhLnilTuQ/NcI0wO/Agi8pV7Dx27JunmOkFJ+Evmk/Y//1VKjc9bCFX1eEZCl6AgxmC0qMFNS1KwJSI1F65PJ2UL4NjkjiMLo7dJG1ZHG6ri5zQ+tW8JQ+s69qUFX8sifl0Kik4vgzm6yY9wCYAAACOU9AnxKL8QjdKAAAABavQAAAAAAAAAAAAAAAAA='
                }
                alt="Stop the Stigma"
                speed={0.5}
              />
            </ImageWrapper>
            <CustomTitle>Stop the Stigma</CustomTitle>
            <CustomDescription>
              Raise social awareness about mental health
            </CustomDescription>
          </Project>
          <Project href="/">
            <ImageWrapper>
              <MarqueeWrapper>
                <Marquee repeat={3}>
                  <HugeText $m={'0 6vw 0 0'}>Coming&nbsp;&nbsp;Soon</HugeText>
                </Marquee>
              </MarqueeWrapper>
              <CustomImage
                src={
                  'data:image/webp;base64,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'
                }
                alt="Sarah Khosla"
                speed={0.5}
              />
            </ImageWrapper>
            <CustomTitle>Sarah Khosla</CustomTitle>
            <CustomDescription>Portfolio</CustomDescription>
          </Project>
        </ProjectList>
      </Container>
    </ProjectWrapper>
  )
}

export default Projects
