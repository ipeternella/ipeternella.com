import { Container } from "@material-ui/core"
import React from "react"
import { GlobalStyle } from "../../styles/global"
import Footer from "../Footer"
import Header from "../Header"
import NavBar from "../NavBar"
import * as S from "./styled"

const Layout = ({ pageTitle, children, location }) => {
  return (
    <>
      <title>{pageTitle}</title>
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
