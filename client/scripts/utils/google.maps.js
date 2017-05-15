define([
  'async!//maps.google.com/maps/api/js?v=3&sensor=false'
], base);
function base () {
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
