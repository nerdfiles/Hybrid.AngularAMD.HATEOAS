// ./config/jshint.js
/**
 * @ngdoc object
 * @name config.module:jshint
 * @description jshint config.
 */
module.exports = function (grunt) {
  'use strict';

  var buildFiles = [
    '<%= env.client %>/app/*.js',
    '<%= env.client %>/app/section/header/*.js',
    '<%= env.client %>/app/section/navigation/*.js',
    '<%= env.client %>/app/section/notifications/*.js',
    '<%= env.client %>/app/section/breadcrumb/*.js',
    '<%= env.client %>/app/section/footer/*.js',
    '<%= env.client %>/app/module/home/*.js',
    '<%= env.client %>/app/module/settings/*.js',
    '<%= env.client %>/app/module/order/*.js',
    '<%= env.client %>/app/directive/**/*.js',
    '<%= env.client %>/app/component/**/*.js',
    '<%= env.client %>/app/filter/*.js',
    '<%= env.client %>/app/service/*.js'
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
        // reporterOutput : __dirname + '/../reports/jshint/index.html',
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
