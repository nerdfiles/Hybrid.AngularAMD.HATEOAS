/**
 * @ngdoc overview
 */
define([
  'interface'
], (__interface__) => {

  var __Download__ = [
    '$rootScope',
    DownloadAction
  ];

  __interface__.directive('🔻', __Download__);

  DownloadActionController.$inject = [
    '$rootScope'
  ];

  function DownloadActionController($rootScope) {
    var vm = this;
  }

  /**
   * @ngdoc directive
   * @name DownloadAction
   * @param $rootScope
   * @returns {*} undefined
   */
  function DownloadAction($rootScope) {
    var dv  = {
      link             : link,
      scope            : {},
      controller       : [DownloadActionController],
      bindToController : true,
      controllerAs     : 'vm',
      templateUrl      : './assets/app/module/downloads/directive/index.html'
    };

    return dv;

    /**
     * @name link
     * @param $scope
     * @param $element
     * @param $attrs
     * @param $ctrl
     * @returns {undefined}
     */
    function link($scope, $element, $attrs, $ctrl) {
    }
  }
})
