import React, { useState } from "react"
import { motion } from "framer-motion"
import Layout from "../components/Layout/Layout"
import Titles from "../components/Titles/Titles"
import homeStyles from "./home.module.scss"
import { Link } from "gatsby"

export default function Home() {
  const [done, setDone] = useState(false)
  const [buttons, setButtons] = useState(false)
  setTimeout(() => [setDone(true)], 3500)
  setTimeout(() => [setButtons(true)], 9500)

  return (
    <Layout>
      <div className={homeStyles.homeContainer}>
        <span className={homeStyles.welcome}>
          <div>
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
            <div>
              <p>A small blurb about me and my things that i do</p>
            </div>
            <motion.span
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 9.5, duration: 0.5 }}
            >
              <button className={homeStyles.contact}>.portfolio</button>
              <button className={homeStyles.contact}>.music</button>
              <Link to="/contact">
                <button className={homeStyles.contact}>.contact</button>
              </Link>
            </motion.span>
          </div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 9.5, duration: 0.5 }}
            src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/natewaite.jpg"
            alt="nate"
          />
        </span>
      </div>
    </Layout>
  )
}
