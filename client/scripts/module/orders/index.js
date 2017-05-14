// ./client/scripts/module/orders/index.js
/**
 * @ngdoc overview
 * @name app.orders.module:index
 * @description Orders Module Index Controller.
 */
define([
  'service/order',
  'service/error'
], function () {

  var moduleInterface = [
    '$stateParams',
    'OrderService',
    'ErrorService',
    OrdersModuleIndexController
  ];

  return moduleInterface;

  function OrdersModuleIndexController ($stateParams, OrderService, ErrorService) {

    var vm = this;
    vm.pageTitle = 'Orders';
    vm.pageLoading = true;

    var _id = parseInt($stateParams.id, 10);
    var orderId = !isNaN(_id) ? _id : ($stateParams.id === '') ? 'multiple' : null;
    var method = (orderId === 'multiple') ? orderId : 'one';

    OrderService[method](orderId).then(function (response) {
      if (response.expect) {
        return ErrorService.notify(response);
      }
      vm.page = response;
      vm.followRel = followRel;
      vm.hasRel = hasRel;
      vm.pageLoading = false;
    });

    ////////////

    function followRel (rel) {
      vm.page.$linkRel(rel).$get().then(function (page) {
        vm.page = page;
      });
    }

    function hasRel (rel) {
      return rel in vm.page.$links;
    }
  }
});
