// ./client/app/module/orders/directive/index.js
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
  function OrderAction ($rootScope) {
    var dv = {
      link             : link,
      scope            : {},
      controller       : [OrderActionController],
      bindToController : true,
      controllerAs     : 'vm',
      templateUrl      : './assets/app/module/orders/directive/index.html'
    };
    return dv;
    ////////////
    function link ($scope, $element, $attrs) {
      // console.log($element);
    }
  }
}

define(['interface'], index);
