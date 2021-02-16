import React from "react"
import contactStyles from "./contact.module.scss"
import SocialLinks from "../../SocialLinks/SocialLinks"

function Contact(props) {
  return (
    <div className={contactStyles.container}>
      <span>
        <h1>Lets Work!</h1>
      </span>
      <SocialLinks />
    </div>
  )
}

export default Contact
