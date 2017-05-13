// ./config/svgmin.js
/**
 * @ngdoc object
 * @name config.module:svgmin
 * @description svgmin config.
 */
module.exports = function (grunt) {
  'use strict';

  var plugins = [
    {
      removeViewBox: false
    },
    {
      removeUselessStrokeAndFill: false
    },
    {
      removeAttrs: {
        attrs: ['xmlns']
      }
    }
  ];

  var objectInterface = {

    /**
     * @ngdoc property
     * @name options
     * @propertyOf config.module:svgmin
     * @description Global options configuration.
     */
    options: {
      plugins: plugins
    },

    /**
     * @ngdoc property
     * @name deploy
     * @propertyOf config.module:svgmin
     * @description Deploy task.
     */
    deploy: {
      files: {
        '<%= env.dist %>/logo.svg': '<%= env.build %>/logo.svg'
      }
    }
  };

  return objectInterface;
};
