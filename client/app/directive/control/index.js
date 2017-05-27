// ./client/scripts/directive/control/index.js
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
  function ControlDirectiveController ($scope, PackageService) {

    PackageService
      .get()
      .then(PackagetLoadCompleted, PackageLoadFailed);

    /**
     * @function PackagetLoadCompleted
     * @param {object} conten Content from npm package.json.
     * @returns {undefined}
     */
    function PackagetLoadCompleted (content) {
      $scope.vm.package = content;
    }

    /**
     * @function PackageLoadFailed
     * @param {object} error Error state.
     * @returns {undefined}
     */
    function PackageLoadFailed (error) {
      console.log('⚠️ Could not load project manifest');
    }
  }

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

define([
  'angularAMD',
  'css!../../../app/config/control',
  'ngload!external/service/package'
], control);

