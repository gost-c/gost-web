const path = require('path')
const pkg = require('./package')

// const env = process.env.NODE_ENV
// const apiUrl = env == "production" ? 'http://gost.congz.pw/' : 'http://localhost:8000/'

module.exports = {
  entry: [
    'src/polyfills.js',
    'src/index.js'
  ],
  html: {
    title: pkg.productName,
    description: pkg.descrption,
    template: path.join(__dirname, 'index.ejs')
  },
  presets: [
    require('poi-preset-sw-precache')()
  ],
  env: {
    // API_URL: 'http://localhost:8000/'
    API_URL: 'http://gost.congz.pw/'
  }
}
