define([
  'interface'
], function(__interface__) {

  var ModelService = [
    'ResourceContext',
    'HalResource',
    'Restangular',
    'api',
    Model
  ]

  __interface__.service('ModelService', ModelService)

  function Model(ResourceContext, HalResource, Restangular, api) {
    Restangular.addRequestInterceptor(modelNamespace('orders'))
    Restangular.addResponseInterceptor(modelNamespace('orders', api))
  }

  function modelNamespace(name, factory) {
    if (!factory) {
      return function(element, operation, schema, url) {
        var endpointUrl = url
        var context = new ResourceContext(HalResource)
        var g = context.get(endpointUrl)
        if (g) {
          return g
        }
        return element
      }
    }

    return function(data, operation, schema, url, response, deferred) {
      if (operation === 'getList') {
        return data
      }
      return response.$get() || data
    }
  }

})
