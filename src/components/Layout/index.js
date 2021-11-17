import { Container } from "@material-ui/core"
import React from "react"
import { GlobalStyle } from "../../styles/global"
import Header from "../Header"
import NavBar from "../NavBar"
import * as S from "./styled"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <GlobalStyle />

      <Container>
        <Header />
        <NavBar />
        <S.Main>{children}</S.Main>
      </Container>
    </>
  )
}

export default Layout
