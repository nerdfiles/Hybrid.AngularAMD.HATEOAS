/**
 * @ngdoc controller
 */
define([
  'core/window',
  'core/meta',
  'QuotationDirective',
  'DownloadsDirective'
], function() {

  /**
   * @name downloads
   * @param $scope
   * @returns {undefined}
   */
  function downloads($scope) {
    var vm = this

    vm.meta = {
      title: {
        icon    : '🔻',
        content : 'Downloads'
      },
      description: {
        icon    : '🔻',
        content : 'A list of downloads'
      },
      prevLabel        : 'prev',
      nextLabel        : 'next',
      ariaHideFalse    : false,
      ariaHideTrue     : true
    }

    vm.quotation = {
      author: 'D. Price'
    }
  }

  return [
    '$scope',
    downloads
  ]
})
