import { Container, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const NoWhereToGo = styled(Typography).attrs({
  variant: "h3",
  align: "center",
})`
  font-family: "Fjalla One";
  margin: 25vh 0;
  color: ${props => props.theme.palette.text.primary};
`

const NoWhereToGoLink = styled(Typography).attrs({
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

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Oops! Not found!">
      <Container>
        <NoWhereToGo>Sorry, it seems that my fox couldn't find the page you're looking for!</NoWhereToGo>

        <Link to="/">
          <NoWhereToGoLink>
            {">>"} Back Home {"<<"}
          </NoWhereToGoLink>
        </Link>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
