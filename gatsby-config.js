require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://ipeternella.com",
    title: "ipeternella",
    social: {
      github: "https://github.com/ipeternella",
      linkedin: "https://www.linkedin.com/in/igor-grillo-peternella/",
      twitter: "https://twitter.com/igpeternella",
      leetcode: "https://leetcode.com/ipeternella/",
      hackerrank: "https://www.hackerrank.com/ipeternella",
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "static/images/fox-favicon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/images`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/index.js`,
        publicPath: `${process.env.NETLIFY_CMS_PUBLIC_PATH}`,
        manualInit: true,
      },
    },
    {
      resolve: "gatsby-transformer-remark", // transformer parsing .md files and its frontmatter with remark
      options: {
        plugins: [
          { resolve: `gatsby-remark-prismjs`, options: { showLineNumbers: false } },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-images",
        ],
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
  ],
}
