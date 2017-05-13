// ./client/scripts/module/home/index.js
/**
 * @ngdoc overview
 * @name app.home.module:index
 * @description Home Module Index Controller.
 */
define([
], function () {
  var moduleInterface = [
    '$scope',
    HomeModuleIndexController
  ];
  return moduleInterface;
  ////////////
  function HomeModuleIndexController ($scope) {
    $scope.pageTitle = 'Home';
  }
});
