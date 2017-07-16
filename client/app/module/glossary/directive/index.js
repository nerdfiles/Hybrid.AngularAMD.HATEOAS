/**
 * @ngdoc overview
 */
define([
  'interface'
], (__interface__) => {

  var __Glossary__ = [
    '$rootScope',
    GlossaryAction
  ];

  __interface__.directive('ℹ️', __Glossary__);

  GlossaryActionController.$inject = [
    '$rootScope'
  ];

  function GlossaryActionController($rootScope) {
    var vm = this;
  }

  function GlossaryAction($rootScope) {
    var dv  = {
      transclude       : true,
      link             : link,
      scope            : {},
      controller       : [GlossaryActionController],
      bindToController : true,
      controllerAs     : 'vm',
      templateUrl      : './assets/app/module/glossary/directive/index.html'
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
