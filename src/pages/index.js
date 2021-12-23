import { graphql } from "gatsby"
import React from "react"
import Content from "../components/Content"
import Layout from "../components/Layout"

const IndexPage = ({ data, location }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data // from page query
  const title = frontmatter.title
  const content = html

  return (
    <Layout location={location}>
      <Content content={html} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($frontMatterHomePageTitle: String) {
    markdownRemark(frontmatter: { title: { eq: $frontMatterHomePageTitle } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default IndexPage
