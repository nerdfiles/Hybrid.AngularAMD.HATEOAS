/**
 * @ngdoc directive
 */
define([
  'interface'
], function(__interface__) {
  'use strict'

  var directiveInterface = [
    '$rootScope',
    __Form__
  ]

  __interface__.directive('🔤', directiveInterface)

  /**
   * @name __Form__
   * @schema
   *   form[
   *     [
   *       {
   *         id: 'name',
   *         label: 'Some name',
   *         name: 'name',
   *         type: 'text',
   *         value: '',
   *         placeholder: ''
   *       }
   *     ]
   *   ]
   * @usage
   *   <section
   *     🔤
   *     form="vm.form"
   *   >
   *   </section>
   * @returns {object} AngularJS directive factory.
   */
  function __Form__($rootScope) {
    var dv = {
      scope: {
        form: '='
      },
      link: link,
      templateUrl: 'assets/app/directive/form/index.html'
    }
    return dv
    function link($scope, $element, $attrs, $ctrl) {
    }
  }
})
