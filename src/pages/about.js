import { graphql } from "gatsby"
import React from "react"
import Content from "../components/Content"
import Layout from "../components/Layout"

const AboutPage = ({ data }) => {
  console.log(data)
  const {
    markdownRemark: { frontmatter, html },
  } = data // from page query
  const title = frontmatter.title
  const location = frontmatter.path

  return (
    <Layout pageTitle={title} location={location}>
      <Content content={html} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        path
      }
    }
  }
`

console.log(pageQuery)

export default AboutPage
