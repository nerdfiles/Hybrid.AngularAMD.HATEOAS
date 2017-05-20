// ./client/scripts/config/contracts.js
define([], __contracts__);
function __contracts__ () {
  'use strict';
  return [
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
}
