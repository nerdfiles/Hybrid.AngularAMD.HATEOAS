// ./client/scripts/config/env.js
/**
 * @ngdoc overview
 * @name app.config.env
 * @description Bind contracts to API for the environment.
 * @usage

define(['env'], (env) => {
  return ['$scope', ($scope) => {
    $scope.getSomeData = () => {
      $http
        .get(env.directory.ORDERS)
        .then((response) => {
          console.log(response);
        });
    };
  }];
});

 */
define([
  'lodash',
  '../config/api',
  '../config/contracts'
], __env__);
function __env__ (_, __api__, __contracts__) {
  var DIR = {};
  var CONTRACTS = __contracts__.map(contractMapper);
  var environment = {
    start     : CONTRACTS,
    directory : DIR
  };
  return environment;
  ////////////
  function contractMapper (contract, index) {
    __api__.init();
    var contractConstructUrl = __api__.get() + _.keys(contract);
    var NAME = _.keys(contract).toString().toUpperCase();
    var a = {};
    a[NAME] = contractConstructUrl;
    return _.extend(DIR, a);
  }
}
