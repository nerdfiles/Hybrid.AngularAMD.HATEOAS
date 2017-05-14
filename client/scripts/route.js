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
            templateUrl   : 'assets/views/section/header.html',
            controllerUrl : 'HeaderSectionIndexController',
            controllerAs  : 'vm'
          }),
          'nav': angularAMD.route({
            templateUrl   : 'assets/views/section/nav.html',
            controllerUrl : 'NavigationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'notification': angularAMD.route({
            templateUrl   : 'assets/views/section/notification.html',
            controllerUrl : 'NotificationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'breadcrumb': angularAMD.route({
            templateUrl   : 'assets/views/section/breadcrumb.html',
            controllerUrl : 'BreadcrumbSectionIndexController',
            controllerAs  : 'vm'
          }),
          'main': angularAMD.route({
            templateUrl   : 'assets/views/page/home.html',
            controllerUrl : 'HomeModuleIndexController',
            controllerAs  : 'vm'
          }),
          'footer': angularAMD.route({
            templateUrl   : 'assets/views/section/footer.html',
            controllerUrl : 'FooterSectionIndexController',
            controllerAs  : 'vm'
          })
        }
      })

      .state('orders', {
        url: '/orders/:id?',
        views: {
          'header': angularAMD.route({
            templateUrl   : 'assets/views/section/header.html',
            controllerUrl : 'HeaderSectionIndexController',
            controllerAs  : 'vm'
          }),
          'nav': angularAMD.route({
            templateUrl   : 'assets/views/section/nav.html',
            controllerUrl : 'NavigationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'notification': angularAMD.route({
            templateUrl   : 'assets/views/section/notification.html',
            controllerUrl : 'NotificationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'breadcrumb': angularAMD.route({
            templateUrl   : 'assets/views/section/breadcrumb.html',
            controllerUrl : 'BreadcrumbSectionIndexController',
            controllerAs  : 'vm'
          }),
          'main': angularAMD.route({
            templateUrl   : 'assets/views/page/orders.html',
            controllerUrl : 'OrdersModuleIndexController',
            controllerAs  : 'vm'
          }),
          'footer': angularAMD.route({
            templateUrl   : 'assets/views/section/footer.html',
            controllerUrl : 'FooterSectionIndexController',
            controllerAs  : 'vm'
          })
        }
      })

      .state('settings', {
        url: '/settings',
        views: {
          'header': angularAMD.route({
            templateUrl   : 'assets/views/section/header.html',
            controllerUrl : 'HeaderSectionIndexController',
            controllerAs  : 'vm'
          }),
          'nav': angularAMD.route({
            templateUrl   : 'assets/views/section/nav.html',
            controllerUrl : 'NavigationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'notification': angularAMD.route({
            templateUrl   : 'assets/views/section/notification.html',
            controllerUrl : 'NotificationSectionIndexController',
            controllerAs  : 'vm'
          }),
          'breadcrumb': angularAMD.route({
            templateUrl   : 'assets/views/section/breadcrumb.html',
            controllerUrl : 'BreadcrumbSectionIndexController',
            controllerAs  : 'vm'
          }),
          'main': angularAMD.route({
            templateUrl   : 'assets/views/page/settings.html',
            controllerUrl : 'SettingsModuleIndexController',
            controllerAs  : 'vm'
          }),
          'footer': angularAMD.route({
            templateUrl   : 'assets/views/section/footer.html',
            controllerUrl : 'FooterSectionIndexController',
            controllerAs  : 'vm'
          })
        }
      });

    $urlRouterProvider
      .otherwise(redirectDefault);
  }

  return routeContract;

});
