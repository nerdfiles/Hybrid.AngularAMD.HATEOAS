// ./client/app/component/window/index.js
/**
 * @ngdoc overview
 * @name app.core.window:index
 * @description Dynamic window setting on window.
 */
function windowSpec (__interface__) {
  'use strict';

  /**
   * @function WindowSpecController
   * @param $scope
   * @param $rootScope
   * @returns {*} undefined
   */
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

  var component = {
    templateUrl      : 'assets/app/component/window/index.html',
    controller       : ['$scope', '$rootScope', WindowSpecController],
    controllerAs     : 'vm',
    bindToController : true,
    bindings         : {
      title: '='
    }
  };

  /**
   * @ngdoc interface
   * @memberOf app.core.window
   * @name windowSpec
   */
  __interface__
    .component('windowSpec', component);

}

define(['interface'], windowSpec);
