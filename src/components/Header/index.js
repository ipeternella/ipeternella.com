import { FormControlLabel, FormGroup } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import { ColorThemeContext } from "../../contexts"
import * as S from "./styled"

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ColorThemeContext)

  return (
    <FormGroup>
      <FormControlLabel
        onChange={() => {
          toggleTheme()
        }}
        checked={theme.palette.mode === "dark" ? false : true}
        control={<S.MaterialUISwitch sx={{ m: 1 }} theme={theme} />}
      />
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
        <S.Logo>ipeternella</S.Logo>
        <S.SocialMediaLinkWrapper href={metadataQry.site.siteMetadata.social.linkedin}>
          <S.LinkedInLogo />
        </S.SocialMediaLinkWrapper>
        <S.SocialMediaLinkWrapper href={metadataQry.site.siteMetadata.social.github}>
          <S.GithubLogo />
        </S.SocialMediaLinkWrapper>
        <S.SocialMediaLinkWrapper href={metadataQry.site.siteMetadata.social.twitter}>
          <S.TwitterLogo />
        </S.SocialMediaLinkWrapper>
      </S.LogoAndSocialIconsWrapper>
      <S.ThemeSwitchWrapper>
        <ThemeSwitch></ThemeSwitch>
      </S.ThemeSwitchWrapper>
    </S.HeaderWrapper>
  )
}

export default Header
