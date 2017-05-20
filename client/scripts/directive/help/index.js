// ./client/scripts/directive/help/index.js
/**
 * @ngdoc overview
 * @name app.core.directive:help
 * @description Application Help directive.
 */
define([
  'angularAMD'
], help);
function help (angularAMD) {
  'use strict';

  /**
   * @ngdoc controller
   * @name HelpDirectiveController
   * @memberOf app.core.directive:help
   */
  function HelpDirectiveController ($scope) {
  }

	/**
	 * @ngdoc directive
   * @name appHelpDirective
   * @memberOf app.core.directive:control
	 */
  angularAMD
		.directive('app❓', [
			appHelpDirective
		]);

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


