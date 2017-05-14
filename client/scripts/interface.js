// ./client/scripts/interface.js
/**
 * @ngdoc interface
 * @name app:interface
 * @description Application Interface Module.
 */
define([
  'angularAMD',
  'core/http',
  'core/route',
  'angular-animate',
  'angular-cookies',
  'angular-sanitize',
  'angular-touch',
  'angular-ui-router',
  'angular-hypermedia'
], function (angularAMD, httpSettings, routeContract) {
  'use strict';

  var appDependencies = [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'hypermedia'
  ];

  var app = angular.module('app', appDependencies);

  /**
   * @ngdoc method
   * @name routeContract
   * @methodOf app:interface
   * @function
   */
  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    routeContract
  ]);

  /**
   * @ngdoc method
   * @name httpSettings
   * @methodOf app:interface
   * @function
   */
  app.config([
    '$httpProvider',
    '$locationProvider',
    httpSettings
  ]);

  ////////////

  return angularAMD.bootstrap(app);

});
