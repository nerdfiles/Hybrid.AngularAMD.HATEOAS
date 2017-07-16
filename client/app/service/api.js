define([
  'interface'
], function() {
  var interface = {
    orders: {
      get: getOrder,
      list: getOrders
    }
  }

  const orders = Restangular.all('orders')

  function getOrder(id) {
    return orders.one('orders', id).get()
      .then(function(data) {
        return data.order
      }, function(e) {
        return e
      })
  }

  function getOrders() {
    return orders.get()
      .then(function(data) {
        return data.orders
      }, function(e) {
        return e
      })
  }
})
