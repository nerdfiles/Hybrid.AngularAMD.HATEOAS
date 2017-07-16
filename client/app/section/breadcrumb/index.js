// ./client/app/section/breadcrumb/index.js
/**
 * @ngdoc overview
 * @name app.breadcrumb.section:index
 * @description Breadcrumb Section Index Controller.
 */
function breadcrumb () {
  'use strict';

  var sectionInterface = [
    IndexController
  ];

  return sectionInterface;

  ////////////

  /**
   * @ngdoc controller
   * @name IndexController
   * @memberOf app.breadcrumb.section:index
   * @returns {*} undefined
   */
  function IndexController () {
    var vm = this;
    vm.sectionTitle = 'Breadcrumb';
    vm.init = init;
    ////////////
    function init () {
    }
  }

}

define([], breadcrumb);
