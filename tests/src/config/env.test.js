import { readEnvAsBoolOrException, readEnvOrException } from "../../../src/config/env"

describe("Config-related functions", () => {
  it("Should read an undefined env var and throw an error", async () => {
    // arrange
    const fn = () => {
      const env = readEnvOrException("UNKNOWN_VAR")
    }

    // assert
    expect(fn).toThrow(Error)
    expect(fn).toThrow("Missing required variable: UNKNOWN_VAR")
  })

  it("Should read a defined env variable", async () => {
    // act
    const env = readEnvOrException("NETLIFY_CMS_LOCAL_BACKEND")

    // assert
    expect(env).toBe("true")
  })

  it("Should read an undefined bool env var and throw an error", async () => {
    // arrange
    const fn = () => {
      const env = readEnvAsBoolOrException("UNKNOWN_VAR")
    }

    // assert
    expect(fn).toThrow(Error)
    expect(fn).toThrow("Missing required variable: UNKNOWN_VAR")
  })

  it("Should read a defined bool env variable", async () => {
    // act
    const env = readEnvAsBoolOrException("NETLIFY_CMS_LOCAL_BACKEND")

    // assert
    expect(env).toBe(true)
  })
})
