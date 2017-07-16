/**
 * @ngdoc controller
 */
define([
  'core/window',
  'core/meta',
  './directive/quotation/index',
  './module/downloads/directive/index'
], function() {

  /**
   * @name downloads
   * @param $scope
   * @returns {undefined}
   */
  function downloads($scope) {
    var vm = this
    vm.quotation = {
      author: 'D. Price'
    }
  }

  return [
    '$scope',
    downloads
  ]
})
