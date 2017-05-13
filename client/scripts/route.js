// ./client/scripts/route.js
/**
 * @ngdoc overview
 * @name app:route
 * @description Application Routes Module.
 */
define([
  'angularAMD'
], function (angularAMD) {
  'use strict';

  var redirectDefault = '/';

  /**
   * @function routeContract
   * @param $routeProvider
   * @returns {undefined}
   */
  function routeContract ($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('default', {
        url: '/',
        views: {
          'header': angularAMD.route({
            templateUrl   : 'views/section/header.html',
            controllerUrl : 'HeaderSectionIndexController',
            controllerAs  : 'vm'
          }),
          'nav': angularAMD.route({
            templateUrl   : 'views/section/nav.html',
            controllerUrl : 'NavigationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'main': angularAMD.route({
            templateUrl   : 'views/page/home.html',
            controllerUrl : 'HomeModuleIndexController',
            controllerAs  : 'vm'
          })
        }
      })

      .state('settings', {
        url: '/settings',
        views: {
          'header': angularAMD.route({
            templateUrl   : 'views/section/header.html',
            controllerUrl : 'HeaderSectionIndexController',
            controllerAs  : 'vm'
          }),
          'nav': angularAMD.route({
            templateUrl   : 'views/section/nav.html',
            controllerUrl : 'NavigationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'main': angularAMD.route({
            templateUrl   : 'views/page/settings.html',
            controllerUrl : 'SettingsModuleIndexController',
            controllerAs  : 'vm'
          })
        }
      });

    $urlRouterProvider
      .otherwise(redirectDefault);
  }

  return routeContract;

});
