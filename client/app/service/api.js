define([
  'interface',
  'model'
], function(__interface__) {

  var ApiService = [
    '$timeout',
    'Restangular',
    Api
  ];

  __interface__.factory('api', ApiService);

  function Api($timeout, Restangular) {
    var interface = {
      orders: {
        get: getOrder,
        list: getOrders
      }
    };

    var orders = Restangular.all('api/v0/orders');

    return interface;

    ////////////

    function getOrder(id) {
      return orders.one(id).get()
        .then(function(data) {
          return data.order;
        }, function(e) {
          return e;
        });
    }

    function getOrders() {
      return orders.getList()
        .then(function(data) {
          return data;
        }, function(e) {
          return e;
        });
    }
  }
});
