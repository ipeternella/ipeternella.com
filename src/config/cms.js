export const buildNetlifyCmsConfig = localBackend => {
  const cfg = {
    config: {
      backend: {
        name: "git-gateway",
      },
    },
  }

  if (localBackend) {
    cfg["config"]["local_backend"] = true
  }

  return cfg
}
