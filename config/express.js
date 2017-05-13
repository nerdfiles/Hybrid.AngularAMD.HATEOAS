// ./config/express.js
/**
 * @ngdoc object
 * @name config.module:express
 * @description express config.
 */
var path = require('path');

module.exports = function (grunt) {
  'use strict';

  var objectInterface = {

    /**
     * @ngdoc property
     * @name options
     * @propertyOf config.module:express
     * @description Global options configuration.
     */
    options: {
    },

    /**
     * @ngdoc property
     * @name develop
     * @propertyOf config.module:express
     * @description Develop server configuration.
     */
    develop: {
      options: {
        script: './server/base.js'
      }
    }
  };

  return objectInterface;
};
