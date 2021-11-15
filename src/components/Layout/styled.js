import styled from "styled-components"

export const Main = styled.main`
  && {
    background: ${props => props.theme.palette.background.paper};
    min-height: 100vh;
    width: 100%;
  }
`
