import { Link } from "gatsby"
import React, { useState } from "react"
import headerStyle from "./header.module.scss"
import Menu from "./Menu"

function Header(props) {
  const [menu, setMenu] = useState(false)

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <h1 className={headerStyle.logo}>NW</h1>
        <h1 onClick={() => setMenu(!menu)} className={headerStyle.burgerMenu}>
          <div className={headerStyle.burgerBarOne}></div>
          <div className={headerStyle.burgerBarTwo}></div>
          <div className={headerStyle.burgerBarThree}></div>
        </h1>
      </nav>
      <Menu menu={menu} closeMenu={setMenu} />
    </header>
  )
}

export default Header
