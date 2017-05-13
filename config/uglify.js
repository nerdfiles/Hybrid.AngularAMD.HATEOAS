// ./config/uglify.js
/**
 * @ngdoc object
 * @name config.module:uglify
 * @description uglify config.
 */
module.exports = function (grunt) {
  'use strict';

  var deployFiles = [
    {
      cwd    : '<%= env.build %>/scripts/',
      expand : true,
      dest   : '<%= env.dist %>/scripts/',
      src    : [
        '*.js',
        'ext/require.js',
        'module/home/*.js',
        'module/settings/*.js'
      ]
    }
  ];

  var objectInterface = {

    /**
     * @ngdoc property
     * @name deploy
     * @propertyOf config.module:uglify
     * @description Deploy task.
     */
    deploy: {
      options: {
        preserveComments: 'some'
      },
      files: deployFiles
    }
  };

  return objectInterface;
};
