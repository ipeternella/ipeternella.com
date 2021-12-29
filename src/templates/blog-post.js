import { graphql, Link } from "gatsby"
import React from "react"
import Content from "../components/Content"
import Layout from "../components/Layout"
import * as S from "./styled"

const blogPostTemplate = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data
  const location = frontmatter.path
  const title = frontmatter.title

  return (
    <Layout pageTitle={title} location={location}>
      <Content content={html}></Content>

      <Link to="/blog">
        <S.BackToBlog>
          {">>"} Back to blog {"<<"}
        </S.BackToBlog>
      </Link>
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
        layout
      }
    }
  }
`

export default blogPostTemplate
