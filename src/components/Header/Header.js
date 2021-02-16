import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import React, { useState } from "react"
import headerStyle from "./header.module.scss"
import Menu from "./Menu"

function Header(props) {
  const [menu, setMenu] = useState(false)

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <h1>
          <AniLink
            cover
            direction="down"
            bg="#1b1924"
            style={{ textDecoration: "none" }}
            className={headerStyle.logo}
            to="/"
          >
            NW
          </AniLink>
        </h1>
        <div>
          <Menu menu={menu} closeMenu={setMenu} />
          <h1
            onClick={() => setMenu(!menu)}
            className={
              !menu ? headerStyle.burgerMenu : headerStyle.burgerMenuActive
            }
          >
            <div className={headerStyle.burgerBarOne}></div>
            <div className={headerStyle.burgerBarTwo}></div>
            <div className={headerStyle.burgerBarThree}></div>
          </h1>
        </div>
      </nav>
    </header>
  )
}

export default Header
