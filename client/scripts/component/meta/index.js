// ./client/scripts/component/meta/index.js
/**
 * @ngdoc overview
 * @name app.core.component:meta
 * @description Dynamic meta-content settings.
 */
define(['interface'], function (__interface__) {
  function MetaSpecController ($scope, $rootScope) {
    $scope.vm.sep = ' ';
    var defaultIcon = '📝';
    $scope.vm.prefix = $scope.vm.construct.icon || defaultIcon;
  }
  __interface__.component('metaSpec', {
    templateUrl: 'assets/scripts/component/meta/index.html',
    controller: MetaSpecController,
    controllerAs: 'vm',
    bindings: {
      type      : '@',
      construct : '='
    }
  });
});
