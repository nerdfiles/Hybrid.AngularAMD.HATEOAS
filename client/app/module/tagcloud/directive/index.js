/**
 * @ngdoc overview
 */
define([
  'interface'
], (__interface__) => {

  var __Company__ = [
    '$rootScope',
    CompanyAction
  ];

  __interface__.directive('🆔', __Company__);

  CompanyActionController.$inject = [
    '$rootScope'
  ];
  function CompanyActionController($rootScope) {
    var vm = this;
  }

  function CompanyAction($rootScope) {
    var dv  = {
      link             : link,
      scope            : {},
      controller       : [CompanyActionController],
      bindToController : true,
      controllerAs     : 'vm',
      templateUrl      : './assets/app/module/companies/directive/index.html'
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
