import React from "react"
import Header from "../Header"
import NavBar from "../NavBar"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <NavBar></NavBar>
    </>
  )
}

export default Layout
