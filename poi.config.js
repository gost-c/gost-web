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
    template: path.join(__dirname, 'index.ejs'),
    inject: true
  },
  presets: [
    require('poi-preset-sw-precache')(),
    require('poi-preset-bundle-report')(),
    require('./plugins/auto-dll')({
      debug: true,
      inject: true,
      filename: '[name]_[hash].js',
      path: './dll',
      entry: {
        vendor: [
          'vue',
          'axios',
          'clipboard',
          'dom-to-image',
          'native-toast',
          'nprogress',
          'prismjs',
          'promise-polyfill',
          'tinydate',
          'vue-js-modal',
          'vue-qrcode',
          'vue-router'
        ]
      }
    }),
    require('./plugins/hard-source')(),
    require('./plugins/uglify')()
  ],
  env: {
    // API_URL: 'http://localhost:9393/'
    API_URL: 'https://api.gost.zcong.me/'
  }
}
