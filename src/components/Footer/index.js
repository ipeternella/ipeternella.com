import React from "react"
import * as S from "./styled"

const Footer = () => {
  const today = new Date()

  return (
    <S.FooterWrapper>
      <S.FooterLogo>© {today.getFullYear()} ipeternella</S.FooterLogo>
    </S.FooterWrapper>
  )
}

export default Footer
