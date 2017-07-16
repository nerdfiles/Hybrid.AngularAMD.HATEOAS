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
    'model',
    IndexController
  ];

  return moduleInterface;

  /**
   * @ngdoc controller
   * @memberOf app.orders.module
   * @name IndexController
   * @description Orders Index Controller.
   */
  function IndexController ($stateParams, $timeout, $rootScope, OrderService, ErrorService, api, model) {

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

    vm._id = $stateParams.id || null
    vm.method = (vm._id === null) ? 'multiple' : 'one'
    vm.listViewTitle = 'Orders'
    vm.detailViewTitle = 'Order detail for Order ID: ' + vm._id

    vm.pageTitle = (vm.method === 'multiple')
      ? vm.listViewTitle
      : vm.detailViewTitle

    vm.meta.title.content = vm.meta.description.content = vm.pageTitle

    vm.pageLoading = true

    OrderService[vm.method](vm._id).then(function (response) {
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
      var links
      if (vm.page.$links)
        links = rel in vm.page.$links
      return links

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

