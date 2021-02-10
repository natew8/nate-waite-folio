import React, { useEffect, useState } from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { motion } from "framer-motion"
import "../../styles/index.scss"
import layoutStyles from "./layout.module.scss"

function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
