import React from "react"
import headerStyle from "./header.module.scss"

function Header(props) {
  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <h1 className={headerStyle.navTitle}>Nate Waite</h1>
        <div className={headerStyle.burgerMenu}>
          <div className={headerStyle.burgerBarOne}></div>
          <div className={headerStyle.burgerBarTwo}></div>
          <div className={headerStyle.burgerBarThree}></div>
        </div>
      </nav>
      {/* <ul className={headerStyle.ul}>
          <li className={headerStyle.listItem}>Music</li>
          <li className={headerStyle.listItem}>bio</li>
          <li className={headerStyle.listItem}>news</li>
        </ul> */}
      {/* <ul className={headerStyle.ul}>
          <li className={headerStyle.listItem}>Projects</li>
          <li className={headerStyle.listItem}>Skills</li>
          <li className={headerStyle.listItem}>contact</li>
        </ul> */}
    </header>
  )
}

export default Header
