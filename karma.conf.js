module.exports = function (config) {

  const useBrowserStack = (process.env.USE_BROWSER_STACK);

  const webpackConfig = require('./webpack.config');

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['dots'],
    singleRun: true,
    failOnEmptyTestSuite: false,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],

    // Webpack
    webpack: webpackConfig,
    files: ['src/**/*.ts'],
    preprocessors: {
      'src/**/*.ts': ['webpack']
    }
  });

  if (useBrowserStack) {
    config.set({
      browserStack: {},
      customLaunchers: {
        bs_chrome_mac: {
          base: 'BrowserStack',
          browser: 'Chrome',
          os: 'OS X',
          os_version: 'Mountain Lion'
        }
      },
      browsers: ['bs_chrome_mac'],
      reporters: ['dots', 'BrowserStack']
    });
  }

};
