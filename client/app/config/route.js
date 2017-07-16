// ./client/app/routeDefinition.js
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

    var routeDefinition = {

      header: {
        templateUrl   : 'assets/app/section/header/index.html',
        controllerUrl : 'HeaderSectionIndexController',
        controllerAs  : 'vm'
      },

      nav: {
        templateUrl   : 'assets/app/section/nav/index.html',
        controllerUrl : 'NavigationSectionIndexController',
        controllerAs  : 'vm'
      },

      notification: {
        templateUrl   : 'assets/app/section/notification/index.html',
        controllerUrl : 'NotificationSectionIndexController',
        controllerAs  : 'vm'
      },

      breadcrumb: {
        templateUrl   : 'assets/app/section/breadcrumb/index.html',
        controllerUrl : 'BreadcrumbSectionIndexController',
        controllerAs  : 'vm'
      },

      downloads: {
        templateUrl   : 'assets/app/module/downloads/index.html',
        controllerUrl : 'DownloadsController',
        controllerAs  : 'vm',
      },

      'main/home': {
        templateUrl   : 'assets/app/module/home/index.html',
        controllerUrl : 'HomeModuleIndexController',
        controllerAs  : 'vm'
      },

      'main/orders': {
        templateUrl   : 'assets/app/module/orders/index.html',
        controllerUrl : 'OrdersModuleIndexController',
        controllerAs  : 'vm'
      },

      'main/settings': {
        templateUrl   : 'assets/app/module/settings/index.html',
        controllerUrl : 'SettingsModuleIndexController',
        controllerAs  : 'vm'
      },

      footer: {
        templateUrl   : 'assets/app/section/footer/index.html',
        controllerUrl : 'FooterSectionIndexController',
        controllerAs  : 'vm'
      }
    };

    $stateProvider

      .state('default', {
        url: '/',
        views: {
          'header'       : angularAMD.route(routeDefinition.header),
          'nav'          : angularAMD.route(routeDefinition.nav),
          'notification' : angularAMD.route(routeDefinition.notification),
          'breadcrumb'   : angularAMD.route(routeDefinition.breadcrumb),
          'main'         : angularAMD.route(routeDefinition['main/home']),
          'footer'       : angularAMD.route(routeDefinition.footer)
        }
      })

      .state('downloads', {
        url: '/downloads',
        views: {
          'header'       : angularAMD.route(routeDefinition.header),
          'nav'          : angularAMD.route(routeDefinition.nav),
          'notification' : angularAMD.route(routeDefinition.notification),
          'breadcrumb'   : angularAMD.route(routeDefinition.breadcrumb),
          'main'         : angularAMD.route(routeDefinition.downloads),
          'footer'       : angularAMD.route(routeDefinition.footer)
        }
      })

      .state('orders', {
        url: '/orders/:id?',
        views: {
          'header'       : angularAMD.route(routeDefinition.header),
          'nav'          : angularAMD.route(routeDefinition.nav),
          'notification' : angularAMD.route(routeDefinition.notification),
          'breadcrumb'   : angularAMD.route(routeDefinition.breadcrumb),
          'main'         : angularAMD.route(routeDefinition['main/orders']),
          'footer'       : angularAMD.route(routeDefinition.footer)
        }
      })

      .state('settings', {
        url: '/settings',
        views: {
          'header'       : angularAMD.route(routeDefinition.header),
          'nav'          : angularAMD.route(routeDefinition.nav),
          'notification' : angularAMD.route(routeDefinition.notification),
          'breadcrumb'   : angularAMD.route(routeDefinition.breadcrumb),
          'main'         : angularAMD.route(routeDefinition['main/settings']),
          'footer'       : angularAMD.route(routeDefinition.footer)
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
