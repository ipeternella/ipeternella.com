import { Container } from "@material-ui/core"
import React from "react"
import Header from "../Header"
import NavBar from "../NavBar"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Container>
        <Header pageTitle={pageTitle} />
        <NavBar></NavBar>
      </Container>
    </>
  )
}

export default Layout
