import React from "react"
import menuStyles from "./menu.module.scss"

function menu(props) {
  const { closeMenu, menu } = props
  return (
    <div
      id={menuStyles.container}
      className={menu ? menuStyles.show : menuStyles.hide}
    >
      <h1 onClick={() => closeMenu(!menu)}>&times;</h1>
      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default menu