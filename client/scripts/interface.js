// ./client/scripts/interface.js
/**
 * @ngdoc interface
 * @name app:interface
 * @description Application Interface Module.
 */
define([
  'angularAMD',
  'angular-route',
  'angular-animate',
  'angular-cookies',
  'angular-resource',
  'angular-sanitize',
  'angular-touch'
], function (angularAMD) {
  'use strict';

  var appDependencies = [
    'ngRoute',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch'
  ];

  var app = angular.module('app', appDependencies);

  /**
   * @ngdoc method
   * @name routeContract
   * @methodOf app:interface
   * @function
   */
  app.config([
    '$routeProvider',
    routeContract
  ]);

  /**
   * @ngdoc method
   * @name httpConfig
   * @methodOf app:interface
   * @function
   */
  app.config([
    '$httpProvider',
    '$locationProvider',
    httpConfig
  ]);

  ////////////

  /**
   * @function routeContract
   */
  function routeContract ($routeProvider) {
    $routeProvider

      .when('/', angularAMD.route({
        templateUrl   : 'views/home.html',
        controllerUrl : 'module/home/index'
      }))

      .when('/settings', angularAMD.route({
        templateUrl   : 'views/settings.html',
        controllerUrl : 'module/settings/index'
      }))

      .otherwise({redirectTo: '/'});
  }

  /**
   * @function httpConfig
   */
  function httpConfig ($httpProvider, $locationProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $locationProvider.html5Mode(true);
  }

  return angularAMD.bootstrap(app);

});
