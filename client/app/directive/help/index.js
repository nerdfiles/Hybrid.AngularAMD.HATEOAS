// ./client/scripts/directive/help/index.js
/**
 * @ngdoc overview
 * @name app.core.index:help
 * @description Application Help directive.
 */
function help (angularAMD) {
  'use strict';

  /**
   * @ngdoc controller
   * @name HelpDirectiveController
   * @memberOf app.core.index:help
   */
  function HelpDirectiveController ($scope) {
  }

  /**
   * @ngdoc directive
   * @name appHelpDirective
   * @memberOf app.core.index:control
   */
  angularAMD
    .directive('app❓', [
      appHelpDirective
    ]);

  /**
   * @function appHelpDirective
   * @returns {object} An AngularJS directive.
   */
  function appHelpDirective () {
    var directive = {
      restrict     : 'E',
      scope        : {},
      templateUrl  : 'assets/scripts/directive/help/index.html',
      controllerAs : 'vm',
      controller   : ['$scope', HelpDirectiveController],
      link         : link
    };
    return directive;
    ////////////
    function link ($scope, $element, $attrs, $ctrl) {
    }
  }

}

define([
  'angularAMD'
], help);

