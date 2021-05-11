import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import React from "react"
import Layout from "../components/Layout"
import styles from "../styles/project-details.module.css"

export default function ProjectDetails() {
  return (
    <Layout>
      <div className={styles.details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={styles.featured}>
          {/* <GatsbyImage image={}></GatsbyImage> */}
        </div>
        {/* outputting inner HTML in div */}
        {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
      </div>
    </Layout>
  )
}
