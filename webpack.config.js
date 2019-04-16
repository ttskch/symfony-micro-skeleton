const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .cleanupOutputBeforeBuild()
  .autoProvidejQuery()
  .autoProvideVariables({
    Popper: ['popper.js', 'default'],
  })
  .enableSassLoader()
  .enablePostCssLoader()
  .enableVersioning(Encore.isProduction())
  .enableSourceMaps(!Encore.isProduction())
  .addEntry('app', [
    './assets/js/app.js',
    './assets/scss/app.scss',
  ])
  .addEntry('vendors', [
    // js
    'jquery',
    'bootstrap',
    'popper.js',
    // styles
    './assets/scss/vendors.scss',
  ])
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .copyFiles({
    from: './assets/images',
    to: 'images/[path][name].[ext]',
  })
;

module.exports = Encore.getWebpackConfig();
