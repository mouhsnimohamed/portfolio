import React from "react"
import styled, { ThemeProvider } from "styled-components"
const colors = {
  white: "#ffffff",
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
export default function StyledThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
