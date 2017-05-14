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
    baseUrl: 'assets/scripts/',

    /**
     * @ngdoc property
     * @name paths
     * @propertyOf app:boot
     * @description Dependency paths.
     */
    paths: {

      // Needful
      'lodash' : 'ext/lodash',
      'cuid'   : 'ext/browser-cuid',

      // AMD Dependencies
      'angularAMD' : 'ext/angularAMD',
      'ngload'     : 'ext/ngload',

      // Framework Dependencies
      'angular'            : 'ext/angular',
      'angular-route'      : 'ext/angular-route',
      'angular-animate'    : 'ext/angular-animate',
      'angular-cookies'    : 'ext/angular-cookies',
      'angular-sanitize'   : 'ext/angular-sanitize',
      'angular-touch'      : 'ext/angular-touch',
      'angular-ui-router'  : 'ext/angular-ui-router',
      'angular-hypermedia' : 'ext/hypermedia',

      // Hypermedia Dependencies
      'linkheader-parser-browser' : 'ext/linkheader-parser-browser',
      'mediatype-parser-browser'  : 'ext/mediatype-parser-browser',
      'uri-templates'             : 'ext/uri-templates',

      // Application Interface
      'interface' : 'interface',

      // Application Core
      'core/http'   : 'http',
      'core/route'  : 'route',
      'core/window' : 'component/window/index',
      'core/meta'   : 'component/meta/index',

      // Application Services
      'service/order' : 'service/order',
      'service/user'  : 'service/user',
      'service/error' : 'service/error',

      // Thematic Sections
      'HeaderSectionIndexController'       : 'section/header/index',
      'NavigationSectionIndexController'   : 'section/nav/index',
      'NotificationSectionIndexController' : 'section/notification/index',
      'BreadcrumbSectionIndexController'   : 'section/breadcrumb/index',
      'FooterSectionIndexController'       : 'section/footer/index',

      // Module Pages
      'HomeModuleIndexController'        : 'module/home/index',
      'OrdersModuleIndexController'      : 'module/orders/index',
      'SettingsModuleIndexController'    : 'module/settings/index'

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

      'angular-sanitize': [
        'angular'
      ],

      'angular-touch': [
        'angular'
      ],

      'angular-ui-router': [
        'angular'
      ],

      'angular-hypermedia': [
        'angular',
        'linkheader-parser-browser',
        'mediatype-parser-browser',
        'uri-templates'
      ],

      'lodash': {
        exports: '_'
      },

      'cuid': {
        exports: 'cuid'
      }

    },

    deps: ['interface']
  };

  require.config(env);
})();
