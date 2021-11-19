import { Container } from "@material-ui/core"
import React from "react"
import * as S from "./styled"

const Content = ({ content }) => {
  return (
    <Container>
      <S.ContentWrapper dangerouslySetInnerHTML={{ __html: content }}></S.ContentWrapper>
    </Container>
  )
}

export default Content
