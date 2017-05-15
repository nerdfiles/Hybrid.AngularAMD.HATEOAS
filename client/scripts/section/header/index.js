// ./client/scripts/section/header/index.js
/**
 * @ngdoc overview
 * @name app.header.section:index
 * @description Header Section Index Controller.
 */
define([], header);
function header () {
  var sectionInterface = [
    IndexController
  ];
  return sectionInterface;
  function IndexController () {
    var vm = this;
    vm.sectionTitle = 'Header';
    ////////////
  }
}
