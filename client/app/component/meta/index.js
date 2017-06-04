// ./client/app/component/meta/index.js
/**
 * @ngdoc overview
 * @name app.core.meta:index
 * @description Dynamic meta-content settings.
 */
function metaSpec (__interface__) {
  'use strict';

  /**
   * @function MetaSpecController
   * @param $scope
   * @param $rootScope
   * @returns {*} undefined
   */
  function MetaSpecController ($scope, $rootScope) {
    $scope.vm.sep = ' ';
    var defaultIcon = '📝';
    $scope.vm.prefix = $scope.vm.construct.icon || defaultIcon;
  }

  var component = {
    templateUrl  : 'assets/app/component/meta/index.html',
    controller   : MetaSpecController,
    controllerAs : 'vm',
    bindings     : {
      type      : '@',
      construct : '='
    }
  };

  /**
   * @ngdoc interface
   * @memberOf app.core.meta
   * @name metaSpec
   */
  __interface__
    .component('metaSpec', component);

}

define(['interface'], metaSpec);
