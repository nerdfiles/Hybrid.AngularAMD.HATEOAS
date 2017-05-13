// ./config/clean.js
/**
 * @ngdoc object
 * @name config.module:clean
 * @description clean config.
 */
module.exports = function (grunt) {
  'use strict';

  var objectInterface = {

    /**
     * @ngdoc property
     * @name options
     * @propertyOf config.module:clean
     * @description Global options configuration.
     */
    options : { force: true },

    /**
     * @ngdoc property
     * @name build
     * @propertyOf config.module:clean
     * @description Build task.
     */
    build   : ['<%= env.build %>'],

    /**
     * @ngdoc property
     * @name deploy
     * @propertyOf config.module:clean
     * @description Deloy task.
     */
    deploy  : [
      '<%= env.dist %>/*'
    ]
  };

  return objectInterface;
};
