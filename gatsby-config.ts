import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Paradise Cookies`,
    description: `Classic cookies, naturally vegan and free of added preservatives.`,
    author: `George Bottomley`,
    icon: `./src/favicon/android-chrome-192x192.png`,
    siteUrl: `https://paradisecookies.co.nz`,
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
        name: `Paradise Cookies`,
        short_name: `Paradise`,
        start_url: `/`,
        background_color: `#76BCBC`,
        display: `minimal-ui`,
        icon: `src/favicon/android-chrome-192x192.png`,
      },
    },
  ],
}

export default config
