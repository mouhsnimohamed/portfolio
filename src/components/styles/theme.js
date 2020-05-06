import React from "react"
import styled, { ThemeProvider } from "styled-components"
import breakpoints from "../../shared/breakpoints"
const colors = {
  white: "#ffffff",
  gray: "rgba(255, 255, 255, 0.6)",
  transparent: "rgba(255, 255, 255, 0.1)",
  dark: "#0a192f",
  primary: "#1aa0cb",
  text: "#8c8c8c",
}

const theme = {
  colors,
  breakpoints: breakpoints,
}

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 0 25px;
  }
`
export const LayoutContainer = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  font-family: "Poppins", Arial, sans-serif;
  overflow: hidden;
  width: 100%;
  font-size: 18px;
  line-height: 1.8;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;

  &:after {
    position: fixed;
    top: -150px;
    right: -50px;
    bottom: 0;
    content: "";
    width: 400px;
    height: 600px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transform: rotate(-30deg);
  }
  &:before {
    position: fixed;
    top: 500px;
    left: -100px;
    bottom: 0;
    content: "";
    width: 400px;
    height: 400px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transform: rotate(20deg);
  }
`

export const Highlighted = styled.code`
  color: ${({ theme }) => theme.colors.primary};
`

export const GrayTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray};
  text-align: ${({ align }) => align || "left"};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 15px;
`

export const LightTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ align }) => align || "left"};
  font-size: ${({ primary }) => (!primary ? "40px" : "55px")};
  line-height: 1.2;
  font-weight: 700;
  text-transform: ${({ primary }) => (!primary ? "none" : "uppercase")};
  letter-spacing: ${({ primary }) => (!primary ? "2px" : "10px")};
`

export const StrokeTitle = styled.h2`
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.white};
  -moz-text-stroke: 2px ${({ theme }) => theme.colors.white};
  -ms-text-stroke-width: 2px ${({ theme }) => theme.colors.white};
  color: transparent;
  font-size: 55px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 10px;
`

export default function StyledThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
