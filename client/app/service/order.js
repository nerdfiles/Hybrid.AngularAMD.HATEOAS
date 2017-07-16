// ./client/app/service/order.js
/**
 * @ngdoc service
 * @name app.logistics.module:order
 * @description User Service Module.
 */
function order (__interface__) {
  'use strict';

  var expect = function (input) {
    return {
      toBe: function (testCase) {
        return (input === testCase);
      }
    };
  };

  /**
   * @ngdoc service
   * @name OrderService
   * @memberOf app.logistics.module:order
   * @description An order service as a factory.
   */
  __interface__
    .factory('OrderService', [
      'ResourceContext',
      'HalResource',
      'api',
      '$q',
      OrderService
    ]);

  /**
   * @function OrderService
   * @param ResourceContext
   * @param HalResource
   * @param $q
   * @returns {undefined}
   */
  function OrderService (ResourceContext, HalResource, api, $q) {

    var service = {
      noop     : orderNoop,
      one      : orderGet,
      two      : orderTwo,
      multiple : ordersGet,
      create   : orderCreate,
      update   : orderUpdate,
      delete   : orderDelete,
      remove   : orderRemove
    };

    var baseUrl = 'http://localhost:9001';
    var _url = (baseUrl + '/api/v0/orders/');

    return service;

    ////////////

    /**
     * @ngdoc method
     * @methodOf app.logistics.module:order
     * @name orderNoop
     * @returns {*} undefined
     */
    function orderNoop () {
    }

    /**
     * @ngdoc method
     * @methodOf app.logistics.module:order
     * @name orderGet
     * @param {number|string} orderId Order ID.
     * @returns {*} undefined
     */
    function orderGet (orderId) {

      var endpointUrl = (_url + orderId);
      var context = new ResourceContext(HalResource);
      var order;
      var o;

      try {
        order = context.get(endpointUrl);
        o = order.$get();
      } catch (e) {
        var defer = $q.defer();
        var test = expect(order.$uri).toBe(_url);
        defer.resolve({ expect: test, error: e });
        o = defer.promise;
      } finally {
        console.log(o);
        return o;
      }

    }

    /**
     * @ngdoc method
     * @methodOf app.logistics.module:order
     * @name orderTwo
     * @returns {*} undefined
     */
    function orderTwo () {
    }

    /**
     * @ngdoc method
     * @methodOf app.logistics.module:order
     * @name ordersGet
     * @param {number|string} orderId Order ID.
     * @returns {object:Promise} Promise object.
     */
    function ordersGet (orderId) {
      return api.orders.list()
    }

    /**
     * @ngdoc method
     * @methodOf app.logistics.module:order
     * @name orderCreate
     * @returns {*} undefined
     */
    function orderCreate () {
    }

    /**
     * @ngdoc method
     * @methodOf app.logistics.module:order
     * @name orderUpdate
     * @returns {*} undefined
     */
    function orderUpdate () {
    }

    /**
     * @ngdoc method
     * @methodOf app.logistics.module:order
     * @name orderDelete
     * @returns {*} undefined
     */
    function orderDelete () {
    }

    /**
     * @ngdoc method
     * @methodOf app.logistics.module:order
     * @name orderRemove
     * @returns {*} undefined
     */
    function orderRemove () {
    }

  }
}

define(['interface'], order);
