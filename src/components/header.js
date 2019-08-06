import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MenuIcon from "./MenuIcon"
import { HeaderStyles } from "./styled/Header"

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Link style={{ textDecoration: `none` }} className="logo" to="/">
      <MenuIcon />
    </Link>
    <menu>
      <h3>
        <Link style={{ textDecoration: `none` }} to="/about">
          about
        </Link>
      </h3>
      <h3>
        <Link style={{ textDecoration: `none` }}>blog</Link>
      </h3>
      <h3>
        <Link style={{ textDecoration: `none` }}>projects</Link>
      </h3>
    </menu>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
