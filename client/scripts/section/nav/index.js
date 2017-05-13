// ./client/scripts/section/nav/index.js
/**
 * @ngdoc overview
 * @name app.nav.section:index
 * @description Navigation Section Index Controller.
 */
define([], function () {
  var sectionInterface = [
    '$scope',
    NavigationSectionIndexController
  ];
  return sectionInterface;
  ////////////
  function NavigationSectionIndexController ($scope) {
    $scope.sectionTitle = 'Navigation';
  }
});
