// ./client/scripts/interface.js
/**
 * @ngdoc interface
 * @name app:interface
 * @description Application Interface Module.
 */
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

function __interface__ (angularAMD, env, httpSettings, routeContract) {
  'use strict';
  console.log(env);

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

