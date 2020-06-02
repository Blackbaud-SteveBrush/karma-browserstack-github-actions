module.exports = (config) => {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['src/**/*.spec.js'],
    browsers: ['Chrome'],
    singleRun: true
  });

};
