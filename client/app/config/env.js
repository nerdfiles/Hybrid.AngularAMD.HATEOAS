// ./client/app/config/env.js
/**
 * @ngdoc overview
 * @name app.config:env
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
function __env__ (_, __api__, __contracts__) {
  var DIR = {};
  __contracts__.map(contractMapper);
  var config = {
    directory : DIR
  };
  return config;
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

define([
  'lodash',
  '../config/api',
  '../config/contracts'
], __env__);
