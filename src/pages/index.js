import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  const banner = getImage(data.file)
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
        <GatsbyImage image={banner} alt="hero-banner"></GatsbyImage>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
