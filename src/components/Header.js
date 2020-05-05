import React, { useState } from "react"
import {
  HeaderContainer,
  LinkList,
  Logo,
  HeaderWrapper,
  StyledBurger,
} from "./styles/header"
import { MainContainer } from "./styles/theme"
import NavLink from "./NavLink"
import Routes from "../shared/Routes"
const Header = () => {
  const [open, setOpen] = useState(false)
  return (
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
          {/* <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </StyledBurger> */}
        </HeaderWrapper>
      </MainContainer>
    </HeaderContainer>
  )
}

export default Header
