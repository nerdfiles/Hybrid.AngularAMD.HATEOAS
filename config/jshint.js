// ./config/jshint.js
/**
 * @ngdoc object
 * @name config.module:jshint
 * @description jshint config.
 */
module.exports = function (grunt) {
  'use strict';

  var buildFiles = [
    '<%= env.client %>/scripts/*.js',
    '<%= env.client %>/scripts/module/home/*.js',
    '<%= env.client %>/scripts/module/settings/*.js',
    '<%= env.client %>/scripts/directive/*.js',
    '<%= env.client %>/scripts/filter/*.js',
    '<%= env.client %>/scripts/service/*.js'
  ];

  var objectInterface = {

    /**
     * @ngdoc property
     * @name build
     * @propertyOf config.module:jshint
     * @description Build task.
     */
    build: {
      options: {
        reporter       : require('jshint-stylish'),
        reporterOutput : '',
        jshintrc       : __dirname + '/../.jshintrc'
      },
      files: {
        src: buildFiles
      }
    }
  };

  return objectInterface;
};
