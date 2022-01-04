import styled from "styled-components"

export const Main = styled.main`
  && {
    background: ${props => props.theme.palette.background.primary};
    min-height: 50vh;
    width: 100%;
  }
`
