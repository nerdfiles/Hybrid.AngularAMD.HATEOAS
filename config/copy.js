// ./config/copy.js
/**
 * @ngdoc object
 * @name config.module:copy
 * @description copy config.
 */
module.exports = function (grunt) {
  'use strict';

  var objectInterface = {

    /**
     * @ngdoc property
     * @name setup
     * @propertyOf config.module:copy
     * @description Setup task.
     */
    setup: {
      files: [
        {
          cwd     : 'bower_components',
          expand  : true,
          flatten : false,
          dest    : '<%= env.client %>/<%= env.clientScripts %>/<%= env.vendor %>/',
          src     : grunt.project.vendorScripts
        },
        {
          cwd     : 'bower_components',
          expand  : true,
          flatten : false,
          dest    : '<%= env.client %>/<%= env.clientStyles %>/<%= env.vendor %>/',
          src     : grunt.project.vendorStyles
        }
      ]
    },

    /**
     * @ngdoc property
     * @name build
     * @propertyOf config.module:copy
     * @description Build task.
     */
    build: {
      files: [
        {
          cwd    : '<%= env.client %>/',
          expand : true,
          dest   : '<%= env.build %>/',
          src    : grunt.project.buildFiles
        }
      ]
    },

    /**
     * @ngdoc property
     * @name platform
     * @propertyOf config.module:copy
     * @description Prepare platform task.
     */
    setupPlatformBuild: {
      files: [
        {
          cwd     : '<%= env.client %>/',
          expand  : true,
          flatten : false,
          dest    : './config/platforms/www/',
          src     : grunt.project.buildFiles
        }
      ]
    },

    /**
     * @ngdoc property
     * @name deploy
     * @propertyOf config.module:copy
     * @description Deploy task.
     */
    deploy: {
      files: [
        {
          cwd    : '<%= env.build %>/',
          expand : true,
          dest   : '<%= env.dist %>/',
          src    : [
            'styles/**',
            'images/**',
            'data/**'
          ]
        }
      ]
    }
  };

  return objectInterface;
};

