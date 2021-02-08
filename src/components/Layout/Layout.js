import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "../../styles/index.scss"
import layoutStyles from "./layout.module.scss"

function Layout(props) {
  return (
    <>
      <div></div>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
