import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Section from "../components/Section"

const AboutPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data // from page query

  const title = frontmatter.title
  const content = html

  return (
    <Layout>
      <Section>
        <p>{title}</p>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default AboutPage
