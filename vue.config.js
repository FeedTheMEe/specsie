module.exports = {
  configureWebpack: {
    node: {
      __dirname: true
    }
  },
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.ts'
    }
  }
}