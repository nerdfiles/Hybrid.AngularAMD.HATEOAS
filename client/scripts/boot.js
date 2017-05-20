// ./client/scripts/boot.js
/**
 * @ngdoc service
 * @name app:boot
 * @description Application Boot Loader.
 */
(boot)();

function boot () {
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
      'lodash' : 'ext/lodash/dist/lodash',
      'cuid'   : 'ext/cuid/dist/browser-cuid',

      // AMD Dependencies
      'angularAMD' : 'ext/angularAMD/dist/angularAMD',

			// AMD Plugins
      'ngload' : 'ext/angularAMD/dist/ngload',
      'css'    : 'ext/RequireCSS/css',

      // Framework Dependencies
      'angular'            : 'ext/angular/angular',
      'angular-animate'    : 'ext/angular-animate/angular-animate',
      'angular-cookies'    : 'ext/angular-cookies/angular-cookies',
      'angular-sanitize'   : 'ext/angular-sanitize/angular-sanitize',
      'angular-ui-router'  : 'ext/angular-ui-router/release/angular-ui-router',
      'angular-hypermedia' : 'ext/angular-hypermedia/dist/hypermedia',
			'angular-material'   : 'ext/angular-material/angular-material',
      'angular-aria'       : 'ext/angular-aria/angular-aria',

      // Hypermedia Dependencies
      'linkheader-parser-browser' : 'ext/linkheader-parser/dist/linkheader-parser-browser',
      'mediatype-parser-browser'  : 'ext/mediatype-parser/dist/mediatype-parser-browser',
      'uri-templates'             : 'ext/uri-templates/uri-templates',

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
