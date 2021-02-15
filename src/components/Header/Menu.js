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
        <div className={menuStyles.line}></div>
        <li>
          <AniLink
            className={menuStyles.link}
            cover
            direction="right"
            bg="#1b1924"
            to="/portfolio"
          >
            .portfolio
          </AniLink>
        </li>
        <div
          className={menuStyles.line}
          cover
          direction="right"
          bg="#1b1924"
          to="/music"
        ></div>
        <li>
          <AniLink className={menuStyles.link}>.music</AniLink>
        </li>
        <div
          className={menuStyles.line}
          cover
          direction="right"
          bg="#1b1924"
        ></div>
        <li>
          <AniLink
            className={menuStyles.link}
            direction="right"
            bg="#1b1924"
            style={{ textDecoration: "none" }}
            to="/about"
          >
            .about
          </AniLink>
        </li>
        <div className={menuStyles.line}></div>
        <li>
          <AniLink
            className={menuStyles.link}
            cover
            direction="right"
            to="/contact"
          >
            .contact
          </AniLink>
        </li>
      </ul>
    </div>
  )
}

export default menu
