import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as S from "./styled"

const Header = ({ pageTitle }) => {
  const metadataQry = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          social {
            github
            linkedin
            twitter
          }
        }
      }
    }
  `)

  return (
    <S.HeaderWrapper>
      <S.SiteTitle>
        {pageTitle} | {metadataQry.site.siteMetadata.title}
      </S.SiteTitle>
      <S.Title>{metadataQry.site.siteMetadata.title}</S.Title>

      <S.SocialMediaWrapper>
        <S.SocialMediaLinkWrapper to={metadataQry.site.siteMetadata.social.linkedin}>
          <S.LinkedInLogo />
        </S.SocialMediaLinkWrapper>

        <S.SocialMediaLinkWrapper to={metadataQry.site.siteMetadata.social.github}>
          <S.GithubLogo />
        </S.SocialMediaLinkWrapper>

        <S.SocialMediaLinkWrapper to={metadataQry.site.siteMetadata.social.twitter}>
          <S.TwitterLogo />
        </S.SocialMediaLinkWrapper>
      </S.SocialMediaWrapper>
    </S.HeaderWrapper>
  )
}

export default Header
