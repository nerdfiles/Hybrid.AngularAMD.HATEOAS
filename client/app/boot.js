// ./client/app/boot.js
/**
 * @ngdoc service
 * @name app:boot
 * @description Application Boot Loader.
 */
function boot () {
  'use strict';

  var env = {

    /**
     * @ngdoc property
     * @name baseUrl
     * @propertyOf app:boot
     * @description Base URL for JS behavior/event/AJAX/vendor/etc.
     */
    baseUrl: 'assets/app/',

    /**
     * @ngdoc property
     * @name paths
     * @propertyOf app:boot
     * @description Dependency paths.
     */
    paths: {

      // Needful
      'lodash' : 'vendor/lodash/dist/lodash',
      'cuid'   : 'vendor/cuid/dist/browser-cuid',

      // AMD Dependencies
      'angularAMD' : 'vendor/angularAMD/dist/angularAMD',

      // AMD Plugins
      'ngload' : 'vendor/angularAMD/dist/ngload',
      'css'    : 'vendor/RequireCSS/css',

      // Framework Dependencies
      'angular'            : 'vendor/angular/angular',
      'angular-animate'    : 'vendor/angular-animate/angular-animate',
      'angular-cookies'    : 'vendor/angular-cookies/angular-cookies',
      'angular-sanitize'   : 'vendor/angular-sanitize/angular-sanitize',
      'angular-ui-router'  : 'vendor/angular-ui-router/release/angular-ui-router',
      'angular-hypermedia' : 'vendor/angular-hypermedia/dist/hypermedia',
      'angular-material'   : 'vendor/angular-material/angular-material',
      'angular-aria'       : 'vendor/angular-aria/angular-aria',

      // Hypermedia Dependencies
      'linkheader-parser-browser' : 'vendor/linkheader-parser/dist/linkheader-parser-browser',
      'mediatype-parser-browser'  : 'vendor/mediatype-parser/dist/mediatype-parser-browser',
      'uri-templates'             : 'vendor/uri-templates/uri-templates',

      // Application Interface
      'interface' : 'interface',

      // Protocol Dependencies
      // 'core/protocol' : 'node_modules/dual-protocol/index',
      'core/dual'     : '/assets/dual',

      // Application Core
      'core/env'                : 'config/env',
      'core/http'               : 'http',
      'core/route'              : 'route',
      'core/window'             : 'component/window/index',
      'core/meta'               : 'component/meta/index',
      'core/directive/manifest' : 'directive/manifest/index',

      // Application Commons
      'utils/google/maps' : 'utils/google.maps',
      'common/icons'      : 'common/icons',

      // Application Services
      'service/noop'    : 'service/noop',
      'service/order'   : 'service/order',
      'service/user'    : 'service/user',
      'service/error'   : 'service/error',

      // Application Externals
      'external/service/package' : 'external/package',

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

      'angular-ui-router': [
        'angular'
      ],

      'angular-aria': [
        'angular'
      ],

      'angular-material': [
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

    // deps: ['core/dual', 'interface']
    deps: ['interface']
  };

  require.config(env);
}

(boot)();
