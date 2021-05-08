import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"

import * as styles from "../../styles/projects.module.css"

export default function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

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
        <p>Like what you see? Email me at {contact} for a quote! </p>
      </div>
    </Layout>
  )
}

//export page query from graphiql
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
