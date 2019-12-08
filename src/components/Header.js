import React from "react"
import { HeaderContainer, LinkList, Logo, HeaderWrapper } from "./styles/header"
import { MainContainer } from "./styles/theme"
import NavLink from "./NavLink"
import Routes from "../shared/Routes"
const Header = () => (
  <HeaderContainer>
    <MainContainer>
      <HeaderWrapper>
        <h1>
          <Logo to="/" title="Mohamed Mouhsni - Logo">
            Mm
          </Logo>
        </h1>
        <LinkList>
          {Routes.map(item => (
            <NavLink key={item.to} text={item.text} to={item.to} />
          ))}
        </LinkList>
      </HeaderWrapper>
    </MainContainer>
  </HeaderContainer>
)

export default Header
