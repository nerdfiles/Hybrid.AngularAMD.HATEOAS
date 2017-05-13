// ./config/ngdocs.js
/**
 * @ngdoc object
 * @name config.module:ngdocs
 * @description ngdocs config.
 */
module.exports = function (grunt) {
  'use strict';

  var objectInterface = {

    /**
     * @ngdoc property
     * @name options
     * @propertyOf config.module:ngdocs
     * @description Global options configuration for config.
     */
    options: {
      dest           : 'docs',
      html5Mode      : true,
      startPage      : '/api',
      title          : 'Hybrid.angularAMD.HATEOAS',
      titleLink      : '/api',
      inlinePartials : true,
      bestMatch      : true,
      discussions    : {
        shortName : 'hybridNgAmdHateoas',
        url       : 'https://git.kpd-i.com/aalexander/Hybrid.angularAMD.HATEOAS/issues',
        dev       : true
      }
    },

    /**
     * @ngdoc property
     * @name api
     * @propertyOf config.module:ngdocs
     * @description API task.
     */
    api: {
      src: [
        'gruntfile.js',
        'config/*.js',
        'basics/*.js',
        'workflows/*.js',
        'client/scripts/boot.js',
        'client/scripts/interface.js',
        'client/scripts/module/**/*.js',
        '!client/script/boot.unit.js',
        '!client/script/interface.spec.js',
        '!client/script/modules/**/*.spec.js'
      ],
      title: 'Documentation'
    }
  };

  return objectInterface;
};
