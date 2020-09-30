/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://www.anhnguyen.page/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/'
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:300,400', 'Roboto Mono']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-113472346-1',
        anonymize: true,
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Anh Nguyen',
        short_name: 'anguyen',
        start_url: '/',
        background_color: '#1e2732',
        theme_color: '#1e2732',
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicon/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: '/favicon/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          }
        ]
      }
    },
    //'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components'
  ],
}

