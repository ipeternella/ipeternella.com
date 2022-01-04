import { Box, Typography } from "@material-ui/core"
import styled from "styled-components"
import PeterSleepingGif from "../../../static/gif/peter-sleeping.gif"

export const GameWrapper = styled(Box)`
  margin: 2em auto;
  width: 800px;
  height: 600px;
`

export const NoMobileWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const NoMobileText = styled(Typography).attrs({
  variant: "h3",
  align: "center",
})`
  font-family: "Fjalla One";
  margin: 1em 0 0 0;
  color: ${props => props.theme.palette.text.primary};
`

export const PeterSleeping = styled.img.attrs({
  src: PeterSleepingGif,
})`
  display: block;
  width: 400px;
  margin: 15px 0 0 0;
  align-self: center;

  /* pixel art */
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
`
