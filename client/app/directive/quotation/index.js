define([
  'interface'
], function(__interface__) {
  __interface__.directive('🔁', [__Quotation__])
  function __Quotation__() {
    var dv = {
      scope: {
        quotation: '='
      },
      link: link,
      templateUrl: 'assets/app/directive/quotation/index.html'
    }
    return dv
    function link($scope, $element, $attrs, $ctrl) {
    }
  }
})
