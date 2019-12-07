import { Link } from "gatsby"
import React from "react"
import { HeaderContainer, LinkList, Logo } from "./styles/header"
import { MainContainer } from "./styles/theme"
import NavLink from "./NavLink"
import Routes from "../shared/Routes"
const Header = () => (
  <HeaderContainer>
    <MainContainer>
      <Link to="/">
        <Logo title="Mohamed Mouhsni - Logo" />
      </Link>
      <LinkList>
        {Routes.map(item => (
          <NavLink key={item.to} text={item.text} to={item.to} />
        ))}
      </LinkList>
    </MainContainer>
  </HeaderContainer>
)

export default Header
