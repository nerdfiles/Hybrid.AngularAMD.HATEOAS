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

          'angularAMD' : '<%= env.vendor %>/angularAMD',
          'ngload'     : '<%= env.vendor %>/ngload',

          'angular'          : '<%= env.vendor %>/angular',
          'angular-route'    : '<%= env.vendor %>/angular-route',
          'angular-animate'  : '<%= env.vendor %>/angular-animate',
          'angular-cookies'  : '<%= env.vendor %>/angular-cookies',
          'angular-resource' : '<%= env.vendor %>/angular-resource',
          'angular-sanitize' : '<%= env.vendor %>/angular-sanitize',
          'angular-touch'    : '<%= env.vendor %>/angular-touch',
          'angular-ui-router': '<%= env.vendor %>/angular-ui-router',

          'core/http'        : 'http',
          'core/route'       : 'route',

          'interface'        : 'interface',

          'HomeModuleIndexController'        : 'module/home/index',
          'SettingsModuleIndexController'    : 'module/settings/index',
          'HeaderSectionIndexController'     : 'section/header/index',
          'NavigationSectionIndexController' : 'section/nav/index'

        },

        // dir                     : '<%= env.build %>/<%= env.clientScripts %>/',
        // keepBuildDir            : true,
        out                        : './<%= env.build %>/<%= env.name %>/app.js'

      }
    }
  };

  return objectInterface;
};
