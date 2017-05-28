// ./client/app/directive/control/index.js
/**
 * @ngdoc overview
 * @name app.core.index:control
 * @description Application Control directive.
 */
function control (angularAMD) {
  'use strict';

  /**
   * @ngdoc directive
   * @name appControl
   * @memberOf app.core.index:control
   */
  angularAMD
    .directive('appControl', [
      appControl
    ]);

  /**
   * @ngdoc controller
   * @name ControlDirectiveController
   * @memberOf app.core.directive:control
   */
  function ControlDirectiveController ($scope) {
  }

  function appControl () {
    var directive = {
      scope        : {},
      templateUrl  : 'assets/app/directive/control/index.html',
      controllerAs : 'vm',
      controller   : [
        '$scope',
        ControlDirectiveController
      ],
      link         : link
    };
    return directive;
    ////////////
    function link ($scope, $element, $attrs, $ctrl) {
    }
  }

}

define([
  'angularAMD',
  'css!../../../app/config/control'
], control);

