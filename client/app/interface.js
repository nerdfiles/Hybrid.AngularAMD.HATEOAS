// ./client/app/interface.js
/**
 * @ngdoc interface
 * @name app:interface
 * @description Application Interface Module.
 */
function __interface__ (angularAMD, env, httpSettings, routeContract) {
  'use strict';

  var appDependencies = [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngAria',
    'ngMaterial',
    'ui.router',
    'hypermedia'
  ];

  var app = angular.module('app', appDependencies);

  app.constant('env', env);

  /**
   * @ngdoc method
   * @methodOf app:interface
   * @name routeContract
   * @function
   */
  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    routeContract
  ]);

  /**
   * @ngdoc method
   * @methodOf app:interface
   * @name httpSettings
   * @function
   */
  app.config([
    '$httpProvider',
    '$locationProvider',
    httpSettings
  ]);

  ////////////

  return angularAMD.bootstrap(app);

}

define([
  'angularAMD',
  'core/env',
  'core/http',
  'core/route',
  'common/icons',
  'angular-aria',
  'angular-material',
  'angular-animate',
  'angular-cookies',
  'angular-sanitize',
  'angular-ui-router',
  'angular-hypermedia'
], __interface__);
