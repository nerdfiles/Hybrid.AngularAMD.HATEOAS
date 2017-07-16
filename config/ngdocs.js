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
        'client/app/boot.js',
        'client/app/http.js',
        'client/app/route.js',
        'client/app/interface.js',
        'client/app/module/**/*.js',
        'client/app/component/**/*.js',
        'client/app/directive/**/*.js',
        'client/app/filter/**/*.js',
        'client/app/section/**/*.js',
        'client/app/service/**/*.js',
        '!client/app/boot.unit.js',
        '!client/app/interface.spec.js',
        '!client/app/filter/*.spec.js',
        '!client/app/module/**/*.spec.js',
        '!client/app/section/**/*.spec.js',
        '!client/app/directive/**/*.spec.js',
        '!client/app/component/**/*.spec.js'
      ],
      title: 'Documentation'
    }
  };

  return objectInterface;
};
