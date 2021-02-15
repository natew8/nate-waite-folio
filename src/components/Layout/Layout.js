import React, { useEffect, useState } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { motion } from "framer-motion"
import "../../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import Flower from "../Flower"

function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      {/* <Flower /> */}
      <Header />
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
