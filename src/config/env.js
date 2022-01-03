/*
 * Browser env parsing functions (must be prefixed with GATSBY_). Notice that webpack does not
 * allow destructuring, so process.env[NAME] (bracket notation) doesn't work so we must pass
 * process.env.NAME and see if the env exists.
 */
export const browserReadEnvAsBoolOrException = envObj => {
  const truthies = ["true", "1", "t", "y"]

  if (envObj === undefined) {
    throw new Error(`Missing required variable: ${envObj}`)
  }

  return truthies.find(t => t === envObj.toLowerCase()) !== undefined ? true : false
}

/*
 * NodeJS env parsing functions.
 */
export const readEnvOrException = envName => {
  const env = process.env[envName]

  if (env === undefined) {
    throw new Error(`Missing required variable: ${envName}`)
  }

  return env
}

export const readEnvAsBoolOrException = envName => {
  const envStr = readEnvOrException(envName)
  const truthies = ["true", "1", "t", "y"]

  return truthies.find(t => t === envStr.toLowerCase()) !== undefined ? true : false
}
