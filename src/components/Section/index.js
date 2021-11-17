import React from "react"
import * as S from "./styled"

const Section = ({ children }) => {
  return (
    <S.Section>
      <S.Title>{children[0]}</S.Title>
      <S.Contents>{children[1]}</S.Contents>
    </S.Section>
  )
}

export default Section
