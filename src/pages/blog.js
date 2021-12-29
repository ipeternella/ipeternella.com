import { graphql } from "gatsby"
import React from "react"
import BlogPosts from "../components/BlogPosts"
import Layout from "../components/Layout"

const BlogPage = ({ data }) => {
  return (
    <Layout location="/blog">
      <BlogPosts data={data}></BlogPosts>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            layout
            coverimg
          }
        }
      }
    }
  }
`

export default BlogPage
