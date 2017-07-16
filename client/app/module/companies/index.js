/**
 * @ngdoc controller
 */
define([
  'core/window',
  'core/meta',
  './module/companies/directive/index'
], function() {

  /**
   * @name companies
   * @param $scope
   * @returns {undefined}
   */
  function companies($scope) {
    console.log($scope)
  }

  return [
    '$scope',
    companies
  ]
})
