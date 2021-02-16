import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import contactStyles from "./contact.module.scss"

function Contact(props) {
  return (
    <div className={contactStyles.container}>
      <span>
        <h1>Lets Work!</h1>
        <AniLink
          className={contactStyles.link}
          cover
          direction="right"
          to="/contact"
          style={{ textDecoration: "none" }}
        >
          <div className={contactStyles.button}>Contact Me</div>
        </AniLink>
      </span>
    </div>
  )
}

export default Contact
