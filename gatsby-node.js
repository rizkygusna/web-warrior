//inclode path module from node.js
const path = require(`path`)

//export createPages module
exports.createPages = async ({ graphql, actions }) => {
  //extract data from response object
  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  //create template for each articles
  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      //set path of article
      path: "/projects/" + node.frontmatter.slug,
      //set absolute path of template
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
