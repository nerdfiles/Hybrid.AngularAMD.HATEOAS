// ./client/scripts/config/api.js
/**
 * @ngdoc overview
 * @name app.config:api
 */
define([], __api__);
function __api__ () {
  'use strict';

  var __api__ = {};
  var version = 'v1';
  __api__.data = {
    protocol : window.location.protocol, // @example "http:"
    type     : 'application/json',
    hostname : 'example.com',
    basePath : 'api',
    version  : version,
    seg      : '.',
    sep      : '/'
  };

  /**
   * @ngdoc method
   * @methodOf app.config:api
   * @returns {string} The current ENDPOINT.
   */
  __api__.init = function (type) {
    var glue = '';
    __api__.data.ENDPOINT = [
      __api__.data.protocol,
      __api__.data.sep,
      __api__.data.sep,
      (type !== undefined ? [
        __api__.data.type = type,
        __api__.data.seg
      ].join(glue) : glue),
      __api__.data.hostname,
      __api__.data.sep,
      __api__.data.basePath,
      __api__.data.sep,
      __api__.data.version,
      __api__.data.sep
    ].join(glue);
  };

  /**
   * @ngdoc method
   * @methodOf app.config:api
   * @name get
   * @returns {string} The current baseUrl.
   */
  __api__.get = function () {
    return __api__.data.ENDPOINT;
  };

  /**
   * @ngdoc method
   * @methodOf app.config:api
   * @name update
   * @param {string} baseUrl A base URL to set.
   * @returns {*} undefined
   */
  __api__.update = function (ENDPOINT) {
    var anchor, glue = '';
    if (ENDPOINT.endsWith('/')) {
      anchor = ENDPOINT.split('/').pop();
    }
    __api__.data.ENDPOINT = anchor.join(glue);
  };

  return __api__;
}
