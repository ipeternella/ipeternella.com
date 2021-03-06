import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from "@material-ui/core"
import styled from "styled-components"

export const BlogPostsWrapper = styled(Container).attrs({})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const PostCard = styled(Card).attrs()`
  border: 1px solid ${props => props.theme.palette.foxColors.faceSecondary};
  background: ${props => props.theme.palette.background.primary};
  margin: 1em;
  width: 300px;
`

export const PostTitle = styled(Typography).attrs({
  variant: "h5",
})`
  && {
    font-family: ${props => props.theme.typography.primary.fontFamily};
    color: ${props => props.theme.palette.text.primary};
  }
`

export const PostDate = styled(Typography).attrs({
  variant: "body2",
})`
  && {
    margin: 0;
    font-family: ${props => props.theme.typography.secondary.fontFamily};
    color: ${props => props.theme.palette.text.primary};
  }
`

export const PostDescription = styled(Typography).attrs({
  variant: "body1",
})`
  font-family: ${props => props.theme.typography.secondary.fontFamily};
  color: ${props => props.theme.palette.text.primary};
  padding: 20px 0;
`

export const PostCardActionArea = styled(CardActionArea).attrs({})`
  height: 100%;
  &&:hover {
    background: ${props => (props.theme.palette.mode === "dark" ? "grey" : "#fbf2ec")};
  }
`
export const PostCardContent = styled(CardContent).attrs({})``
export const PostCardMedia = styled(CardMedia).attrs({})`
  image-rendering: pixelated;
`
