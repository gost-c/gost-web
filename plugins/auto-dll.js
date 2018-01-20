const AutoDllPlugin = require('autodll-webpack-plugin')

module.exports = pluginOpts => {
  return poi => {
    poi.extendWebpack('development', config => {
      config.plugin('auto-dll')
        .use(AutoDllPlugin, [pluginOpts])
    })
  }
}
