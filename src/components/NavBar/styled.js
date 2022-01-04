import { Box, Container, Typography } from "@material-ui/core"
import styled from "styled-components"
import PeterSelectorImg from "../../../static/images/peter-selector.png"

export const NavBarWrapper = styled(Container).attrs({
  maxWidth: "lg",
})`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  border-top: 1px solid ${props => props.theme.palette.foxColors.hood};
  border-bottom: 1px solid ${props => props.theme.palette.foxColors.hood};
  width: 100%;
`

export const PeterBox = styled(Box)`
  width: 20%;
  min-height: 100px;
  max-height: 200px;
  margin: 15px 15px 15px auto;
`

export const NavOptionWrapper = styled(Box)`
  display: flex;
`

export const PeterFoxSelector = styled.img.attrs({
  src: PeterSelectorImg,
})`
  width: 40px;
  margin: 0px;
`

export const NullImg = styled.div`
  width: 40px;
  margin: 0px;
`

export const NavSelector = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const PeterFoxFixedSaying = styled(Typography).attrs({
  variant: "h5",
})`
  && {
    font-family: "Fjalla One";
    padding: 10px;
  }
`

export const NavOption = styled(Typography).attrs({
  variant: "h5",
})`
  && {
    font-family: "Fjalla One";
    padding: 5px;
    color: ${props => props.theme.palette.text.primary};
  }
  &&:hover {
    color: ${props => props.theme.palette.foxColors.faceSecondary};
  }
`
