// ./client/app/route.js
/**
 * @ngdoc overview
 * @name app:route
 * @description Application Routes Module.
 */
function route (angularAMD) {
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
            templateUrl   : 'assets/app/section/header/index.html',
            controllerUrl : 'HeaderSectionIndexController',
            controllerAs  : 'vm'
          }),
          'nav': angularAMD.route({
            templateUrl   : 'assets/app/section/nav/index.html',
            controllerUrl : 'NavigationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'notification': angularAMD.route({
            templateUrl   : 'assets/app/section/notification/index.html',
            controllerUrl : 'NotificationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'breadcrumb': angularAMD.route({
            templateUrl   : 'assets/app/section/breadcrumb/index.html',
            controllerUrl : 'BreadcrumbSectionIndexController',
            controllerAs  : 'vm'
          }),
          'main': angularAMD.route({
            templateUrl   : 'assets/app/module/home/index.html',
            controllerUrl : 'HomeModuleIndexController',
            controllerAs  : 'vm'
          }),
          'footer': angularAMD.route({
            templateUrl   : 'assets/app/section/footer/index.html',
            controllerUrl : 'FooterSectionIndexController',
            controllerAs  : 'vm'
          })
        }
      })

      .state('orders', {
        url: '/orders/:id?',
        views: {
          'header': angularAMD.route({
            templateUrl   : 'assets/app/section/header/index.html',
            controllerUrl : 'HeaderSectionIndexController',
            controllerAs  : 'vm'
          }),
          'nav': angularAMD.route({
            templateUrl   : 'assets/app/section/nav/index.html',
            controllerUrl : 'NavigationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'notification': angularAMD.route({
            templateUrl   : 'assets/app/section/notification/index.html',
            controllerUrl : 'NotificationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'breadcrumb': angularAMD.route({
            templateUrl   : 'assets/app/section/breadcrumb/index.html',
            controllerUrl : 'BreadcrumbSectionIndexController',
            controllerAs  : 'vm'
          }),
          'main': angularAMD.route({
            templateUrl   : 'assets/app/module/orders/index.html',
            controllerUrl : 'OrdersModuleIndexController',
            controllerAs  : 'vm'
          }),
          'footer': angularAMD.route({
            templateUrl   : 'assets/app/section/footer/index.html',
            controllerUrl : 'FooterSectionIndexController',
            controllerAs  : 'vm'
          })
        }
      })

      .state('settings', {
        url: '/settings',
        views: {
          'header': angularAMD.route({
            templateUrl   : 'assets/app/section/header/index.html',
            controllerUrl : 'HeaderSectionIndexController',
            controllerAs  : 'vm'
          }),
          'nav': angularAMD.route({
            templateUrl   : 'assets/app/section/nav/index.html',
            controllerUrl : 'NavigationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'notification': angularAMD.route({
            templateUrl   : 'assets/app/section/notification/index.html',
            controllerUrl : 'NotificationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'breadcrumb': angularAMD.route({
            templateUrl   : 'assets/app/section/breadcrumb/index.html',
            controllerUrl : 'BreadcrumbSectionIndexController',
            controllerAs  : 'vm'
          }),
          'main': angularAMD.route({
            templateUrl   : 'assets/app/module/settings/index.html',
            controllerUrl : 'SettingsModuleIndexController',
            controllerAs  : 'vm'
          }),
          'footer': angularAMD.route({
            templateUrl   : 'assets/app/section/footer/index.html',
            controllerUrl : 'FooterSectionIndexController',
            controllerAs  : 'vm'
          })
        }
      });

    $urlRouterProvider
      .otherwise(redirectDefault);
  }

  return routeContract;

}

define([
  'angularAMD'
], route);
