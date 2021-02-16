import React from "react"
import headStyles from "./folioHead.module.scss"

function FolioHeader(props) {
  return (
    <header className={headStyles.head}>
      <nav className={headStyles.nav}>
        <ul>
          <a className={headStyles.pageNav}>Skills</a>
          <a className={headStyles.pageNav}>Projects</a>
          <a className={headStyles.pageNav}>WIP</a>
        </ul>
      </nav>
    </header>
  )
}

export default FolioHeader
