import { Container } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import { GlobalStyle } from "../../styles/global"
import Footer from "../Footer"
import Header from "../Header"
import NavBar from "../NavBar"
import * as S from "./styled"

const Layout = ({ pageTitle, children, location }) => {
  const {
    site: {
      siteMetadata: { title: siteTitle },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet title={pageTitle ? `${siteTitle} | ${pageTitle}` : siteTitle} />
      <GlobalStyle />

      <Container>
        <Header />
        <NavBar location={location} />
        <S.Main>{children}</S.Main>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
