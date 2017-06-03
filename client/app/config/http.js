// ./client/app/http.js
/**
 * @ngdoc overview
 * @name app:http
 * @description HTTP Configuration Module.
 */
function httpConfig () {
  'use strict';

  /**
   * @function httpSettings
   */
  function httpSettings ($httpProvider, $locationProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $locationProvider.html5Mode(true);
  }

  return httpSettings;

}

define([], httpConfig);
