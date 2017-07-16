define([
  'angularAMD'
], function(angularAMD) {

  var ModelService = [
    'ResourceContext',
    'HalResource',
    'RestangularProvider',
    Model
  ]

  return ModelService;

  function Model(ResourceContext, HalResource, RestangularProvider) {
    RestangularProvider.addRequestInterceptor(modelNamespace('orders'))
    RestangularProvider.addResponseInterceptor(modelNamespace('orders'))
  }

  function modelNamespace(name) {
    var endpointUrl = url
    var context = new ResourceContext(HalResource)
    var g

    if (g) {
      return function(element, operation, schema, url) {
        if (g) {
          return g
        }
        return element
      }
    }

    return function(data, operation, schema, url, response, deferred) {
      g = context.get(endpointUrl)
      if (operation === 'getList') {
        return response.$get() ? response.$get() : data
      }
      return response.$get() ? response.$get() : data
    }
  }

})
