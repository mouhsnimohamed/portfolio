import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderContainer = styled.header`
  padding: 0 0 2em;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LinkList = styled.ul`
  display: flex;
  margin: 0;
  align-self: center;
`
export const Logo = styled(Link)`
  line-height: 23px;
  padding: 30px 10px 10px 20px;
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  display: block;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
`
