define([
  'interface'
], function(__interface__) {
  __interface__.directive('🔤', [__Form__])
  function __Form__() {
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
