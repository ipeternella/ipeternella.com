import { screen } from "@testing-library/dom"
import * as Gatsby from "gatsby"
import React from "react"
import Header from "../../../../src/components/Header"
import { render } from "../../../support/render"

describe("Header component", () => {
  let fakeSiteMetadata

  beforeAll(() => {
    // mocks static query
    const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery")
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          siteUrl: "https://ipeternella.com",
          title: "ipeternella",
          social: {
            github: "https://github.com/ipeternella",
            linkedin: "https://www.linkedin.com/in/igor-grillo-peternella/",
            twitter: "https://twitter.com/grillo_igor",
          },
        },
      },
    }))
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should have 'ipeternella' logo in it", async () => {
    // arrange and act (render)
    render(<Header pageTitle="ipeternella" />)
    const element = await screen.getByText("ipeternella")

    // assert
    expect(element.textContent).toBe("ipeternella")
    expect(element.localName).toBe("h2")
  })
})
