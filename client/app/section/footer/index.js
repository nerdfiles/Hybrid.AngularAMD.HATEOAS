// ./client/scripts/section/footer/index.js
/**
 * @ngdoc overview
 * @name app.footer.section:index
 * @description Footer Section Index Controller.
 */
function footer () {
  var sectionInterface = [
    IndexController
  ];
  return sectionInterface;
  /**
   * @ngdoc controller
   * @name IndexController
   * @memberOf app.footer.section:index
   * @returns {*} undefined
   */
  function IndexController () {
    var vm = this;
    vm.sectionTitle = 'Footer';
    ////////////
  }
}

define([
  'core/directive/manifest'
], footer);
