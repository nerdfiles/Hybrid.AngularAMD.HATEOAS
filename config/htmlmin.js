// ./config/htmlmin.js
/**
 * @ngdoc object
 * @name config.module:htmlmin
 * @description htmlmin config.
 */
module.exports = function (grunt) {
  'use strict';

  var buildFiles = [
    { '<%= env.build %>/index.html': '<%= env.build %>/index.build.html' },
    {
      cwd     : '<%= env.client %>/<%= env.views %>/',
      expand  : true,
      flatten : false,
      dest    : '<%= env.build %>/<%= env.views %>/',
      src     : ['*.html']
    }
  ];

  var deployFiles = [
    { '<%= env.dist %>/index.html': '<%= env.build %>/index.html' },
    {
      cwd     : '<%= env.build %>/<%= env.clientScripts %>/<%= env.template %>/',
      expand  : true,
      flatten : false,
      dest    : '<%= env.dist %>/<%= env.clientScripts %>/<%= env.template %>/',
      src     : ['*.html']
    },
    {
      cwd     : '<%= env.build %>/<%= env.views %>/',
      expand  : true,
      flatten : false,
      dest    : '<%= env.dist %>/<%= env.views %>/',
      src     : ['*.html']
    }
  ];

  var objectInterface = {

    /**
     * @ngdoc property
     * @name build
     * @propertyOf config.module:htmlmin
     * @description Build task.
     */
    build: {
      options: {
        removeComments            : true,
        // collapseWhitespace        : true,
        collapseBooleanAttributes : true,
        removeAttributeQuotes     : true,
        removeRedundantAttributes : true,
        removeEmptyAttributes     : true,
        removeEmptyElements       : false
      },
      files: buildFiles
    },

    /**
     * @ngdoc property
     * @name deploy
     * @propertyOf config.module:htmlmin
     * @description Deploy task.
     */
    deploy: {
      options: {
        collapseWhitespace: true
      },
      files: deployFiles
    }
  };

  return objectInterface;
};
