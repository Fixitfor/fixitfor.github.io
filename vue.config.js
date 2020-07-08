const PrerenderSPAPlugin = require('prerender-spa-plugin');
module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      return {};
    }
    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: config.output.path,
          routes: ['/'],
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
            renderAfterDocumentEvent: 'rendered',
          }),
        }),
      ],
    };
  },
  pwa: {
    name: 'Fixit',
    themeColor: '#2a3783',
    msTileColor: '#2A3783',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-180x180.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },
    workboxOptions: {
      cacheId: 'fixit',
      importWorkboxFrom: 'local',
      navigateFallback: 'index.html',
      navigateFallbackWhitelist: [/^((?!\/404).)*$/],
    },
  },
  "publicPath": "",
  "pluginOptions": {
    "cordovaPath": "."
  },
  "transpileDependencies": [
    "vuetify"
  ]
}