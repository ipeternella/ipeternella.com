import { Box, Container, Typography } from "@material-ui/core"
import styled from "styled-components"

export const NavBarWrapper = styled(Container).attrs({
  maxWidth: "lg",
})`
  margin-top: 20px;
  display: flex;
`

export const PeterBox = styled(Box)`
  width: 20%;
  min-height: 100px;
  max-height: 200px;
  margin: 15px 15px 15px auto;
`

export const PeterFoxImg = styled.img`
  width: 100%;
  height: 100%;
`

export const NavSelector = styled(Box)`
  border-color: black;
  border-style: solid;
  border-width: 5px;
  width: 80%;
`

export const PeterFoxFixedSaying = styled(Typography).attrs({
  variant: "h5",
})`
  && {
    font-family: "Fjalla One";
    padding: 10px;
  }
`
