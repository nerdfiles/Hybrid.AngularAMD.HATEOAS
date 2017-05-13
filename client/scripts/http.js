// ./client/scripts/http.js
/**
 * @ngdoc overview
 * @name app:http
 * @description HTTP Configuration Module.
 */
define([], function () {
  'use strict';

  /**
   * @function httpSettings
   */
  function httpSettings ($httpProvider, $locationProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $locationProvider.html5Mode(true);
  }

  return httpSettings;

});
