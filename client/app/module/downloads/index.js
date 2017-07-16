/**
 * @ngdoc controller
 */
define([
  'core/window',
  'core/meta',
  './module/downloads/directive/index'
], function() {

  /**
   * @name downloads
   * @param $scope
   * @returns {undefined}
   */
  function downloads($scope) {
    console.log($scope)
  }

  return [
    '$scope',
    downloads
  ]
})
