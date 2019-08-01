import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MenuIcon from "./MenuIcon"
import { HeaderStyles } from "./styled/Header"

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Link id="logo" to="/">
      <MenuIcon />
    </Link>
    <div id="menu">
      <h2>
        <Link
          to="/about"
          style={{
            color: `#54264D`,
            textDecoration: `none`,
          }}
        >
          about
        </Link>
      </h2>
    </div>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
