import React from "react"
import Layout from "../../components/Layout"

import * as styles from "../../styles/projects.module.css"

export default function Projects() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <h3>Projects & Websites I made</h3>
      </div>
    </Layout>
  )
}
