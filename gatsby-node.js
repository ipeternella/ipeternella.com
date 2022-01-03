/*
 * NodeAPI used by Gatsby during site building: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 * Here one can create pages dynamically, modify the data layer used with GraphQL, etc.
 */
const path = require("path")

/*
 * createPages is a node API used to create pages dynamically. It's called after source plugins and transformation
 * so GraphQL schema is complete and can be queried to fetch any data for the dynamic pages.
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              date
              layout
            }
            fields {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const isBlogNode = node.frontmatter.layout === "blog"

    if (isBlogNode) {
      createPage({
        path: node.fields.path, // uses the filePath field set by the onCreateNode() api!
        component: BlogPostTemplate,
        context: {},
      })
    }
  })
}

/*
 * onCreateNode is a node API usually used to transform nodes before leaving them ready for the GraphQL queries.
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // https://www.gatsbyjs.com/docs/reference/config-files/actions/#createNodeField
  if (node.internal.type === "MarkdownRemark") {
    let relativeFolder = node.fileAbsolutePath.split("/content/blog")[1]
    let filePath = ""

    if (relativeFolder !== undefined && relativeFolder.split(".md")[0] !== undefined) {
      filePath = `/blog${relativeFolder.split(".md")[0]}`

      // [!]: sets frontmatter.path for "MarkdownRemark" and "allMarkdownRemark" graphQL queries!
      node.frontmatter.path = filePath

      createNodeField({
        node,
        name: `path`,
        value: filePath, // adds filePath to be the dynamic url used by createPages() api
      })
    }
  }
}
