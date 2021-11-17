module.exports = {
  siteMetadata: {
    siteUrl: "https://ipeternella.com",
    title: "ipeternella",
    social: {
      github: "https://github.com/ipeternella",
      linkedin: "https://www.linkedin.com/in/igor-grillo-peternella/",
      twitter: "https://twitter.com/grillo_igor",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ],
}
