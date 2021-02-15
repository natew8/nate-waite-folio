import React from "react"
import { motion } from "framer-motion"
import socialStyles from "./social.module.scss"
import { Link } from "gatsby"

function SocialLinks(props) {
  return (
    <motion.span
      className={socialStyles.iconContainer}
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 9.5, duration: 0.5 }}
    >
      <a target="_blank" rel="noreferrer" href="https://github.com/natew8">
        <img
          id={socialStyles.github}
          className={socialStyles.icon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/github.svg"
          alt="github"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/natew8/"
      >
        <img
          id={socialStyles.linked}
          className={socialStyles.icon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/linkedin.svg"
          alt="linkedIn"
        />
      </a>
      <Link to="/contact">
        <img
          id={socialStyles.email}
          className={socialStyles.icon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/gmail.svg"
          alt="Email"
        />
      </Link>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/natew8/"
      >
        <img
          id={socialStyles.ig}
          className={socialStyles.icon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/instagram.svg"
          alt="IG"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://open.spotify.com/artist/57MyPA2CqgcigML6JnIixn?si=DiuUjiZtRwq8PWTBPQGCHQ"
      >
        <img
          id={socialStyles.spotify}
          className={socialStyles.icon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/spotify.svg"
          alt="Spotify"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://music.apple.com/us/artist/nate-waite/1471148574"
      >
        <img
          id={socialStyles.apple}
          className={socialStyles.icon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/applemusic.svg"
          alt="AppleMusic"
        />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/channel/UCq3wQFwdBIa_xCFHQvS8G2A/featured"
      >
        <img
          id={socialStyles.youtube}
          className={socialStyles.icon}
          src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/youtube.svg"
          alt="youtube"
        />
      </a>
    </motion.span>
  )
}

export default SocialLinks
