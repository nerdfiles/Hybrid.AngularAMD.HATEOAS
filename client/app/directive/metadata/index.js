define([
  'interface'
], function(__interface__) {

  __interface__.directive('🏷', [__Metadata__]);

  function __Metadata__() {
    var dv = {
      scope: {
        metadata: '='
      },
      link: link,
      templateUrl: 'assets/app/directive/metadata/index.html'
    };
    return dv;
    function link($scope, $element, $attrs, $ctrl) {
    }
  }
});
