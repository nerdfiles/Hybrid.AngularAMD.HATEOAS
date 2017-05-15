// ./client/scripts/section/breadcrumb/index.js
/**
 * @ngdoc overview
 * @name app.breadcrumb.section:index
 * @description Breadcrumb Section Index Controller.
 */
define([], breadcrumb);

function breadcrumb () {
  'use strict';

  var sectionInterface = [
    IndexController
  ];

  return sectionInterface;

  function IndexController () {
    var vm = this;
    vm.sectionTitle = 'Breadcrumb';
    vm.init = init;
    ////////////
    function init () {
    }
  }

}
