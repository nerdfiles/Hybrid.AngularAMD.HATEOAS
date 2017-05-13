// ./config/cssmin.js
/**
 * @ngdoc object
 * @name config.module:cssmin
 * @description cssmin config.
 */
module.exports = function (grunt) {
  'use strict';

  var buildFiles = [
    '<%= env.client %>/<%= env.clientStyles %>/interface.css'
  ];

  var objectInterface = {

    /**
     * @ngdoc property
     * @name build
     * @propertyOf config.module:cssmin
     * @description Build task.
     */
    build: {
      files: {
        '<%= env.build %>/<%= env.clientStyles %>/interface.css': buildFiles
      }
    }
  };

  return objectInterface;
};
