module.exports = pluginOptions => {
  return poi => {
    poi.extendWebpack('production', config => {
      // Say goodbye to uglify plugin
      const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

      // do not use if `minimize` is off
      if (config.plugins.has('minimize')) {
        const minimizeOptions = config.plugin('minimize').store.get('args')[0] || {}
        // inherit minimize options
        const defaultOptions = {
          cache: true,
          parallel: true,
          sourceMap: minimizeOptions.sourceMap,
          uglifyOptions: {
            compress: minimizeOptions.compressor,
            output: minimizeOptions.output
          }
        }

        const opts = Object.assign({}, defaultOptions, pluginOptions)

        config.plugin('minimize')
          .use(UglifyJsPlugin, [opts])
      }
    })
  }
}
