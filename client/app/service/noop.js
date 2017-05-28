// ./client/app/service/noop.js
function noop (__interface__) {

  __interface__
    .factory('noopService', [
      'env',
      'ResourceContext',
      'HalResource',
      '$q',
      NoopService
    ]);

  function NoopService (env, ResourceContext, HalResource, $q) {
    var serviceInterface = {
      test: test
    };
    return serviceInterface;
    ////////////
    function test () {
      var context = new ResourceContext(HalResource);
      var deferred = $q.defer();
      var n = context.get(env.directory.NOOP);
      deferred.resolve(n);
      return deferred.promise;
    }
  }
}

define(['interface'], noop);
