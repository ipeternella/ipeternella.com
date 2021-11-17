import { Typography } from "@material-ui/core"
import styled from "styled-components"

export const Title = styled(Typography).attrs({
  variant: "h3",
})`
  && {
    font-family: "Arial";
    padding: 5px;
    color: ${props => props.theme.palette.text.primary};
  }
`
export const Section = styled.section``

export const Contents = styled(Typography).attrs({
  variant: "h5",
})`
  && {
    font-family: "Arial";
    padding: 5px;
    color: ${props => props.theme.palette.text.primary};
  }
`
