// ./client/scripts/section/notification/index.js
/**
 * @ngdoc overview
 * @name app.notification.section:index
 * @description Notification Section Index Controller.
 */
function notification () {
  'use strict';

  var sectionInterface = [
    '$rootScope',
    'ErrorService',
    IndexController
  ];

  return sectionInterface;

  ////////////

  /**
   * @ngdoc controller
   * @name IndexController
   * @memberOf app.notification.section:index
   * @returns {undefined}
   */
  function IndexController ($rootScope, ErrorService) {
    var vm = this;
    vm.sectionTitle = 'Notification';

    $rootScope.$on('client:info', function (event, data) {
      ErrorService.addNote(data);
    });

    $rootScope.$on('client:warn', function (event, data) {
      ErrorService.addNote(data);
    });

    $rootScope.$on('client:debug', function (event, data) {
      ErrorService.addNote(data);
    });

    $rootScope.$on('client:error', function (event, data) {
      ErrorService.addNote(data);
    });

    ////////////
  }
}

define(['service/error'], notification);
