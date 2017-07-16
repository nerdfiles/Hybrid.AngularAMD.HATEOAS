// ./client/app/module/home/index.js
/**
 * @ngdoc overview
 * @name app.home.module:index
 * @description Home Module Index Controller.
 */
function home () {
  'use strict';

  var moduleInterface = [
    'noopService',
    IndexController
  ];

  return moduleInterface;

  /**
   * @ngdoc controller
   * @memberOf app.home.module
   * @name IndexController
   */
  function IndexController (noopService) {

    var vm = this;
    vm.meta = {
      title: {
        icon: '🔰 ',
        content: 'Home'
      },
      description: {
        icon: '🔰 ',
        content: 'Consectetur exercitation non consectetur eu adipisicing et sit ut sit.'
      }
    };
    vm.pageTitle = 'Home';
    vm.init = init;
    vm.init()
    ////////////

    function init() {
      noopService.test().then(function (data) {
        data.$get().then(function (noop) {
          vm.noop = noop;
        });
      });
    }
  }
}

define([
  'core/window',
  'core/meta',
  'service/noop'
], home);
