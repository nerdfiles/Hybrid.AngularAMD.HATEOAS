// ./client/app/module/orders/index.js
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
    'api',
    IndexController
  ];

  return moduleInterface;

  /**
   * @ngdoc controller
   * @memberOf app.orders.module
   * @name IndexController
   * @description Orders Index Controller.
   */
  function IndexController ($stateParams, $timeout, $rootScope, OrderService, ErrorService, api) {

    var vm = this;
    vm.meta = {
      title: {
        icon    : '🎫 ',
        content : null
      },
      description: {
        icon    : '🎫 ',
        content : null
      },
      prevLabel        : 'prev',
      nextLabel        : 'next',
      ariaHideFalse    : false,
      ariaHideTrue     : true
    }

    var _id = parseInt($stateParams.id, 10)
    var orderId = !isNaN(_id) ? _id : ($stateParams.id === '') ? 'multiple' : null
    var method = (orderId === 'multiple') ? orderId : 'one'

    vm.pageTitle = (method === 'multiple') ? 'Orders' : vm.meta.title.icon + 'Order detail for Order ID: ' + orderId
    vm.meta.title.content = vm.meta.description.content = (method === 'one') ? 'Loading...' : vm.pageTitle

    vm.pageLoading = true

    OrderService[method](orderId).then(function (response) {
      if (response.expect) {
        return ErrorService.notify(response)
      }
      var isListView = response.length
      vm.page = response
      vm.pageLoading = false
      if (isListView) return

      vm.followRel = followRel
      vm.hasRel = hasRel
    }, function(e) {
      vm.pageLoading = false
    })

    ////////////

    /**
     * @function followRel
     * @param rel
     * @returns {*} undefined
     */
    function followRel (rel) {
      vm.page.$linkRel(rel).$get().then(function (page) {
        vm.page = page
      })
    }

    /**
     * @function hasRel
     * @param rel
     * @returns {boolean} Relation check.
     */
    function hasRel (rel) {
      return rel in vm.page.$links
    }

  }
}

define([
  'core/window',
  'core/meta',
  'service/error',
  'service/api',
  'service/order',
  './directive/control/index',
  'css!./module/orders/index.css'
], orders)

