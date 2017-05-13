// ./config/preprocess.js
/**
 * @ngdoc object
 * @name config.module:preprocess
 * @description preprocess config.
 */
module.exports = function (grunt) {
  'use strict';

  var objectInterface = {

    /**
     * @ngdoc property
     * @name build
     * @propertyOf config.module:preprocess
     * @description Build task.
     */
    build: {
      src  : '<%= env.client %>/index.html',
      dest : '<%= env.build %>/index.build.html'
    }
  };

  return objectInterface;
};
