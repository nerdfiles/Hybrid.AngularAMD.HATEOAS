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
        'client/scripts/http.js',
        'client/scripts/route.js',
        'client/scripts/interface.js',
        'client/scripts/module/**/*.js',
        'client/scripts/component/**/*.js',
        'client/scripts/directive/**/*.js',
        'client/scripts/filter/**/*.js',
        'client/scripts/section/**/*.js',
        'client/scripts/service/**/*.js',
        '!client/script/boot.unit.js',
        '!client/script/interface.spec.js',
        '!client/script/filter/*.spec.js',
        '!client/script/module/**/*.spec.js',
        '!client/script/section/**/*.spec.js',
        '!client/script/directive/**/*.spec.js',
        '!client/script/component/**/*.spec.js'
      ],
      title: 'Documentation'
    }
  };

  return objectInterface;
};
