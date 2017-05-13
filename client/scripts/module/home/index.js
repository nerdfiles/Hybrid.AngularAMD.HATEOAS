// ./client/scripts/module/home/index.js
/**
 * @ngdoc overview
 * @name app.home.module:index
 * @description Home Module Index Controller.
 */
define([
], function () {
  var moduleInterface = [
    HomeModuleIndexController
  ];
  return moduleInterface;
  ////////////
  function HomeModuleIndexController () {
    var vm = this;
    vm.pageTitle = 'Home';
  }
});
