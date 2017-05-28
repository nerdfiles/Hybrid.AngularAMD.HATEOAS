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
            templateUrl   : 'assets/app/section/header.html',
            controllerUrl : 'HeaderSectionIndexController',
            controllerAs  : 'vm'
          }),
          'nav': angularAMD.route({
            templateUrl   : 'assets/app/section/nav.html',
            controllerUrl : 'NavigationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'notification': angularAMD.route({
            templateUrl   : 'assets/app/section/notification.html',
            controllerUrl : 'NotificationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'breadcrumb': angularAMD.route({
            templateUrl   : 'assets/app/section/breadcrumb.html',
            controllerUrl : 'BreadcrumbSectionIndexController',
            controllerAs  : 'vm'
          }),
          'main': angularAMD.route({
            templateUrl   : 'assets/app/module/home.html',
            controllerUrl : 'HomeModuleIndexController',
            controllerAs  : 'vm'
          }),
          'footer': angularAMD.route({
            templateUrl   : 'assets/app/section/footer.html',
            controllerUrl : 'FooterSectionIndexController',
            controllerAs  : 'vm'
          })
        }
      })

      .state('orders', {
        url: '/orders/:id?',
        views: {
          'header': angularAMD.route({
            templateUrl   : 'assets/app/section/header.html',
            controllerUrl : 'HeaderSectionIndexController',
            controllerAs  : 'vm'
          }),
          'nav': angularAMD.route({
            templateUrl   : 'assets/app/section/nav.html',
            controllerUrl : 'NavigationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'notification': angularAMD.route({
            templateUrl   : 'assets/app/section/notification.html',
            controllerUrl : 'NotificationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'breadcrumb': angularAMD.route({
            templateUrl   : 'assets/app/section/breadcrumb.html',
            controllerUrl : 'BreadcrumbSectionIndexController',
            controllerAs  : 'vm'
          }),
          'main': angularAMD.route({
            templateUrl   : 'assets/app/module/orders.html',
            controllerUrl : 'OrdersModuleIndexController',
            controllerAs  : 'vm'
          }),
          'footer': angularAMD.route({
            templateUrl   : 'assets/app/section/footer.html',
            controllerUrl : 'FooterSectionIndexController',
            controllerAs  : 'vm'
          })
        }
      })

      .state('settings', {
        url: '/settings',
        views: {
          'header': angularAMD.route({
            templateUrl   : 'assets/app/section/header.html',
            controllerUrl : 'HeaderSectionIndexController',
            controllerAs  : 'vm'
          }),
          'nav': angularAMD.route({
            templateUrl   : 'assets/app/section/nav.html',
            controllerUrl : 'NavigationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'notification': angularAMD.route({
            templateUrl   : 'assets/app/section/notification.html',
            controllerUrl : 'NotificationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'breadcrumb': angularAMD.route({
            templateUrl   : 'assets/app/section/breadcrumb.html',
            controllerUrl : 'BreadcrumbSectionIndexController',
            controllerAs  : 'vm'
          }),
          'main': angularAMD.route({
            templateUrl   : 'assets/app/module/settings.html',
            controllerUrl : 'SettingsModuleIndexController',
            controllerAs  : 'vm'
          }),
          'footer': angularAMD.route({
            templateUrl   : 'assets/app/section/footer.html',
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
