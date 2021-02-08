import React from "react"
import Layout from "../components/Layout/Layout"
import homeStyles from "./home.module.scss"

const titles = [
  "Husband",
  "Father",
  "Singer",
  "Songwriter",
  "Producer",
  "Web Developer",
]
let count = 5
let current = titles[count]

export default function Home() {
  return (
    <Layout>
      <div className={homeStyles.homeContainer}>
        <span className={homeStyles.welcome}>
          <div>
            <h1>
              Hey, i'm<h1>Nate</h1>
            </h1>
            <br></br>
            <h1>Im a</h1>
            <h1>{current}</h1>
          </div>
          <img
            src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/natewaite.jpg"
            alt="nate"
          />
        </span>
      </div>
    </Layout>
  )
}
