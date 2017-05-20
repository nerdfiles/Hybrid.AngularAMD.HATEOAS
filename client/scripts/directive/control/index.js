// ./client/scripts/directive/control/index.js
/**
 * @ngdoc overview
 * @name app.core.directive:control
 * @description Application Control directive.
 */
define([
  'angularAMD',
  'css!../../../styles/config/control',
  'ngload!external/service/package'
], control);
function control (angularAMD) {
  'use strict';

  /**
   * @ngdoc controller
   * @name ControlDirectiveController
   * @memberOf app.core.directive:control
   */
  function ControlDirectiveController ($scope, PackageService) {

    PackageService
      .get()
      .then(PackagetLoadCompleted, PackageLoadFailed);

    function PackagetLoadCompleted (content) {
      $scope.vm.package = content;
    }
    function PackageLoadFailed (error) {
      console.log('⚠️ Could not load project manifest');
    }
  }

  /**
   * @ngdoc directive
   * @name appControl
   * @memberOf app.core.directive:control
   */
  angularAMD
    .directive('appControl', [
      appControl
    ]);

  function appControl () {
    var directive = {
      scope        : {},
      templateUrl  : 'assets/scripts/directive/control/index.html',
      controllerAs : 'vm',
      controller   : ['$scope', 'PackageService', ControlDirectiveController],
      link         : link
    };
    return directive;
    ////////////
    function link ($scope, $element, $attrs, $ctrl) {
    }
  }

}


