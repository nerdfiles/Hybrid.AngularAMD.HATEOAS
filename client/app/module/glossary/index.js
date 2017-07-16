/**
 * @ngdoc controller
 */
define([
  'core/window',
  'core/meta',
  './module/glossary/directive/index'
], () => {

  return [
    '$scope',
    glossary
  ]

  /**
   * @name glossary
   * @returns {*} undefined
   */
  function glossary($scope) {
  }
})
