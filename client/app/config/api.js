// ./client/scripts/config/api.js
/**
 * @ngdoc overview
 * @name app.config:api
 */
function __api__ () {
  'use strict';

  var config = {};
  var version = 'v1';
  config.data = {
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
  config.init = function (type) {
    var glue = '';
    config.data.ENDPOINT = [
      config.data.protocol,
      config.data.sep,
      config.data.sep,
      (type !== undefined ? [
        config.data.type = type,
        config.data.seg
      ].join(glue) : glue),
      config.data.hostname,
      config.data.sep,
      config.data.basePath,
      config.data.sep,
      config.data.version,
      config.data.sep
    ].join(glue);
  };

  /**
   * @ngdoc method
   * @methodOf app.config:api
   * @name get
   * @returns {string} The current baseUrl.
   */
  config.get = function () {
    return config.data.ENDPOINT;
  };

  /**
   * @ngdoc method
   * @methodOf app.config:api
   * @name update
   * @param {string} baseUrl A base URL to set.
   * @returns {*} undefined
   */
  config.update = function (ENDPOINT) {
    var anchor, glue = '';
    if (ENDPOINT.endsWith('/')) {
      anchor = ENDPOINT.split('/').pop();
    }
    config.data.ENDPOINT = anchor.join(glue);
  };

  return config;
}

define([], __api__);
