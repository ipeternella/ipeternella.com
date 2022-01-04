import { Typography } from "@material-ui/core"
import styled from "styled-components"

export const BackToBlog = styled(Typography).attrs({
  variant: "h5",
  align: "center",
})`
  && {
    font-family: "Fjalla One";
    margin: 1em;
    color: ${props => props.theme.palette.text.primary};
  }
  &&:hover {
    color: ${props => props.theme.palette.foxColors.faceSecondary};
  }
`
