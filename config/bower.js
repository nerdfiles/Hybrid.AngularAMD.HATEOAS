// ./config/bower.js
/**
 * @ngdoc object
 * @name config.module:bower
 * @description bower config.
 */
module.exports = function (grunt) {
  'use strict';

  var objectInterface = {

    /**
     * @ngdoc property
     * @name setup
     * @propertyOf config.module:bower
     * @description Setup task.
     */
    setup: {
      options: {
        install : true,
        copy    : false
      }
    }
  };

  return objectInterface;
};
