// ./client/scripts/utils/google.maps.js
/**
 * @ngdoc overview
 * @name app.utils.google.maps:base
 * @description Google Maps API utility.
 */
define([
  'async!//maps.google.com/maps/api/js?v=3&sensor=false'
], base);
function base () {
  'use strict';

  return angular
    // Grouping common Google Maps stuffs
    .module('common', [])
    .run(function ($rootScope) {
      console.log($rootScope);
      try {
        console.log(window.google);
      } catch (e) {
        console.log(e);
      }
    });
}
