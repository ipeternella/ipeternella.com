import { screen } from "@testing-library/dom"
import React from "react"
import Footer from "../../../../src/components/Footer"
import { render } from "../../../support/render"

describe("Footer component test suite", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should render the current year", async () => {
    // arrange
    const today = new Date()
    const yearAndLogo = `© ${today.getFullYear()} ipeternella`

    // act
    render(<Footer />)

    // assert
    const pElement = await screen.getByText(yearAndLogo)

    expect(pElement.textContent).toBe(yearAndLogo)
    expect(pElement.localName).toBe("p")
    expect(pElement.parentElement.localName).toBe("div")
  })
})
