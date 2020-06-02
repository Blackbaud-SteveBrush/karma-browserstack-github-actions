module.exports = function (config) {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['src/**/*.spec.js'],
    browsers: ['ChromeHeadless'],
    singleRun: true
  });

};
