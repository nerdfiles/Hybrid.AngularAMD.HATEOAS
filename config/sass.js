// ./config/sass.js
/**
 * @ngdoc object
 * @name config.module:sass
 * @description sass config.
 */
module.exports = function (grunt) {
  'use strict';

  var buildFiles = [{
    expand : true,
    cwd    : '<%= env.client %>/<%= env.clientStyles %>',
    src    : [
      '*.scss',
      'config/*.scss',
      'atom/*.scss',
      'molecule/*.scss',
      'organelle/*.scss',
      'component/**/*.scss',
      'module/**/*.scss',
      'section/**/*.scss',
      'directive/**/*.scss'
    ],
    dest   : '<%= env.client %>/<%= env.clientStyles %>',
    ext    : '.css'
  }];

  var objectInterface = {

    /**
     * @ngdoc property
     * @name deploy
     * @propertyOf config.module:sass
     * @description Build task.
     */
    build: {
      files: buildFiles
    }
  };

  return objectInterface;
};
