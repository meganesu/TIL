# Image Plugins

* [`gatsby-plugin-sharp`](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/) - Handles the actual image processing. Generates images for multiple sizes. The important function in this plugin is `generateImageData`.
    * You need this pretty much any time you're using images in your site.
* [`gatsby-plugin-image`](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/) - Exports two image components for use in your pages/components: `StaticImage` and `GatsbyImage`.
    * Currently these components cannot be used in the body of .md or .mdx files.
    * If you're using the `GatsbyImage` component, you'll also need to install `gatsby-transformer-sharp`.
    * If you're using the `StaticImage` component, you'll also need to install `gatsby-source-filesystem`.
        * Using images from a remote URL? Install the `gatsby-source-filesystem` package, but it doesn't need to be in your `gatsby-config.js` file.
        * Using images from your local filesystem? Install `gatsby-source-filesystem` and configure it in your `gatsby-config.js` file.
* [`gatsby-transformer-sharp`](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/) - Updates the GraphQL schema definition for your site so that you can get images out of the GraphQL queries.
* [`gatsby-remark-images`](https://www.gatsbyjs.com/plugins/gatsby-remark-images/) - Process images used in the body of .md files.
