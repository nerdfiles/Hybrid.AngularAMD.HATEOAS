/**
 * @ngdoc overview
 */
define([
  'interface'
], (__interface__) => {

  var __Conversation__ = [
    '$rootScope',
    ConversationAction
  ];

  __interface__.directive('app💬', __Conversation__);

  ConversationActionController.$inject = [
    '$rootScope'
  ];

  function ConversationActionController($rootScope) {
    var vm = this;
  }

  function ConversationAction($rootScope) {
    var dv  = {
      link             : link,
      scope            : {},
      controller       : [ConversationActionController],
      bindToController : true,
      controllerAs     : 'vm',
      templateUrl      : './assets/app/module/conversations/directive/index.html'
    };

    /**
     * @name link
     * @param $scope
     * @param $element
     * @param $attrs
     * @param $ctrl
     * @returns {undefined}
     */
    function link($scope, $element, $attrs, $ctrl) {
    }
  }
})
