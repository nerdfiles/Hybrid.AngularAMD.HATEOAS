// ./client/scripts/service/order.js
/**
 * @ngdoc service
 * @name app.logistics.module:order
 * @description User Service Module.
 */
define([
  'interface'
], function (__interface__) {
  'use strict';

  var expect = function (input) {
    return {
      toBe: function (testCase) {
        return (input === testCase);
      }
    };
  };

  __interface__.factory('OrderService', [
    'ResourceContext',
    'HalResource',
    '$q',
    OrderService
  ]);

  function OrderService (ResourceContext, HalResource, $q) {

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

    ////////////

    function orderNoop () {
    }

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
        return o;
      }

    }

    function orderTwo () {
    }

    function ordersGet (orderId) {
      var defer = $q.defer();
      var message = 'Load an orders list';
      defer.resolve({ expect: orderId, info: message });
      return defer.promise;
    }

    function orderCreate () {
    }

    function orderUpdate () {
    }

    function orderDelete () {
    }

    function orderRemove () {
    }

    return service;
  }
});
