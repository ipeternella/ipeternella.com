import React, { useEffect } from "react"
import startGame from "../../game"
import * as S from "./styled"

const GameComponent = () => {
  useEffect(() => {
    startGame()
  }, [])

  return <S.GameWrapper id="game"></S.GameWrapper>
}

export default GameComponent
