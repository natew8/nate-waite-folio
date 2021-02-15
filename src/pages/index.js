import React, { useState } from "react"
import { motion } from "framer-motion"
import Layout from "../components/Layout/Layout"
import Titles from "../components/Titles/Titles"
import homeStyles from "./home.module.scss"
import { Link } from "gatsby"
import Flower from "../components/Flower"
import SocialLinks from "../components/SocialLinks/SocialLinks"

export default function Home() {
  const [done, setDone] = useState(false)
  setTimeout(() => [setDone(true)], 3500)

  return (
    <Layout>
      <div className={homeStyles.homeContainer}>
        <span className={homeStyles.welcome}>
          <Flower />
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
            <h1>{done ? <Titles /> : <h1>{null}</h1>}</h1>
            <div>
              <h3>
                This site was built to serve both as a portfolio for my work in
                web development, as well as an artist page for my work as a
                songwriter and music producer.
              </h3>
              <h3>Whatever brings you, welcome!</h3>
            </div>
            <motion.span
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 9.5, duration: 0.5 }}
            >
              <Link to="/portfolio">
                <button className={homeStyles.portfolio}>.portfolio</button>
              </Link>
              <button className={homeStyles.music}>.music</button>
              {/* <Link to="/contact">
                <button className={homeStyles.contact}>.contact</button>
              </Link> */}
            </motion.span>
            <SocialLinks />
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 9.5, duration: 0.5 }}
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
