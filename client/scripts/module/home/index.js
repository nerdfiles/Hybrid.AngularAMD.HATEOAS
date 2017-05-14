// ./client/scripts/module/home/index.js
/**
 * @ngdoc overview
 * @name app.home.module:index
 * @description Home Module Index Controller.
 */
define([
  'core/window',
  'core/meta'
], function () {

  var moduleInterface = [
    HomeModuleIndexController
  ];

  return moduleInterface;

  function HomeModuleIndexController () {

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
});
