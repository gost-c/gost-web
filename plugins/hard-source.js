const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = pluginOpts => {
  return poi => {
    poi.extendWebpack(config => {
      config.plugin('hard-source')
        .use(HardSourceWebpackPlugin, [pluginOpts])
    })
  }
}
