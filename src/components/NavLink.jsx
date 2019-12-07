import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const NavLink = ({ text, to }) => {
  return (
    <Wrapper>
      <CustomLink to={to} activeClassName="active">
        {text}
      </CustomLink>
    </Wrapper>
  )
}

NavLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string,
  mouseOver: PropTypes.func,
}

NavLink.defaultProps = {
  to: `/`,
}

export default NavLink

const CustomLink = styled(Link)`
  position: relative;
  height: 100%;
  line-height: 3rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`

const Wrapper = styled.li`
  position: relative;
  margin-left: 3rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  height: 5rem;

  .active {
    color: ${({ theme }) => theme.colors.primary};
  }
`
