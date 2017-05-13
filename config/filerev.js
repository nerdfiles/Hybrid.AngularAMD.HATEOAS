// ./config/filerev.js
/**
 * @ngdoc object
 * @name config.module:filerev
 * @description filerev config.
 */
module.exports = function (grunt) {
  'use strict';

  var objectInterface = {

    /**
     * @ngdoc property
     * @name options
     * @propertyOf config.module:filerev
     * @description Global options configuration.
     */
    options: {
      algorithm : 'md5',
      length    : 8
    },

    /**
     * @ngdoc property
     * @name images
     * @propertyOf config.module:filerev
     * @description Images.
     */
    images: {
      src: 'images/**/*.{jpg,jpeg,gif,png,webp}'
    }
  };

  return objectInterface;
};
