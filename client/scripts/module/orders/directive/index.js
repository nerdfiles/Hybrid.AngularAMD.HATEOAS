// ./client/scripts/module/orders/directive/index.js
define(['interface'], index);
function index (__interface__) {
  var __Order__ = [
    '$rootScope',
    OrderAction
  ];
  __interface__.directive('app🔳', __Order__);
  function OrderAction () {
    var dv = {
      link        : link,
      scope       : {},
      templateUrl : './assets/scripts/module/orders/template/action.html'
    };
    return dv;
    ////////////
    function link ($scope, $element, $attrs) {
      console.log($element);
    }
  }
}
