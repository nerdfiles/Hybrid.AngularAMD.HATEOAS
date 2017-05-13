// ./config/useminPrepare.js
/**
 * @ngdoc object
 * @name config.module:useminPrepare
 * @description useminPrepare config.
 */
module.exports = function (grunt) {
  'use strict';

  var objectInterface = {

    /**
     * @ngdoc property
     * @name options
     * @propertyOf config.module:useminPrepare
     * @description Global options configuration.
     */
    options : {
      dest: '<%= env.dist %>'
    },

    /**
     * @ngdoc property
     * @name html
     * @propertyOf config.module:useminPrepare
     * @description Specify index.index.
     */
    html    : 'client/index.html'
  };

  return objectInterface;
};
