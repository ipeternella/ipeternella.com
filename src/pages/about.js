import { graphql } from "gatsby"
import React from "react"
import Content from "../components/Content"
import Layout from "../components/Layout"

const AboutPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data // from page query

  const title = frontmatter.title
  const content = html

  return (
    <Layout>
      <Content content={html} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($frontMatterAboutPageTitle: String) {
    markdownRemark(frontmatter: { title: { eq: $frontMatterAboutPageTitle } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default AboutPage
