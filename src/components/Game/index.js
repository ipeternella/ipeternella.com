import React, { useEffect } from "react"
import startGame from "../../game"
import * as S from "./styled"

const GameComponent = () => {
  // Phaser mutates the DOM: it must be executed after this component has been rendered
  useEffect(() => {
    const gamePromise = startGame(window)

    return async () => {
      // before leaving the screen, previous game side effects must be removed: remove listeners, etc.
      const game = await gamePromise
      game.destroy()
    }
  }, [])

  return <S.GameWrapper id="game"></S.GameWrapper>
}

export default GameComponent
