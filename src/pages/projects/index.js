import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"

import * as styles from "../../styles/projects.module.css"

export default function Projects({ data }) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <h3>Projects & Websites I made</h3>
        <div className={styles.projects}>
          {projects.map(node => (
            //add link to project details
            <Link to={"/projects/" + node.frontmatter.slug} key={projects.id}>
              <div>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

//export page query
export const query = graphql`
  query ProjectaPage {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
        }
      }
    }
  }
`
