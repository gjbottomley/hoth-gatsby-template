import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Hoth Template`,
    description: `Hoth - A Gatsby Template`,
    author: `George Bottomley`,
    icon: `src/images/icon.png`,
    siteUrl: `https://github.com/gjbottomley/hoth-gatsby-template`,
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
        short_name: `Hoth`,
        start_url: `/`,
        background_color: `#76BCBC`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}

export default config
