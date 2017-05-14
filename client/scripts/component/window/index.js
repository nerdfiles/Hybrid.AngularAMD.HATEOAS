// ./client/scripts/component/title/index.js
/**
 * @ngdoc overview
 * @name app.core.component:title
 * @description Dynamic title setting on window.
 */
define(['interface'], function (__interface__) {
  function WindowSpecController ($scope, $rootScope) {
    var sep = $scope.vm.sep = ' ';
    $scope.vm.prefix = '🖼';
    $rootScope.windowTitle = ($scope.vm.prefix + sep + $scope.vm.title.content);
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
