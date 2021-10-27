import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome!">
      <StaticImage alt="A Dog!" src="../../assets/images/ipeter.png"></StaticImage>
    </Layout>
  )
}

export default IndexPage
