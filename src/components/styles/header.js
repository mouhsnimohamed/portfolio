import styled from "styled-components"
import { Link } from "gatsby"

export const HeaderContainer = styled.header`
  padding: 0 0 2em;
  z-index: 1;
  position: relative;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LinkList = styled.ul`
  display: flex;
  margin: 0;
  align-self: center;
  ${({ theme }) => theme.breakpoints.tablet} {
    display: ${({ open }) => (open ? "flex" : "none")};
    background: ${({ theme }) => theme.colors.dark};
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    position: absolute;
    left: 0;
    z-index: 9;
    padding-top: 50px;
    justify-content: flex-start;
    align-items: center;
    align-self: stretch;
  }
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

export const StyledBurger = styled.button`
  transform: rotate(180deg);
  position: absolute;
  top: 8%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    display: none;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    display: flex;
  }
`
