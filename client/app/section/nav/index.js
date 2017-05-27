// ./client/scripts/section/nav/index.js
/**
 * @ngdoc overview
 * @name app.nav.section:index
 * @description Navigation Section Index Controller.
 */
function nav () {
  'use strict';

  var sectionInterface = [
    IndexController
  ];

  return sectionInterface;

  ////////////

  /**
   * @ngdoc controller
   * @name IndexController
   * @memberOf app.nav.section:index
   * @returns {*} undefined
   */
  function IndexController () {
    var vm = this;
    vm.sectionTitle = 'Navigation';
    ////////////
  }
}

define([], nav);
