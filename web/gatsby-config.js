// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

const token = process.env.SANITY_READ_TOKEN || process.env.REACT_SANITY_DEPLOY_STUDIO_TOKEN

console.log('SANITY TOKEN = ', token)

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: true,
        overlayDrafts: true,
      },
    },
  ],
}
