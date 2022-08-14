const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: './src-cordova/www',
  publicPath: './',

  pluginOptions: {
    cordovaPath: 'src-cordova'
  }
});
