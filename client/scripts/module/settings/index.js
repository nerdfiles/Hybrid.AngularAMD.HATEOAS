// ./client/scripts/module/settings/index.js
/**
 * @ngdoc overview
 * @name app.settings.module:index
 * @description Settings Module Index Controller.
 */
define([], function () {
  var moduleInterface = [
    SettingsModuleIndexController
  ];
  return moduleInterface;
  ////////////
  function SettingsModuleIndexController () {
    var vm = this;
    vm.pageTitle = 'Settings';
  }
});
