// ./config/karma.js
/**
 */
module.exports = function (grunt) {

  var objectInterface = {
    unit: {
      configFile: __dirname + '/../test/karma.conf.js',
    },
    continuous: {
      configFile : __dirname + '/../test/karma.conf.js',
      singleRun  : true,
      browsers   : ['PhantomJS']
    },
  };

  return objectInterface;
};
