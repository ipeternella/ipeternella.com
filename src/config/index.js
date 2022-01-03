import { buildNetlifyCmsConfig } from "./cms"
import { browserReadEnvAsBoolOrException } from "./env"

export const NETLIFY_CMS_REPO = (() => {
  return browserReadEnvAsBoolOrException(process.env.GATSBY_NETLIFY_CMS_REPO)
})()

export const NETLIFY_CMS_LOCAL_BACKEND = (() => {
  return browserReadEnvAsBoolOrException(process.env.GATSBY_NETLIFY_CMS_LOCAL_BACKEND)
})()

export const NETLIFY_CMS_BRANCH = (() => {
  return browserReadEnvAsBoolOrException(process.env.GATSBY_NETLIFY_CMS_BRANCH)
})()

export const netlifyCmsConfig = buildNetlifyCmsConfig(NETLIFY_CMS_LOCAL_BACKEND, NETLIFY_CMS_REPO, NETLIFY_CMS_BRANCH)
