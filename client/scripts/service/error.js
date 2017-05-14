// ./client/scripts/service/error.js
/**
 * @ngdoc service
 * @name app.core.window:error
 * @description Error Service Module.
 */
define([
  'interface',
], function (__interface__) {
  'use strict';

  __interface__.service('ErrorService', [
    '$rootScope',
    '$timeout',
    ErrorService
  ]);

  function ErrorService ($rootScope, $timeout) {

    var service = this;
    service.notify = notify;
    service.addNote = addNote;
    $rootScope.notifications = [];

    ////////////

    function addNote (note) {
      $rootScope.notifications.length = 0;
      $rootScope.notifications.push(note);
      $timeout(function () {
        $rootScope.notifications.length = 0;
        $rootScope.$apply();
      }, 5000);
    }

    function notify (response) {
      if (response.info) {
        $rootScope.$broadcast('client:info', response);
      }
      if (response.warn)
        $rootScope.$broadcast('client:warn', response);
      if (response.debug)
        $rootScope.$broadcast('client:debug', response);
      if (response.error)
        $rootScope.$broadcast('client:error', response);
    }

  }
});
