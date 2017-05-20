// ./client/scripts/module/orders/directive/index.js
define(['interface'], index);
function index (__interface__) {
  var __Order__ = [
    '$rootScope',
    OrderAction
  ];
  __interface__.directive('app🔳', __Order__);
  function OrderActionController () {
    var vm = this;
    vm.option = option;
    ////////////
    function option () {
      console.log(vm);
    }
  }
  function OrderAction () {
    var dv = {
      link             : link,
      scope            : {},
      controller       : [OrderActionController],
      bindToController : true,
      controllerAs     : 'vm',
      templateUrl      : './assets/scripts/module/orders/template/action.html'
    };
    return dv;
    ////////////
    function link ($scope, $element, $attrs) {
      // console.log($element);
    }
  }
}
