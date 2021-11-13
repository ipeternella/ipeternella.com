import { FormControlLabel, FormGroup } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as S from "./styled"

const CustomizedSwitches = ({ theme }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<S.MaterialUISwitch sx={{ m: 1 }} defaultChecked theme={theme} />} label="" />
    </FormGroup>
  )
}

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
      <S.LogoAndSocialIconsWrapper>
        <S.Logo theme={theme}>ipeternella</S.Logo>
        <S.SocialMediaLinkWrapper to={metadataQry.site.siteMetadata.social.linkedin}>
          <S.LinkedInLogo />
        </S.SocialMediaLinkWrapper>
        <S.SocialMediaLinkWrapper to={metadataQry.site.siteMetadata.social.github}>
          <S.GithubLogo />
        </S.SocialMediaLinkWrapper>
        <S.SocialMediaLinkWrapper to={metadataQry.site.siteMetadata.social.twitter}>
          <S.TwitterLogo />
        </S.SocialMediaLinkWrapper>
      </S.LogoAndSocialIconsWrapper>
      <S.ThemeSwitchWrapper>
        <CustomizedSwitches theme={theme} value="hi"></CustomizedSwitches>
      </S.ThemeSwitchWrapper>
    </S.HeaderWrapper>
  )
}

export default Header
