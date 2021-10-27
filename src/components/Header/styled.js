import "@fontsource/fjalla-one"
import "@fontsource/press-start-2p"
import { Container, Typography } from "@material-ui/core"
import styled from "styled-components"

export const HeaderWrapper = styled(Container).attrs(props => ({
  maxWidth: "lg",
}))``

export const Title = styled(Typography).attrs({
  variant: "h3",
  align: "center",
})`
  && {
    font-family: "Fjalla One";
    padding: 20px 0px;
  }
`
