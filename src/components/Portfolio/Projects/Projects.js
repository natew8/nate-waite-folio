import React from "react"
import projectStyles from "./projects.module.scss"

const projects = [
  {
    id: 1,
    image:
      "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/Project+Screen+Shots/Screen+Shot+2021-02-16+at+1.08.13+AM.png",
    title: "Colab",
    summary:
      "My first full-stack web application. Colab provides music production teams with all of the tools necessary to stay organized and productive in a day when working together can be hard. Utilizing Colab users can create projects, build production teams, share song versions, and stay in constant communication throughout the production process.",
    tech:
      "React | Redux | CSS | Axios | Framer-Motion | Moment.js | Wavesurfer.js | Amazon S3 | NodeJS | Express | PostgreSQL ",
    github: "https://github.com/natew8/colab-app-2.git",
    site: "http://143.110.157.56:5555/#/",
  },
  {
    id: 2,
    image:
      "https://nw-portfolio-images.s3-us-west-1.amazonaws.com/Project+Screen+Shots/SavvyT2.png",
    title: "Savvy Travels",
    summary:
      "My first team application. Savvy Travels is a flight finding web application built for the last minute adventurer. A user is able to give the application a trip budget and Savvy Travels will return all of the flights in that price range. Utilizing the users ip address Savvy Travels can also make suggestions based on the users closest airport. ",
    tech:
      "React | Redux | React Context |  SCSS | Amazon S3 | Mapbox API | Skyscanner API | Moment.js  | Axios | NodeJs | Nodemailer | Express | PostgreSQL",
    github: "https://github.com/savvy-travels/ssavvy-travels-app",
    site: "https://savvytravels.netlify.app/#/",
  },
]

function Projects(props) {
  const mappedProjects = projects.map(proj => {
    return (
      <div key={proj.id} className={projectStyles.projectContainer}>
        <img src={proj.image} alt="Project" />
        <span className={projectStyles.infoBox}>
          <h1>{proj.title}</h1>
          <p>{proj.summary}</p>
          <p className={projectStyles.techUsed}>{proj.tech}</p>
          <span>
            <a target="_blank" rel="noreferrer" href={proj.github}>
              <button>View Code</button>
            </a>
            <a target="_blank" rel="noreferrer" href={proj.site}>
              <button>visit Site</button>
            </a>
          </span>
          <h6>Note: Responsive design still under construction.</h6>
        </span>
      </div>
    )
  })
  return (
    <div>
      <h1 className={projectStyles.projectsHeader}>Projects</h1>
      <div className={projectStyles.arrow}></div>
      <div className={projectStyles.projects}>{mappedProjects}</div>
    </div>
  )
}

export default Projects
