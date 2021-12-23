import React from "react"
import Game from "../components/Game"
import Layout from "../components/Layout"

const GamePage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Game />
    </Layout>
  )
}

export default GamePage
