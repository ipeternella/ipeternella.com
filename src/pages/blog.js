import { graphql } from "gatsby"
import React from "react"
import BlogPosts from "../components/BlogPosts"
import Layout from "../components/Layout"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog" location="/blog">
      <BlogPosts data={data}></BlogPosts>
    </Layout>
  )
}

// query for allMarkdownRemark nodes which contains all blog posts as processed .md files!
export const pageQuery = graphql`
  query BlogPostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
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
