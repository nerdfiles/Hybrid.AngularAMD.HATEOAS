/**
 * @ngdoc controller
 */
define([
  'core/window',
  'core/meta',
  './module/conversations/directive/index'
], () => {

  return [
    '$scope',
    conversations
  ]

  /**
   * @name conversation
   * @returns {*} undefined
   */
  function conversations() {
  }
})
