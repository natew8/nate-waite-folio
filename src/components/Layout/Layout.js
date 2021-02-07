import React from "react"
import Header from "../Header/Header"
import layoutStyles from "./layout.module.scss"

function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div>
        <Header />
        {props.children}
      </div>
    </div>
  )
}

export default Layout
