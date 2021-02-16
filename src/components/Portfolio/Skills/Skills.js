import React from "react"
import skillStyles from "./skills.module.scss"
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/amazonaws.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/css3.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/express.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/gatsby.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/github.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/graphql.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/heroku.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/html5.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/javascript.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/next-dot-js.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/node-dot-js.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/postgresql.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/postman.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/react.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/reactrouter.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/redux.svg
// https://nw-portfolio-images.s3-us-west-1.amazonaws.com/sass.svg
function Skills(props) {
  return (
    <div className={skillStyles.container}>
      <h2 className={skillStyles.objTitle}>{`let mySkills = {`}</h2>
      <span className={skillStyles.topBox}>
        <span className={skillStyles.languages}>
          <h2>{`Languages : {`}</h2>
          <div className={skillStyles.iconBox}>
            <img
              className={skillStyles.js}
              src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/javascript.svg"
              alt="JS"
            />
            <img
              className={skillStyles.html}
              src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/html5.svg"
              alt="HTML"
            />
            <img
              className={skillStyles.css}
              src="https://nw-portfolio-images.s3-us-west-1.amazonaws.com/css3.svg"
              alt="CSS"
            />
          </div>
          <h2>{`}`}</h2>
        </span>
        <span className={skillStyles.client}></span>
        <span className={skillStyles.server}></span>
      </span>
      <span className={skillStyles.db}></span>
      <span className={skillStyles.other}></span>
    </div>
    // <div>
    //   HTML5 | CSS3 | Javascript | React | Redux | NodeJs | AWS (S3) | Express |
    //   Massive | Axios | PostgreSQL | Git Github | SASS | SCSS | Bcrypt | Postman
    //   | Heroku | Next.js | Gatsby.js | React Native | GraphQL | Moment.js Framer
    //   Motion | React Context | Getform | GSAP
    // </div>
  )
}

export default Skills
