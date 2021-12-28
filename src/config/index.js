import { buildNetlifyCmsConfig } from "./cms"
import { browserReadEnvAsBoolOrException } from "./env"

export const NETLIFY_CMS_LOCAL_BACKEND = (() => {
  return browserReadEnvAsBoolOrException(process.env.GATSBY_NETLIFY_CMS_LOCAL_BACKEND)
})()

export const netlifyCmsConfig = buildNetlifyCmsConfig(NETLIFY_CMS_LOCAL_BACKEND)
