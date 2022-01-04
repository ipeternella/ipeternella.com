import { Link } from "gatsby"
import React from "react"
import * as S from "./styled"

export const getFoxSelectorPosition = pathname => {
  const path_mapping = {
    "/": 0,
    "/about": 1,
    "/about/": 1,
    "/blog": 2,
    "/blog/": 2,
    "/game": 3,
    "/game/": 3,
    "/unknown": 0,
  } // TODO: refactor with regexps

  if (pathname in path_mapping) {
    return path_mapping[pathname]
  }

  return 2
}

export const NavBarOption = props => {
  return (
    <>
      {props.isSelected ? (
        <S.NavOptionWrapper>
          <S.PeterFoxSelector></S.PeterFoxSelector>
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
  const selectorPos = getFoxSelectorPosition(location)

  return (
    <S.NavBarWrapper>
      <NavBarOption name="Home" to="/" isSelected={selectorPos === 0} />
      <NavBarOption name="About" to="/about" isSelected={selectorPos === 1} />
      <NavBarOption name="Blog" to="/blog" isSelected={selectorPos === 2} />
      <NavBarOption name="Play" to="/game" isSelected={selectorPos === 3} />
    </S.NavBarWrapper>
  )
}

export default NavBar
