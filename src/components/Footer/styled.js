import { Box, Typography } from "@material-ui/core"
import styled from "styled-components"

export const FooterWrapper = styled(Box)`
  border-top: 1px solid ${props => props.theme.palette.text.primary};
  display: flex;
  justify-content: center;
`
export const FooterLogo = styled(Typography).attrs(props => ({
  variant: "body1",
  align: "center",
}))`
  && {
    width: 100%;
    font-family: "Fjalla One";
    padding: 10px;
    color: ${props => props.theme.palette.foxColors.facePrimary};
  }
`
