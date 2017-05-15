// ./client/scripts/module/settings/index.js
/**
 * @ngdoc overview
 * @name app.settings.module:index
 * @description Settings Module Index Controller.
 */
define([
  'core/window',
  'core/meta'
], settings);
function settings () {
  'use strict';

  var moduleInterface = [
    IndexController
  ];

  return moduleInterface;

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
