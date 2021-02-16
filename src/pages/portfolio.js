import React from "react"
// import FolioHeader from "../components/Portfolio/FolioHeader/FolioHeader"
import Layout from "../components/Layout/Layout"
import folioStyles from "./pageStyles/portfolio.module.scss"
import Skills from "../components/Portfolio/Skills/Skills"

function portfolio(props) {
  return (
    <div className={folioStyles.view}>
      <Layout>
        {/* <FolioHeader /> */}
        {/* <p className={folioStyles.tags}>{"<h1>"}</p> */}
        <div>
          <h1 className={folioStyles.codeJoke}>
            {"{!goodDay ? setDay(!day) : spreadTheLove()}"}
          </h1>
        </div>
        {/* <p className={folioStyles.tags}>{"</h1>"}</p> */}
        <Skills />
      </Layout>
    </div>
  )
}

export default portfolio
