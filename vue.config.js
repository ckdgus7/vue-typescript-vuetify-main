module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config.externals({
      'ExternalComponent': 'ExternalComponent'
    })
  }
}
