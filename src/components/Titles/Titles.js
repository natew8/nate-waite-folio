import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import titleStyles from "./titles.module.scss"
const titles = [
  { title: "husband" },
  { title: "father" },
  { title: "singer" },
  { title: "songwriter" },
  { title: "producer" },
  { title: "web developer" },
]
function Titles(props) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let timesRun = 0
    const interval = setInterval(() => {
      timesRun += 1
      setCount(count => count + 1)
      if (timesRun === 5) {
        clearInterval(interval)
      }
    }, 950)
    return () => clearInterval(interval)
  }, [])

  const mappedTitles = titles.map(title => {
    return (
      <motion.h1
        className={titleStyles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {title.title}
      </motion.h1>
    )
  })
  return <>{mappedTitles[count]}</>
}

export default Titles
