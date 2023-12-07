'use client'

import { Container, DisplayText, GridWrapper, MediumText } from 'styles'
import { CustomImage, Label, Marquee } from 'components'
import {
  TeamSection,
  ImageWrapper,
  MarqueeWrapper,
  TeamMemberItem,
  InformationWrapper,
  LabelWrapper,
  CustomGridWrapper,
} from './styles'

const Member = ({ image, name, pos, num }) => {
  return (
    <TeamMemberItem>
      <Container>
        <CustomGridWrapper>
          <ImageWrapper className="image-wrapper">
            <CustomImage src={image} alt={name} />
          </ImageWrapper>
          <InformationWrapper>
            <MediumText>{pos}</MediumText>
            <MediumText>{num}/4</MediumText>
          </InformationWrapper>
        </CustomGridWrapper>
      </Container>
      <MarqueeWrapper>
        <Marquee repeat={4} duration={3}>
          <DisplayText $m={'0 6vw 0 0'}>{name}</DisplayText>
        </Marquee>
      </MarqueeWrapper>
    </TeamMemberItem>
  )
}

const Team = () => {
  return (
    <TeamSection>
      <Container>
        <LabelWrapper>
          <Label $reverse>Team</Label>
        </LabelWrapper>
      </Container>
      <Member
        name="Kyrylo Orlov"
        image="/kyrylo.jpg"
        pos="Founding Director"
        num={1}
      />
      <Member
        name="Jonathan Lin"
        image="/jonathan.webp"
        pos="Lead Brand Designer"
        num={2}
      />
      <Member
        name="Ismaeel Akram"
        image="/ismaeel.jpg"
        pos="Lead App Developer"
        num={3}
      />
      <Member
        name="Chanul Dandeniya"
        image="/chanul.jpg"
        pos="Creative director"
        num={4}
      />
    </TeamSection>
  )
}
export default Team
