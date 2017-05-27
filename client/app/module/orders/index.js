// ./client/scripts/module/orders/index.js
/**
 * @ngdoc overview
 * @name app.orders.module:index
 * @description Orders Module Index Controller.
 */
function orders () {
  'use strict';

  var moduleInterface = [
    '$stateParams',
    '$timeout',
    '$rootScope',
    'OrderService',
    'ErrorService',
    IndexController
  ];

  return moduleInterface;

  /**
   * @ngdoc controller
   * @memberOf app.orders.module
   * @name IndexController
   * @description Orders Index Controller.
   */
  function IndexController ($stateParams, $timeout, $rootScope, OrderService,
    ErrorService) {

    var vm = this;
    vm.meta = {
      title: {
        icon    : '🎫',
        content : null
      },
      description: {
        icon    : '🎫',
        content : null
      },
      prevLabel        : 'prev',
      nextLabel        : 'next',
      ariaHideFalse    : false,
      ariaHideTrue     : true
    };

    var _id = parseInt($stateParams.id, 10);
    var orderId = !isNaN(_id) ? _id : ($stateParams.id === '') ? 'multiple' : null;
    var method = (orderId === 'multiple') ? orderId : 'one';

    vm.pageTitle = (method === 'multiple') ? 'Orders' : 'Order detail';
    vm.pageLoading = true;
    vm.meta.title.content = vm.meta.description.content = (method === 'one') ? 'Loading...' : vm.pageTitle;

    OrderService[method](orderId).then(function (response) {
      if (response.expect) {
        return ErrorService.notify(response);
      }
      vm.page = response;
      vm.followRel = followRel;
      vm.hasRel = hasRel;
      vm.pageLoading = false;
      vm.meta.title.content = vm.meta.description.content = (vm.pageTitle + ' for Order ID: ' + orderId);
    });

    ////////////

    /**
     * @function followRel
     * @param rel
     * @returns {*} undefined
     */
    function followRel (rel) {
      vm.page.$linkRel(rel).$get().then(function (page) {
        vm.page = page;
      });
    }

    /**
     * @function hasRel
     * @param rel
     * @returns {boolean} Relation check.
     */
    function hasRel (rel) {
      return rel in vm.page.$links;
    }

  }
}

define([
  'core/window',
  'core/meta',
  'service/order',
  'service/error',
  './directive/control/index'
], orders);

