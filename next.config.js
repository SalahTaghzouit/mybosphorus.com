module.exports = {
  target: 'serverless',
  env: {
    GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }

    return config
  }
}
