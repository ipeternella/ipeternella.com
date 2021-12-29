import { graphql } from "gatsby"
import React from "react"
import Content from "../components/Content"
import Layout from "../components/Layout"

const blogPostTemplate = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data
  const location = frontmatter.path

  return (
    <Layout location={location}>
      <Content content={html} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        path
      }
    }
  }
`

export default blogPostTemplate
