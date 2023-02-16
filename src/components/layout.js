import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import "./layout.css"
import "./fonts/icomoon/style.css"
import Footer from "./Footer"
import StyledThemeProvider, {
  MainContainer,
  LayoutContainer,
} from "./styles/theme"

const Layout = ({ children }) => {
  return (
    <StyledThemeProvider>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5V24LTT"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>

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
