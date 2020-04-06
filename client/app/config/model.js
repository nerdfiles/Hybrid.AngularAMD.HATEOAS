define([
  'lodash'
], function(_) {

  return function(ResourceContext, HalResource, Restangular) {
    Restangular.setBaseUrl("http://localhost:3001");
    Restangular.setDefaultHeaders(
      { "Content-Type": "application/json+hal" }
    );

    Restangular.addRequestInterceptor(modelNamespace('orders'))
    Restangular.addResponseInterceptor(modelNamespace('orders'))

    var endpointUrl

    function modelNamespace(name) {
      var $get
      var context = new ResourceContext(HalResource)
      var g, _g

      if (g) {
        return function(element, operation, schema, url) {
          if (operation === 'getList') {
            endpointUrl = url
            var oneHourAgo = Date.now() - 60*60*1000
            // $get = g.$loadPaths({
            //   order: {
            //   }
            // })
            $get = g.$load(oneHourAgo)
            return element
          }
          return element
        }
      }

      return function(data, operation, schema, url, response, deferred) {

        endpointUrl = url

        if (operation === 'getList') {
          if (g || !response) return g || data

          var res;

          try {
            res = data._embedded[schema]
            if (res) {
              res._links = _.extend({}, data._links)
              g = res
            }
          } catch(e) {
            console.log(e)
            res = data._embedded[schema]
          }

          console.log('getList: ', data)

          return res || data
        }

        if (operation === 'get') {
          if (g || !response) return g || data

          var res;

          try {
            res = data._embedded[schema]
            if (res) {
              res._links = _.extend({}, data._links)
              g = res
            }
          } catch(e) {
            console.log(e)
            res = data._embedded[schema]
          }
          return res
        }

        return data
      }
    }
  };

})
