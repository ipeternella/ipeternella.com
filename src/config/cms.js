export const buildNetlifyCmsConfig = (localBackend, repo = "", branch = "") => {
  const cfg = {
    config: {
      backend: {},
      local_backend: localBackend,
    },
  }

  if (localBackend) {
    cfg["config"]["backend"] = {
      name: "git-gateway",
    }
  } else {
    cfg["config"]["backend"] = {
      name: "github",
      repo: repo,
      branch: branch,
    }
  }

  return cfg
}
