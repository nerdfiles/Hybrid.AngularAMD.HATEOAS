// ./client/app/interface.js
/**
 * @ngdoc interface
 * @name app:interface
 * @description Application Interface Module.
 */
function __interface__ (angularAMD, env, httpConfig, routeContract, applicationModel) {
  'use strict';

  var appDependencies = [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngAria',
    'ngMaterial',
    'ui.router',
    'restangular',
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
   * @name httpConfig
   * @function
   */
  app.config([
    '$httpProvider',
    '$locationProvider',
    httpConfig
  ]);

  // app.config(applicationModel)


  ////////////

  return angularAMD.bootstrap(app);

}

define([
  'angularAMD',
  'core/env',
  'core/http',
  'core/route',
  'model',
  'common/icons',
  'angular-aria',
  'angular-material',
  'angular-animate',
  'angular-cookies',
  'angular-sanitize',
  'angular-ui-router',
  'restangular',
  'angular-hypermedia'
], __interface__);
