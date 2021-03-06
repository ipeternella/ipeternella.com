import React from "react"
import Game from "../components/Game"
import Layout from "../components/Layout"

const GamePage = ({ data }) => {
  return (
    <Layout pageTitle="Game" location="/game">
      <Game />
    </Layout>
  )
}

export default GamePage
