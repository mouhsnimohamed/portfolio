import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "./layout.css"
import "./fonts/icomoon/style.css"
import Footer from "./Footer"
import StyledThemeProvider, {
  MainContainer,
  LayoutContainer,
} from "./styles/theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledThemeProvider>
      <LayoutContainer>
        <Header />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </LayoutContainer>
    </StyledThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
