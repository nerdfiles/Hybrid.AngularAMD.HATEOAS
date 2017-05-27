// ./client/scripts/module/home/index.js
/**
 * @ngdoc overview
 * @name app.home.module:index
 * @description Home Module Index Controller.
 */
function home () {
  'use strict';

  var moduleInterface = [
    IndexController
  ];

  return moduleInterface;

  /**
   * @ngdoc controller
   * @memberOf app.home.module
   * @name IndexController
   */
  function IndexController () {

    var vm = this;
    vm.meta = {
      title: {
        content: 'Home'
      },
      description: {
        content: 'Consectetur exercitation non consectetur eu adipisicing et sit ut sit.'
      }
    };
    vm.pageTitle = 'Home';

    ////////////

  }
}

define([
  'core/window',
  'core/meta'
], home);
