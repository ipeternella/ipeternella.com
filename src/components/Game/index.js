import useMediaQuery from "@mui/material/useMediaQuery"
import React, { useEffect } from "react"
import startGame from "../../game"
import * as S from "./styled"

const GameComponent = () => {
  const isDesktop = useMediaQuery("(min-width:720px)") // not a mobile screen (uses react State under the hood)

  // Phaser mutates the DOM: it must be executed after this component has been rendered
  // and the device is not a mobile one
  useEffect(() => {
    if (!isDesktop) return null
    const gamePromise = startGame(window)

    return async () => {
      // before leaving the screen, previous game side effects must be removed: remove listeners, etc.
      const game = await gamePromise
      game.destroy()
    }
  }, [isDesktop]) // imperative effect re-executed only when isDesktop media query result changes

  if (!isDesktop) {
    return (
      <S.NoMobileWrapper>
        <S.NoMobileText>Sorry, Peter always sleeps on mobile screens... how about trying on a desktop?</S.NoMobileText>
        <S.PeterSleeping />
      </S.NoMobileWrapper>
    )
  }

  return <S.GameWrapper id="game"></S.GameWrapper>
}

export default GameComponent
