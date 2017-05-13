// ./client/scripts/module/settings/index.js
/**
 * @ngdoc overview
 * @name app.settings.module:index
 * @description Settings Module Index Controller.
 */
define([], function () {
  var moduleInterface = [
    '$scope',
    SettingsModuleIndexController
  ];
  return moduleInterface;
  ////////////
  function SettingsModuleIndexController ($scope) {
    $scope.pageTitle = 'Settings';
  }
});
