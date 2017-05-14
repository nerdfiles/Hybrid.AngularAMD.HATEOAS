// ./config/shell.js
var path = require('path');

module.exports = function (grunt) {

	/**
   * @ngdoc function
	 * @function cordovaCommand
	 * @param {string} command Cordova command to execute.
	 * @returns {string}
	 */
  var cordovaCommand = function (command) {
    var target = grunt.option('target') || 'ios';
    return path.join(__dirname, 'platforms', target, 'cordova', command);
  };

  var objectInterface = {
    build: {
      command: 'cordova build && ' + cordovaCommand('emulate')
    },
    run: {
      command: 'cordova build &&' + cordovaCommand('run')
    }
  };

  return objectInterface;
};

