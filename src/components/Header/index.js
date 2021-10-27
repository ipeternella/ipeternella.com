import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as S from "./styled"

const Header = ({ pageTitle }) => {
  const siteMetadataQry = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <S.HeaderWrapper>
      <title>
        {pageTitle} | {siteMetadataQry.site.siteMetadata.title}
      </title>
      <S.Title>{siteMetadataQry.site.siteMetadata.title}</S.Title>
    </S.HeaderWrapper>
  )
}

export default Header
