/**
 * @ngdoc controller
 */
define([
  'interface'
], function() {

  /**
   * @name controller
   * @param $scope
   * @returns {undefined}
   */
  function controller($scope) {
    console.log($scope)
  }

  return [
    '$scope',
    controller
  ]
})
