import React from "react"
// import FolioHeader from "../components/Portfolio/FolioHeader/FolioHeader"
import Layout from "../components/Layout/Layout"
import folioStyles from "./pageStyles/portfolio.module.scss"
import Skills from "../components/Portfolio/Skills/Skills"
import Projects from "../components/Portfolio/Projects/Projects"
import Contact from "../components/Portfolio/Contact/Contact"

function portfolio(props) {
  return (
    <div className={folioStyles.view}>
      <Layout>
        {/* <FolioHeader /> */}
        <div>
          <h1 className={folioStyles.codeJoke}>
            {"{!goodDay ? setDay(!day) : spreadTheLove()}"}
          </h1>
        </div>
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </div>
  )
}

export default portfolio
