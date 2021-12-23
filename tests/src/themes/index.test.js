import { getThemeFromLocalStorage } from "../../../src/themes/index"

describe("Theme-related functions", () => {
  let mockLocalStorage

  beforeEach(() => {
    jest.clearAllMocks()

    mockLocalStorage = {}
    Storage.prototype.getItem = jest.fn(key => (key in mockLocalStorage ? mockLocalStorage[key] : null))
  })

  it("Should get light theme from local storage when it's empty", async () => {
    // act
    let theme = getThemeFromLocalStorage(localStorage)

    // assert
    expect(theme).toBe("light")
  })

  it("Should get light theme from local storage when it contains a light theme key", async () => {
    // arrange
    mockLocalStorage["theme"] = "light"

    // act
    let theme = getThemeFromLocalStorage(localStorage)

    // assert
    expect(theme).toBe("light")
  })

  it("Should get dark theme from local storage when it contains a dark theme key", async () => {
    // arrange
    mockLocalStorage["theme"] = "dark"

    // act
    let theme = getThemeFromLocalStorage(localStorage)

    // assert
    expect(theme).toBe("dark")
  })
})
