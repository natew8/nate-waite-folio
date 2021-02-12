import React, { useState } from "react"
import { motion } from "framer-motion"
import Layout from "../components/Layout/Layout"
import Titles from "../components/Titles/Titles"
import homeStyles from "./home.module.scss"
import { Link } from "gatsby"
import Flower from "../components/Flower"

export default function Home() {
  const [done, setDone] = useState(false)
  const [buttons, setButtons] = useState(false)
  setTimeout(() => [setDone(true)], 3500)
  setTimeout(() => [setButtons(true)], 9500)

  return (
    <Layout>
      <div className={homeStyles.homeContainer}>
        <span className={homeStyles.welcome}>
          <div id={homeStyles.divText}>
            <motion.h1
              initial={{ opacity: 0, translateY: -100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1.5 }}
            >
              Hey,
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              I'm
              <h1 className={homeStyles.myName}>Nate,</h1>
            </motion.h1>
            <h1>{done ? <Titles /> : <h1></h1>}</h1>
            <motion.span
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 9.5, duration: 0.5 }}
            >
              <Link to="/portfolio">
                <button className={homeStyles.contact}>.portfolio</button>
              </Link>
              <button className={homeStyles.contact}>.music</button>
              <Link to="/contact">
                <button className={homeStyles.contact}>.contact</button>
              </Link>
            </motion.span>
            <motion.span
              className={homeStyles.iconContainer}
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 9.5, duration: 0.5 }}
            >
              {/* <a href="https://github.com/natew8"> */}
              <img
                id={homeStyles.github}
                className={homeStyles.icon}
                src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/github.svg"
                alt="github"
              />
              {/* </a>
              <a href="https://www.linkedin.com/in/natew8/"> */}
              <img
                id={homeStyles.linked}
                className={homeStyles.icon}
                src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/linkedin.svg"
                alt="linkedIn"
              />
              {/* </a>
              <a href="https://www.instagram.com/natew8/"> */}
              <img
                id={homeStyles.ig}
                className={homeStyles.icon}
                src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/instagram.svg"
                alt="IG"
              />
              {/* </a>
              <a href="https://open.spotify.com/artist/57MyPA2CqgcigML6JnIixn?si=DiuUjiZtRwq8PWTBPQGCHQ"> */}
              <img
                id={homeStyles.spotify}
                className={homeStyles.icon}
                src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/spotify.svg"
                alt="Spotify"
              />
              {/* </a>
              <a href="https://music.apple.com/us/artist/nate-waite/1471148574"> */}
              <img
                id={homeStyles.apple}
                className={homeStyles.icon}
                src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/applemusic.svg"
                alt="AppleMusic"
              />
              {/* </a>
              <a href="https://www.youtube.com/channel/UCq3wQFwdBIa_xCFHQvS8G2A/featured"> */}
              <img
                id={homeStyles.youtube}
                className={homeStyles.icon}
                src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/youtube.svg"
                alt="youtube"
              />
              {/* </a> */}
            </motion.span>
          </div>
          <Flower />
        </span>
      </div>
    </Layout>
  )
}
