import styled from "styled-components"

export const Main = styled.main`
  && {
    background: ${props => props.theme.palette.background.paper};
    min-height: 50vh;
    width: 100%;
  }
`
