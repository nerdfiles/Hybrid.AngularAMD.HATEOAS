// ./client/scripts/directive/version/index.js
/**
 * @ngdoc overview
 * @name app.core.directive:version
 * @description Application Version directive.
 */
define(['angularAMD'], version);
function version (angularAMD) {
  function VersionController ($scope) {
    $scope.vm.content = '0.0.0';
  }
  angularAMD.directive('appVersion', ['$rootScope', appVersion]);
  function appVersion ($rootScope) {
    var directive = {
      scope : {},
      templateUrl  : 'assets/scripts/directive/version/index.html',
      controllerAs : 'vm',
      controller   : VersionController,
      link         : link
    };
    return directive;
    ////////////
    function link ($scope, $element, $attrs, $ctrl) {
      console.log($scope);
    }
  }

}
