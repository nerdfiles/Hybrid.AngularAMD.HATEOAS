/**
 * @ngdoc overview
 */
define([
  'interface'
], (__interface__) => {

  var __Figure__ = [
    '$rootScope',
    FigureAction
  ];

  __interface__.directive('🚩', __Figure__);

  FigureActionController.$inject = [
    '$rootScope'
  ];
  function FigureActionController($rootScope) {
    var vm = this;
  }

  function FigureAction($rootScope) {
    var dv  = {
      link             : link,
      scope            : {},
      controller       : [FigureActionController],
      bindToController : true,
      controllerAs     : 'vm',
      templateUrl      : './assets/app/module/figures/directive/index.html'
    };

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
