// ./client/scripts/section/header/index.js
/**
 * @ngdoc overview
 * @name app.header.section:index
 * @description Header Section Index Controller.
 */
define([], function () {
  var sectionInterface = [
    '$scope',
    HeaderSectionIndexController
  ];
  return sectionInterface;
  ////////////
  function HeaderSectionIndexController ($scope) {
    $scope.sectionTitle = 'Header';
  }
});
