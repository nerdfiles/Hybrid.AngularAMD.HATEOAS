// ./client/scripts/component/metaSpec/index.js
/**
 * @ngdoc overview
 * @name app.core.component:metaSpec
 * @description Dynamic meta-content settings.
 */
define(['interface'], function (__interface__) {
  function MetaSpecController ($scope, $rootScope) {
    $scope.vm.sep = ' ';
    $scope.vm.prefix = '📝';
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
