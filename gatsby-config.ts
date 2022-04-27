import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ech-survey-static`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [`gatsby-plugin-postcss`],
}

export default config
