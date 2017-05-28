// ./client/app/section/header/index.js
/**
 * @ngdoc overview
 * @name app.header.section:index
 * @description Header Section Index Controller.
 */
function header () {
  'use strict';

  var sectionInterface = [
    IndexController
  ];

  return sectionInterface;

  ////////////

  /**
   * @ngdoc controller
   * @name IndexController
   * @memberOf app.header.section:index
   * @returns {*} undefined
   */
  function IndexController () {
    var vm = this;
    vm.sectionTitle = 'Header';
    ////////////
  }
}

define([
  './module/orders/directive/index', // this directive will not be site-wide if
                                     // loaded by this section; yet the section is site-wide though its $scope is another matter...
  './directive/help/index'           // is site-wide; so the directive will be
                                     // accessible for every other controller, even if they have not specifically called it in their definition...
], header);

