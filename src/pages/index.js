import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Hello World!">
      <p>Hello there!</p>
      <StaticImage alt="A Dog!" src="../../assets/images/ipeter.png"></StaticImage>
    </Layout>
  )
}

export default IndexPage
