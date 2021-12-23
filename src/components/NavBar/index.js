import { Link } from "gatsby"
import React from "react"
import * as S from "./styled"

export const getFoxSelectorPosition = pathname => {
  const path_mapping = {
    "/": 0,
    "/about": 1,
    "/about/": 1,
    "/game": 2,
    "/game/": 2, // TODO: refactor with regexps
  }

  if (pathname in path_mapping) {
    return path_mapping[pathname]
  }

  return 0
}

export const NavBarOption = props => {
  return (
    <>
      {props.isSelected ? (
        <S.NavOptionWrapper>
          <S.FoxFaceImg></S.FoxFaceImg>
          <Link to={props.to}>
            <S.NavOption>{props.name}</S.NavOption>
          </Link>
        </S.NavOptionWrapper>
      ) : (
        <S.NavOptionWrapper>
          <S.NullImg></S.NullImg>
          <Link to={props.to}>
            <S.NavOption>{props.name}</S.NavOption>
          </Link>
        </S.NavOptionWrapper>
      )}
    </>
  )
}

export const NavBar = ({ location }) => {
  const selectorPos = getFoxSelectorPosition(location.pathname)

  return (
    <S.NavBarWrapper>
      <NavBarOption name="Home" to="/" isSelected={selectorPos === 0} />
      <NavBarOption name="About me" to="/about" isSelected={selectorPos === 1} />
      <NavBarOption name="Play" to="/game" isSelected={selectorPos === 2} />
    </S.NavBarWrapper>
  )
}

export default NavBar
