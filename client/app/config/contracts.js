// ./client/scripts/config/contracts.js
/**
 * @ngdoc overview
 * @name app.config:contracts
 */
function __contracts__ () {
  'use strict';
  var config = [
    {'login/**/authorize': {
      secure    : true,
      session   : true,
      tough     : true,
      timely    : true,
      protected : true,
      cached    : new Date()
    }},
    {'orders': {
      secure    : true,
      session   : true,
      tough     : true,
      timely    : true,
      protected : true,
      cache     : new Date()
    }}
  ];
  return config;
}

define([], __contracts__);
