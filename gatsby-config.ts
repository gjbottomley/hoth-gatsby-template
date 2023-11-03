import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Hoth Gatsby Template`,
    description: `Hoth a Gatsby Template`,
    author: `George Bottomley`,
    siteUrl: ``,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hoth Template`,
        short_name: ``,
        start_url: `/`,
        background_color: `#76BCBC`,
        display: `minimal-ui`,
        icon: ``,
      },
    },
  ],
}

export default config
