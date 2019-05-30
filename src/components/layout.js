import React from "react"
// import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    // const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    let header
    // if (location.pathname === rootPath) {

    // } 

    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          textAlign: "center",
          borderBottom: "1px solid #e1e1e1"
        }}
      >
        <a href="https://www.thaibulksms.com" style={{
          boxShadow: "none",
          display: "block"
        }}><img src="/img/logo.webp" alt="logo" /></a>

        <hr className="hrLogo" />
        {/* {title} */}
      </h1 >
    )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, ThaibulkSMS
          {` `}
        </footer>
      </div>
    )
  }
}

export default Layout
