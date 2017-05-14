// ./test/karma.conf.js
module.exports = function(config) {

  config.set({
    // setPath: '../',
    frameworks: ['jasmine'],
    files: [
      '../node_modules/expect.js/index.js',
      'module/**/*js',
      '../client/scripts/ext/angular.js',
      '../client/scripts/ext/require.js',
      '../test/ext/angular/angular-mocks.js',
      '../client/scripts/**/*.js',
      // 'test/unit/websockets.js',
      // 'test/unit/mockData.js',
      // 'test/unit/**/*.js'
    ],
    autoWatch: false,
    singleRun: true,
    browsers: ['PhantomJS'],
    junitReporter: {
      outputFile : 'reports/test_out/unit.xml',
      suite      : 'unit'
    }

  });
};
