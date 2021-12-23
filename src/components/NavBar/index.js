import { Link } from "gatsby"
import React, { useState } from "react"
import * as S from "./styled"

const getFoxSelectorPosition = path => {
  if (path === "/") {
    return 0
  } else if (path === "/about") {
    return 1
  } else {
    return 2
  }
}

const NavBarOption = props => {
  return (
    <>
      {props.isSelected ? (
        <S.NavOptionWrapper onMouseOver={() => props.onMouseOver()}>
          <S.FoxFaceImg></S.FoxFaceImg>
          <Link to={props.to}>
            <S.NavOption>{props.name}</S.NavOption>
          </Link>
        </S.NavOptionWrapper>
      ) : (
        <S.NavOptionWrapper onMouseOver={() => props.onMouseOver()}>
          <S.NullImg></S.NullImg>
          <S.NavOption>{props.name}</S.NavOption>
        </S.NavOptionWrapper>
      )}
    </>
  )
}

const NavBar = ({ location }) => {
  const [pos, setPos] = useState(getFoxSelectorPosition(location.pathname))
  const togglePosition = ix => setPos(ix)

  return (
    <S.NavBarWrapper>
      <NavBarOption name="Home" to="/" onMouseOver={() => togglePosition(0)} isSelected={pos === 0} />
      <NavBarOption name="About me" to="/about" onMouseOver={() => togglePosition(1)} isSelected={pos === 1} />
      <NavBarOption name="Play" to="/game" onMouseOver={() => togglePosition(2)} isSelected={pos === 2} />
    </S.NavBarWrapper>
  )
}

export default NavBar
