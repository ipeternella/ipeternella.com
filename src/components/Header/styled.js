import "@fontsource/fjalla-one"
import "@fontsource/press-start-2p"
import { Box, Container, Typography } from "@material-ui/core"
import { Github, LinkedinSquare, Twitter } from "@styled-icons/boxicons-logos"
import { Link } from "gatsby"
import styled from "styled-components"

export const SiteTitle = styled.title``

export const HeaderWrapper = styled(Container)``

export const SocialMediaWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`

export const SocialMediaLinkWrapper = styled(Link)`
  &:visited {
    text-decoration: none;
    color: transparent;
  }
`

export const Title = styled(Typography).attrs({
  variant: "h2",
  align: "center",
})`
  && {
    font-family: "Fjalla One";
    padding: 10px;
  }
`

export const LinkedInLogo = styled(LinkedinSquare)`
  height: 50px;
  width: 3rem;
  margin: 0;
`

export const GithubLogo = styled(Github)`
  height: 50px;
  width: 3rem;
  margin: 0;
`

export const TwitterLogo = styled(Twitter)`
  height: 50px;
  width: 3rem;
  margin: 0;
`
