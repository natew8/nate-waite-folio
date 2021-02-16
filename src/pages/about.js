import React from "react"
import Layout from "../components/Layout/Layout"
import aboutStyles from "./pageStyles/about.module.scss"

function about(props) {
  return (
    <Layout>
      <div className={aboutStyles.about}>
        <h1>Hi, Welcome to the about me page!</h1>
        <p className={aboutStyles.pOne}>
          For as long as I can remember I've had a passion for Creating. From
          music to science, from theatre to web development, I live for the
          magic that comes from making something that real person can enjoy.
        </p>
        <p className={aboutStyles.pTwo}>
          As a kid growing up in a musical family, I very early on became
          heavily involved in music and singing. I picked up the guitar when i
          was 11 and never put it down. From middle school all the way through
          highschool and early college my days were filled with music and
          theatre.
        </p>
        <p className={aboutStyles.pThree}>
          In my first few semesters of college studying musical theatre I
          decided that my true calling was in music production. I changed
          schools, changed degrees, and changed my focus. I started teaching
          myself how to produce music. With some incredible help along the way,
          I was able to go from knowing nothing about music production to
          executive producing a charting RnB album in 4 years.
        </p>
        <p className={aboutStyles.pFour}>
          During those years I also met someone who changed my life forever.
          Kaylie, has become the supporting pillar in my whole world. We have
          two boys, Bash and Lucas, who make our world better every day.
          Everything I do is for them.
        </p>
        <p>
          My Web development journey started only recently but has quickly
          become one of the best decisions I've ever made. Not only have I
          acquired extremely relevant and real world skills but I have found
          another avenue to produce something that can change the world. I love
          to code. I get to take ones and zeros and turn them into something you
          can experience in the real world.
        </p>
      </div>
    </Layout>
  )
}

export default about
