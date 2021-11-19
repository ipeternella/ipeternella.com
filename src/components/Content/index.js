import React from "react"
import * as S from "./styled"

const Content = ({ content }) => {
  return <S.ContentWrapper dangerouslySetInnerHTML={{ __html: content }}></S.ContentWrapper>
}

export default Content
