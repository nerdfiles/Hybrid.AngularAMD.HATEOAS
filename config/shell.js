// ./config/shell.js
/**
 * @ngdoc object
 * @name config.module:shell
 * @description shell config.
 */
var path = require('path');

module.exports = function (grunt) {

	/**
   * @ngdoc method
   * @methodOf config.module:shell
	 * @name cordovaCommand
	 * @param {string} command Cordova command to execute.
	 * @returns {string} Path to Cordova directory.
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

