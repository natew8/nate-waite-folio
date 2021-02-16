import React, { useState } from "react"
import { motion } from "framer-motion"
import Layout from "../components/Layout/Layout"
import Titles from "../components/Titles/Titles"
import homeStyles from "./pageStyles/home.module.scss"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Flower from "../components/Flower"
import SocialLinks from "../components/SocialLinks/SocialLinks"

export default function Home() {
  const [done, setDone] = useState(false)
  setTimeout(() => [setDone(true)], 3500)

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
              transition={{ delay: 1.51, duration: 1.5 }}
            >
              I'm
              <h1 className={homeStyles.myName}>Nate</h1>,
            </motion.h1>
            <h1>{done ? <Titles /> : <h1>{null}</h1>}</h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 8, duration: 0.5 }}
            >
              <h2>
                Utah based, Full Stack Web Developer working to make the world a
                more creative place through code and music.
              </h2>
              <h3>
                This site was built to serve both as a portfolio for my work in
                web development, as well as an artist page for my work as a
                songwriter and music producer.
              </h3>
              <h3>Whatever brings you, welcome!</h3>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 8, duration: 0.5 }}
            >
              <AniLink cover direction="left" bg="#c97064" to="/portfolio">
                <button className={homeStyles.portfolio}>.portfolio</button>
              </AniLink>
              {/* <AniLink cover direction="right" bg="black" to="/music"> */}
              <button
                onClick={() => alert("Coming Soon!")}
                className={homeStyles.music}
              >
                .music
              </button>
              {/* </AniLink> */}
              {/* <Link to="/contact">
                <button className={homeStyles.contact}>.contact</button>
              </Link> */}
            </motion.span>
            <SocialLinks />
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 8, duration: 0.5 }}
            className={homeStyles.photoContainer}
          >
            <img
              className={homeStyles.picture}
              src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/natewaite.jpg"
              alt="me"
            />
          </motion.div>
        </span>
      </div>
    </Layout>
  )
}
