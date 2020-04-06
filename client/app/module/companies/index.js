/**
 * @ngdoc controller
 */
define([
  'core/window',
  'core/meta',
  'CompaniesDirective'
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
