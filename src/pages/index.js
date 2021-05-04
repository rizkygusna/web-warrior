import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

import * as styles from "../styles/home.module.css"

//gatsby automatically create data prop consist of data query from graphql
export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
            corporis!
          </p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  )
}

//query site info from graphql
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
