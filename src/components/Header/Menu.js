import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import menuStyles from "./menu.module.scss"

function menu(props) {
  const { closeMenu, menu } = props
  return (
    <div
      id={menuStyles.container}
      className={menu ? menuStyles.show : menuStyles.hide}
    >
      <ul>
        <li className={menuStyles.link}>
          <AniLink
            className={menuStyles.link}
            cover
            direction="right"
            bg="#1b1924"
            to="/portfolio"
            style={{ textDecoration: "none" }}
          >
            .portfolio
            <div className={menuStyles.line}></div>
          </AniLink>
        </li>
        <div className={menuStyles.divideLine}></div>
        <li className={menuStyles.link}>
          <AniLink
            className={menuStyles.link}
            cover
            direction="right"
            bg="#1b1924"
            to="/music"
            style={{ textDecoration: "none" }}
          >
            .music
            <div className={menuStyles.line}></div>
          </AniLink>
        </li>
        <div className={menuStyles.divideLine}></div>
        <li className={menuStyles.link}>
          <AniLink
            className={menuStyles.link}
            cover
            direction="right"
            bg="#1b1924"
            style={{ textDecoration: "none" }}
            to="/about"
          >
            .about
            <div className={menuStyles.line}></div>
          </AniLink>
        </li>
        <div className={menuStyles.divideLine}></div>
        <li className={menuStyles.link}>
          <AniLink
            className={menuStyles.link}
            cover
            direction="right"
            to="/contact"
            style={{ textDecoration: "none" }}
          >
            .contact
            <div className={menuStyles.line}></div>
          </AniLink>
        </li>
      </ul>
    </div>
  )
}

export default menu
