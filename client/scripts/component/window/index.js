// ./client/scripts/component/window/index.js
/**
 * @ngdoc overview
 * @name app.core.seo:window
 * @description Dynamic window setting on window.
 */
define(['interface'], function (__interface__) {
  function WindowSpecController ($scope, $rootScope) {
    var defaultIcon = '🖼';
    var sep = $scope.vm.sep = ' ';
    $scope.vm.prefix = $scope.vm.title.icon || defaultIcon;
    $rootScope.windowTitle = ($scope.vm.prefix + sep + $scope.vm.title.content);
    $scope.$watch('vm.title.content', function (newVal, oldVal) {
      if (newVal === oldVal) {
        return;
      }
      if (newVal) {
        $rootScope.windowTitle = newVal;
      }
    });
  }
  __interface__.component('windowSpec', {
    templateUrl: 'assets/scripts/component/window/index.html',
    controller: WindowSpecController,
    controllerAs: 'vm',
    bindings: {
      title: '='
    }
  });
});
