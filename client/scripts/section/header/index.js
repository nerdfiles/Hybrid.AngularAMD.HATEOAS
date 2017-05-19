// ./client/scripts/section/header/index.js
/**
 * @ngdoc overview
 * @name app.header.section:index
 * @description Header Section Index Controller.
 */
define([
  './module/orders/directive/index'
], header);
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
