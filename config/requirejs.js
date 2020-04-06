// ./config/requirejs.js
/**
 * @ngdoc object
 * @name config.module:requirejs
 * @description requirejs config.
 */
module.exports = function (grunt) {
  'use strict';

  var modules = [
    { name: 'boot' },
    {
      name    : 'http',
      exclude : ['boot']
    },
    {
      name    : 'route',
      exclude : ['boot']
    },
    {
      name    : 'config/env',
      exclude : ['boot']
    },
    {
      name    : 'config/api',
      exclude : ['boot']
    },
    {
      name    : 'service/user',
      exclude : ['boot']
    },
    {
      name    : 'module/home/index',
      exclude : ['boot']
    },
    {
      name    : 'module/companies/index',
      exclude : ['boot']
    },
    {
      name    : 'module/downloads/index',
      exclude : ['boot']
    },
    {
      name    : 'module/settings/index',
      exclude : ['boot']
    },
    {
      name    : 'section/header/index',
      exclude : ['boot']
    },
    {
      name    : 'section/nav/index',
      exclude : ['boot']
    },
    {
      name    : 'interface',
      exclude : ['boot']
    }
  ];

  var objectInterface = {

    /**
     * @ngdoc property
     * @name build
     * @propertyOf config.module:requirejs
     * @description Build task.
     */
    build: {
      options: {
        // TODO assets/scripts?
        baseUrl                    : '<%= env.client %>/<%= env.clientScripts %>',
        mainConfigFile             : '<%= env.client %>/<%= env.clientScripts %>/boot.js',
        findNestedDependencies     : true,
        preserveLicenseComments    : false,
        optimizeAllPluginResources : true,
        logLevel                   : 0,

        // removeCombined          : true,
        removeCombined             : false,

        // optimize                : 'none',
        optimize                   : 'uglify2',

        // modules                 : modules,
        name                       : 'interface',
        paths                      : {

          'lodash' : '<%= env.vendor %>/lodash/dist/lodash',
          'cuid'   : '<%= env.vendor %>/cuid/dist/browser-cuid',

          'angularAMD' : '<%= env.vendor %>/angularAMD/dist/angularAMD',

          'ngload'     : '<%= env.vendor %>/ngload',
          'css'    : '<%= env.vendor %>/RequireCSS/css',

          'restangular' : '<%= env.vendor %>/restangular/dist/restangular.min',
          'model'       : 'config/model',

          'angular'          : '<%= env.vendor %>/angular/angular',
          'angular-material'    : '<%= env.vendor %>/angular-material/angular-material',
          'angular-aria'    : '<%= env.vendor %>/angular-aria/angular-aria',
          'angular-route'    : '<%= env.vendor %>/angular-route/angular-route',
          'angular-animate'  : '<%= env.vendor %>/angular-animate/angular-animate',
          'angular-cookies'  : '<%= env.vendor %>/angular-cookies/angular-cookies',
          'angular-sanitize' : '<%= env.vendor %>/angular-sanitize/angular-sanitize',
          'angular-touch'    : '<%= env.vendor %>/angular-touch/angular-touch',
          'angular-hypermedia' : '<%= env.vendor %>/angular-hypermedia/dist/hypermedia',
          'angular-ui-router': '<%= env.vendor %>/angular-ui-router/release/angular-ui-router',
          //'angular-hy-res'   : '<%= env.vendor %>/angular-hy-res-full',
          //
          // Hypermedia Dependencies
          'linkheader-parser-browser' : '<%= env.vendor %>/linkheader-parser/dist/linkheader-parser-browser',
          'mediatype-parser-browser'  : '<%= env.vendor %>/mediatype-parser/dist/mediatype-parser-browser',
          'uri-templates'             : '<%= env.vendor %>/uri-templates/uri-templates',


          // Application Commons
          'utils/google/maps' : 'utils/google.maps',
          'common/icons'      : 'common/icons',


          // Application Services
          'service/noop'    : 'service/noop',
          'service/order'   : 'service/order',
          'service/user'    : 'service/user',
          'service/error'   : 'service/error',
          'api'             : 'services/api',


          // Application Externals
          'external/service/package' : 'external/package',


          // Application Core
          'core/env'                : 'config/env',
          'core/http'               : 'config/http',
          'core/route'              : 'config/route',
          'core/window'             : 'component/window/index',
          'core/meta'               : 'component/meta/index',
          'core/directive/manifest' : 'directive/manifest/index',
          'core/form'               : 'directive/form/index',

          'interface'        : 'interface',

          'CompaniesController'   : 'module/companies/index',
          'DownloadsController'   : 'module/downloads/index',
          'HomeModuleIndexController'        : 'module/home/index',
          'SettingsModuleIndexController'    : 'module/settings/index',
          'OrdersModuleIndexController'   : 'module/orders/index',


          // Thematic Sections
          'HeaderSectionIndexController'       : 'section/header/index',
          'NavigationSectionIndexController'   : 'section/nav/index',
          'NotificationSectionIndexController' : 'section/notification/index',
          'BreadcrumbSectionIndexController'   : 'section/breadcrumb/index',
          'FooterSectionIndexController'       : 'section/footer/index',

        },

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

          'angular-hy-res': [
            'angular'
          ],

          'lodash': {
            exports: '_'
          }

        },

        // dir                     : '<%= env.build %>/<%= env.clientScripts %>/',
        // keepBuildDir            : true,
        out                        : './<%= env.build %>/<%= env.name %>/app.js'

      }
    }
  };

  return objectInterface;
};
