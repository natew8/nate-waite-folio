import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "../../styles/index.scss"
import layoutStyles from "./layout.module.scss"

function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
