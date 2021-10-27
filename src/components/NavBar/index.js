import React from "react"
import LogoSrc from "../../../assets/images/ipeter.png"
import * as S from "./styled"

const NavBar = () => {
  return (
    <S.NavBarWrapper>
      <S.PeterBox>
        <S.PeterFoxImg src={LogoSrc}></S.PeterFoxImg>
      </S.PeterBox>
      <S.NavSelector>
        <S.PeterFoxFixedSaying>Hello, you!</S.PeterFoxFixedSaying>
      </S.NavSelector>
    </S.NavBarWrapper>
  )
}

export default NavBar
