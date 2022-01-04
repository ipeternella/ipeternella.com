import { FormControlLabel, FormGroup, useMediaQuery } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
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

// non-page components must use static queries to fetch data
const Header = ({ pageTitle }) => {
  const isDesktopQueryResult = useMediaQuery("(min-width:720px)")
  const [isDesktop, setIsDesktop] = useState(true)

  // [!]: we cannot use 'isDesktopQueryResult' alone or the fox will keep flickering due
  // to unnecessary renders, so the 'useEffect()' hook is used in order to only change the
  // 'isDesktop' variable when the component has been mounted and the query result changes.
  useEffect(() => {
    setIsDesktop(isDesktopQueryResult)
  }, [isDesktopQueryResult])

  const metadataQry = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          social {
            github
            linkedin
            twitter
            leetcode
            hackerrank
          }
        }
      }
    }
  `)

  return (
    <S.HeaderWrapper>
      {isDesktop ? <S.PeterFox /> : <S.NullFox />}
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
        <S.SocialMediaLinkWrapper href={metadataQry.site.siteMetadata.social.leetcode}>
          <S.LeetCodeLogo />
        </S.SocialMediaLinkWrapper>
        <S.SocialMediaLinkWrapper href={metadataQry.site.siteMetadata.social.hackerrank}>
          <S.HackerrankLogo />
        </S.SocialMediaLinkWrapper>
      </S.LogoAndSocialIconsWrapper>
      <S.ThemeSwitchWrapper>
        <ThemeSwitch />
      </S.ThemeSwitchWrapper>
    </S.HeaderWrapper>
  )
}

export default Header
