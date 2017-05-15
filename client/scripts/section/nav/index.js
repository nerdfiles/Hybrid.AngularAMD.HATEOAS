// ./client/scripts/section/nav/index.js
/**
 * @ngdoc overview
 * @name app.nav.section:index
 * @description Navigation Section Index Controller.
 */
define([], nav);
function nav () {
  var sectionInterface = [
    IndexController
  ];
  return sectionInterface;
  function IndexController () {
    var vm = this;
    vm.sectionTitle = 'Navigation';
    ////////////
  }
}
