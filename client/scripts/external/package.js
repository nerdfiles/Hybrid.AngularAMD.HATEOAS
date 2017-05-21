// ./client/scripts/external/package.js
(function () {
  angular
    .module('Project', [])
    .service('PackageService', ['$http', PackageService]);
  function PackageService ($http) {
    var serviceInterface = this;
    serviceInterface.get = get;
    ////////////
    function get () {
      return $http.get('/assets/package.json').then(function (response) {
        console.log('🔷 Project loaded');
        return response.data;
      }, function (error) {
        console.log(error);
      });
    }
  }
})();
