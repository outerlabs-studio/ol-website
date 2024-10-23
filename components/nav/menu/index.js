import { Container, NormalText } from 'styles'
import {
  ContactWrapper,
  CustomGrid,
  MenuLink,
  MenuLinksWrapper,
  MenuWrapper,
} from './styles'

const Menu = ({ links, menuOpen }) => {
  return (
    <MenuWrapper menuOpen={menuOpen}>
      <Container>
        <CustomGrid>
          <MenuLinksWrapper>
            {links.map((item, index) => (
              <MenuLink key={index} href={item.href}>
                {item.text}
              </MenuLink>
            ))}
          </MenuLinksWrapper>
          <ContactWrapper>
            <NormalText>Get in touch</NormalText>
            <a href="mailto:hello@bust.studio">hello@bust.studio</a>
          </ContactWrapper>
        </CustomGrid>
      </Container>
    </MenuWrapper>
  )
}

export default Menu
