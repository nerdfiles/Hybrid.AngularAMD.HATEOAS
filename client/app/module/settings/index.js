// ./client/app/module/settings/index.js
/**
 * @ngdoc overview
 * @name app.settings.module:index
 * @description Settings Module Index Controller.
 */
function settings () {
  'use strict';

  var moduleInterface = [
    IndexController
  ];

  return moduleInterface;

  /**
   * @ngdoc controller
   * @memberOf app.settings.module
   * @name IndexController
   * @returns {*} undefined
   */
  function IndexController () {

    var vm = this;
    vm.meta = {
      title: {
        icon    : '⚙',
        content : 'Settings'
      },
      description: {
        icon    : '⚙',
        content: 'Aliquip aliqua sint reprehenderit aliquip incididunt elit aliqua pariatur consequat ex qui.'
      }
    };
    vm.pageTitle = 'Settings';

    ////////////
  }
}

define([
  'core/window',
  'core/meta'
], settings);

