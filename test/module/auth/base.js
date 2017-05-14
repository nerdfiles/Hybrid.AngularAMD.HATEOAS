/* global angular: false, beforeEach: false, inject: false, describe: false, expect:false, it: false, $httpProvider: false, jwtInterceptorProvider: false, jwtInterceptorProvider: false, $resourceProvider: false */
// ./test/module/auth/base.js
/**
 * @ngdoc interface
 * @name app.auth.test:base
 * @description Auth.
 */
describe('login/auth/authorize', function () {

  var Remote = angular
    .injector(['sync.remote'])
    .get('Remote')('Test', 'test');
  var baseUrl = 'http://localhost:9001/api/v0';

  var testingObject = {
    name     : null,
    lastname : null
  };

  beforeEach(inject(function (_$httpProvider_, _jwtInterceptorProvider_, _$resourceProvider_) {
    $httpProvider = _$httpProvider_;
    jwtInterceptorProvider = _jwtInterceptorProvider_;
    $resourceProvider = _$resourceProvider_;

    jwtInterceptorProvider.authPrefix = 'JWT ';
    jwtInterceptorProvider.tokenGetter = function (config) {
      var authLabel = '/login/auth/authorize';
      var _url = (baseUrl + authLabel);
      if (config.url.indexOf(_url) === 0) {
        var tokenResource;
        return tokenResource;
      }
    };

    $httpProvider.interceptors.push('jwtInterceptor');
    $httpProvider.defaults.withCredentials = true;
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }));

  it('app.notifications.module:create ', function (done) {
    Remote._create(testingObject)
      .then(function (unit) {
        expect(unit.id).not.toBe(undefined);
      }, function (error) {
        expect(0).toEqual(1);
      })
      .finally(done);
  });
});
