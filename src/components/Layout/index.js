import { Container } from "@material-ui/core"
import React from "react"
import { ColorThemeContext } from "../../contexts"
import Header from "../Header"
import NavBar from "../NavBar"

const Layout = ({ pageTitle, children }) => {
  return (
    <ColorThemeContext.Consumer>
      {context => (
        <Container>
          <Header pageTitle={pageTitle} theme={context.theme} />
          <NavBar></NavBar>
        </Container>
      )}
    </ColorThemeContext.Consumer>
  )
}

export default Layout
