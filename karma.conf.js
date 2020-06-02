module.exports = function (config) {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['BrowserStack'],
    files: ['src/**/*.spec.js'],
    browsers: ['bs_chrome_mac'],
    singleRun: true,
    browserStack: {},
    customLaunchers: {
      bs_chrome_mac: {
        base: 'BrowserStack',
        browser: 'Chrome',
        os: 'OS X',
        os_version: 'Mountain Lion'
      }
    }
  });

};
