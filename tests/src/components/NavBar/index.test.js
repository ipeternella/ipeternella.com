import { getFoxSelectorPosition } from "../../../../src/components/NavBar"

describe("Navbar component test suite", () => {
  it("Should return the home fox selector position", () => {
    // arrange
    const pathname = "/"

    // act
    const pos = getFoxSelectorPosition(pathname)

    // assert
    expect(pos).toBe(0)
  })

  it("Should return the about fox selector position", () => {
    // arrange
    const pathname = "/about"

    // act
    const pos = getFoxSelectorPosition(pathname)

    // assert
    expect(pos).toBe(1)
  })

  it("Should return the game fox selector position", () => {
    // arrange
    const pathname = "/game"

    // act
    const pos = getFoxSelectorPosition(pathname)

    // assert
    expect(pos).toBe(3)
  })

  it("Should return the default fox selector position", () => {
    // arrange
    const pathname = "/unknown"

    // act
    const pos = getFoxSelectorPosition(pathname)

    // assert
    expect(pos).toBe(0)
  })
})
