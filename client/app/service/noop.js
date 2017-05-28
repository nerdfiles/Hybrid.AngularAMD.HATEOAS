function noop (__interface__) {

  __interface__
    .factory('noop', [
      'env',
      NoopService
    ]);

  function NoopService (env) {
    console.log(env);
  }
}

define(['interface'], noop)
