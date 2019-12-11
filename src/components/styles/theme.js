import React from "react"
import styled, { ThemeProvider } from "styled-components"
const colors = {
  white: "#ffffff",
  gray: "rgba(255, 255, 255, 0.6)",
  black: "#121212",
  primary: "#2f89fc",
}

const theme = {
  colors,
}

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
`
export const GrayTitle = styled.h3`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 15px;
`

export const LightTitle = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 55px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 10px;
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
