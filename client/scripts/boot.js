// ./client/scripts/boot.js
/**
 * @ngdoc service
 * @name app:boot
 * @description Application Boot Loader.
 */
(function () {
  'use strict';

  var env = {

    /**
     * @ngdoc property
     * @name baseUrl
     * @propertyOf app:boot
     * @description Base URL for JS behavior/event/AJAX/vendor/etc.
     */
    baseUrl: 'scripts/',

    /**
     * @ngdoc property
     * @name paths
     * @propertyOf app:boot
     * @description Dependency paths.
     */
    paths: {

      'angularAMD' : 'ext/angularAMD',
      'ngload'     : 'ext/ngload',

      'angular'          : 'ext/angular',
      'angular-route'    : 'ext/angular-route',
      'angular-animate'  : 'ext/angular-animate',
      'angular-cookies'  : 'ext/angular-cookies',
      'angular-resource' : 'ext/angular-resource',
      'angular-sanitize' : 'ext/angular-sanitize',
      'angular-touch'    : 'ext/angular-touch',
      'angular-ui-router': 'ext/angular-ui-router',

      'core/http'        : 'http',
      'core/route'       : 'route',

      'interface'        : 'interface',

      'HomeModuleIndexController'        : 'module/home/index',
      'SettingsModuleIndexController'    : 'module/settings/index',
      'HeaderSectionIndexController'     : 'section/header/index',
      'NavigationSectionIndexController' : 'section/nav/index'


    },

    /**
     * @ngdoc property
     * @name shim
     * @propertyOf app:boot
     * @description TBD
     */
    shim: {

      'angular': {
        exports: 'angular'
      },

      'angular-route': [
          'angular'
      ],

      'angularAMD': [
          'angular'
      ],

      'ngload': [
          'angularAMD'
      ],

      'angular-animate': [
          'angular'
      ],

      'angular-cookies': [
          'angular'
      ],

      'angular-resource': [
          'angular'
      ],

      'angular-sanitize': [
          'angular'
      ],

      'angular-touch': [
          'angular'
      ],

      'angular-ui-router': [
        'angular'
      ]

    },

    deps: ['interface']
  };

  require.config(env);
})();
