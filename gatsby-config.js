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
      twitter: "https://twitter.com/grillo_igor",
      leetcode: "https://leetcode.com/ipeternella/",
      hackerrank: "https://www.hackerrank.com/ipeternella",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
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
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
