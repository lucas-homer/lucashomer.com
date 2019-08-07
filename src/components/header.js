import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MenuIcon from "./MenuIcon"
import { HeaderStyles } from "./styled/Header"
import posed from "react-pose"

const H3 = posed.h3({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 },
})

const Header = props => {
  return (
    <HeaderStyles>
      <Link style={{ textDecoration: `none` }} className="logo" to="/">
        <MenuIcon />
      </Link>

      <menu>
        <Link key="about" style={{ textDecoration: `none` }} to="/about">
          <H3>about</H3>
        </Link>

        <Link key="blog" style={{ textDecoration: `none` }}>
          <H3>blog</H3>
        </Link>

        <Link key="projects" style={{ textDecoration: `none` }}>
          <H3>projects</H3>
        </Link>
      </menu>
    </HeaderStyles>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
