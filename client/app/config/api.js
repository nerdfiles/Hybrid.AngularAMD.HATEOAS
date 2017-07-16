// ./client/app/config/api.js
/**
 * @ngdoc overview
 * @name app.config:api
 */
function __api__ () {
  'use strict';

  var config = {};
  var version = 'v1';
  version = '';
  config.data = {
    protocol : window.location.protocol, // @example "http:"
    hostname : 'localhost',
    port     : '8081',
    basePath : 'api',
    version  : version,
    col      : ':',
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
      config.data.hostname,
      config.data.col,
      config.data.port,
      config.data.sep,
      config.data.basePath,
      config.data.sep,
      config.data.version,
      (config.data.version === '' ?
        glue : config.data.sep)
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
