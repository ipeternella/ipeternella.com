export const buildNetlifyCmsConfig = (localBackend, branch) => {
  const cfg = {
    config: {
      backend: {
        name: "git-gateway",
        branch: branch,
      },
    },
  }

  if (localBackend) {
    cfg["config"]["local_backend"] = true
  }

  return cfg
}
