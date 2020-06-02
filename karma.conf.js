module.exports = function (config) {

  const webpackConfig = require('./webpack.config');

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['BrowserStack'],
    singleRun: true,
    failOnEmptyTestSuite: false,

    // Webpack
    webpack: webpackConfig,
    files: ['src/**/*.ts'],
    preprocessors: {
      'src/**/*.ts': ['webpack']
    },

    // BrowserStack
    browserStack: {},
    customLaunchers: {
      bs_chrome_mac: {
        base: 'BrowserStack',
        browser: 'Chrome',
        os: 'OS X',
        os_version: 'Mountain Lion'
      }
    },
    browsers: ['bs_chrome_mac']
  });

};
