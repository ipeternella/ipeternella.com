exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)

  createPage({
    ...page,
    context: {
      ...page.context,
      frontMatterAboutPageTitle: "About",
      frontMatterHomePageTitle: "Home",
    },
  })
}
